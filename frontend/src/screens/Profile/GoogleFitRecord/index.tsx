import { Button, StyleSheet, View } from 'react-native'
import { Avatar, Card, Divider, List, Text, TextInput } from 'react-native-paper'
import { selectUserSlice } from '../../../redux/features/user/slice'
import { useAppSelector } from '../../../redux/store'
import { AppTheme, useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect, useState } from 'react'
import GoogleFit, { Scopes } from 'react-native-google-fit';
import * as Updates from 'expo-updates'
import { AGGREGATES_BY, Device, Point, User } from '../../../constants/googleapi'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { googleAuthClient, googleFitClient } from '../../../utils/rest'
import { GOOGLE_ACCESS_TOKEN } from '../../../utils/rest/abstract/restClient'
import { Icon, SocialIcon } from 'react-native-elements'
import { LoadingOverlay } from '../../../comp/LoadingOverlay'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import moment from 'moment'
import { formatDateWithoutTime } from '../../../utils/helpers'
import { FabGroup } from '../../../comp/FabGroup'
import GoogleFitSection from './comp/GoogleFitSection'
import { useModal } from '../../../hooks/useModal'
import SyncDataSetting from './comp/SyncDataSetting'
import { appendGoogleFitRecordValue } from '../../../utils/helpers/googlefit'
export interface GoogleFitRecordInfo {
    deviceList: Device[],
    totalCalories: number,
    totalDistance: number,
    totalTimeSpend: number,
}

export default function GoogleFitRecord() {
    const theme = useAppTheme()
    WebBrowser.maybeCompleteAuthSession();
    const [isSignedIn, setIsSignedIn] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const { closeModal, modalVisible, openModal } = useModal()
    const [startDate, setStartDate] = useState<Date>(new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000))
    const [endDate, setEndDate] = useState<Date>(new Date())

    const [googleFitRecord, setGoogleFitRecord] = useState<GoogleFitRecordInfo>({
        deviceList: [],
        totalCalories: 0,
        totalDistance: 0,
        totalTimeSpend: 0,
    })

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '804907557897-42i6bicgec6p9e651538ue4p7s9lbgla.apps.googleusercontent.com',
        expoClientId: '804907557897-5do8aq57fheeu8k84puq0fhiu6o3j79c.apps.googleusercontent.com',
        // redirectUri: 'https://auth.expo.io/@manhrev/runtracking/redirect',
        scopes: ['profile', 'email',
            Scopes.FITNESS_ACTIVITY_READ,
            Scopes.FITNESS_ACTIVITY_WRITE,
            Scopes.FITNESS_LOCATION_READ,
            Scopes.FITNESS_LOCATION_WRITE
        ],
    });



    useEffect(() => {
        if (response?.type === "success" && response.authentication) {
            const token = response.authentication.accessToken || ''
            AsyncStorage.setItem(GOOGLE_ACCESS_TOKEN, token)
            setIsSignedIn(true)
            setIsLoading(true)
            const endDateReq = endDate ? endDate : new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
            const startDateReq = startDate ? startDate : new Date()
            getGoogleFitRecord(startDateReq, endDateReq)
        }
    }, [response]);

    // Get me and check user authorized or not 
    useEffect(() => {
        getUserInfo().then(() => {
            setIsLoading(true)
            const endDateReq = endDate ? endDate : new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)
            const startDateReq = startDate ? startDate : new Date()
            getGoogleFitRecord(startDateReq, endDateReq)
        })
    }, [])

    const getUserInfo = async () => {
        try {
            await googleAuthClient.getMe()
            setIsSignedIn(true)
        }
        catch (error) {
            setIsSignedIn(false)
            console.log("UNAUTHORIZED OR ERROR WHEN AUTHORIZE USER")
        }
    }

    const getGoogleFitRecord = async (startDate: Date, endDate: Date) => {
        try {
            const dataSourceListPromise = googleFitClient.listDataSources()
            const bucketDatasetListPromise = googleFitClient.listDataSets({
                startTimeNanoSeconds: startDate.getTime(),
                endTimeNanoSeconds: endDate.getTime(),
            })
            googleFitRecord.totalCalories = 0
            googleFitRecord.totalDistance = 0
            googleFitRecord.totalTimeSpend = 0
            let googleFitRecordTemp = googleFitRecord
            const [dataSourceList, bucketDatasetList] = await Promise.all([dataSourceListPromise, bucketDatasetListPromise])

            if (bucketDatasetList && bucketDatasetList.bucket && bucketDatasetList.bucket.length > 0) {
                bucketDatasetList.bucket[0].dataset.forEach(
                    dataset => {
                        if (dataset.point) {
                            googleFitRecordTemp = appendGoogleFitRecordValue(dataset.dataSourceId, dataset.point, googleFitRecord)
                        }
                    })
            }

            if (dataSourceList.dataSource != null) {
                let dataDevices = dataSourceList.dataSource.
                    filter(dataSource => dataSource.device != null).
                    map(dataSource => dataSource.device)
                // filter duplicate device
                dataDevices = dataDevices.filter((value, index) => {
                    const _value = JSON.stringify(value);
                    return index === dataDevices.findIndex(obj => {
                        return JSON.stringify(obj) === _value;
                    });
                });
                googleFitRecordTemp.deviceList = dataDevices
            }

            googleFitRecordTemp.deviceList.push({
                manufacturer: "Samsung",
                model: "AG-134",
                type: "Phone",
                uid: "123456789",
                version: "SAG124"
            } as Device)
            setGoogleFitRecord(googleFitRecordTemp)

        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <LoadingOverlay loading={isLoading} />
            <View style={styles(theme).extendedBaseContainer}>
                <View style={baseStyles(theme).innerWrapper}>
                    {isSignedIn ?
                        <>
                            <SyncDataSetting
                                hideModal={closeModal}
                                showModal={openModal}
                                visible={modalVisible}
                                endDate={endDate}
                                startDate={startDate}
                                getGoogleFitRecord={getGoogleFitRecord}
                                setEndDate={setEndDate}
                                setStartDate={setStartDate}
                                key="data-setting"
                            />
                            {!modalVisible && <FabGroup
                                actions={[
                                    {
                                        icon: 'sync',
                                        label: 'Sync Data',
                                        labelTextColor: theme.colors.onTertiary,
                                        color: theme.colors.onTertiary,
                                        style: { backgroundColor: theme.colors.tertiary },
                                        onPress: () => { openModal() }
                                    },
                                ]}
                                type="tertiary" />
                            }
                            <View style={styles(theme).datePeriod}>
                                <Avatar.Icon color='white' theme='white' size={30} style={styles(theme).dateIcon} icon="calendar-range" />
                                <Text style={styles(theme).datePeriodText}>{(startDate ? startDate : new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000)).toLocaleDateString() + " -> " + (endDate ? endDate : new Date()).toLocaleDateString()}</Text>
                            </View>
                            <View style={{
                                backgroundColor: theme.colors.onTertiary,
                                borderRadius: 10,
                                padding: 20,
                                elevation: 4,
                                marginBottom: 5
                            }}>
                                <List.Accordion
                                    title="Devices"
                                    left={props => <List.Icon {...props} icon="tablet-cellphone" />}
                                >
                                    {googleFitRecord.deviceList && googleFitRecord.deviceList.map(
                                        device => <List.Item 
                                        key={device.uid}
                                        title={device.manufacturer + " " + device.model} />
                                    )}
                                </List.Accordion>
                            </View>

                            <GoogleFitSection
                                key="distance"
                                icon="map-marker-distance"
                                subTitle={googleFitRecord ? googleFitRecord.totalDistance.toString() + " meters" : ''}
                                title="Distance"
                            />

                            <GoogleFitSection
                                key="calories"
                                icon="lightning-bolt"
                                subTitle={googleFitRecord ? Math.floor(googleFitRecord.totalCalories).toString() + " Cal" : ''}
                                title="Calories"
                            />

                            <GoogleFitSection
                                key="timespend"
                                icon="clock-time-eight-outline"
                                subTitle={googleFitRecord ? googleFitRecord.totalTimeSpend.toString() + " minutes" : ''}
                                title="Time Spend"
                            />
                            <View>
                            </View></>
                        :
                        <>
                            <View style={styles(theme).signInGoogle}>
                                <Text style={styles(theme).signInGoogleText}>You need to connect with your google account to have data recorded from Google Fit</Text>
                                <SocialIcon
                                    title='Sign in with Google'
                                    button
                                    light
                                    type='google'
                                    iconColor='black'
                                    underlayColor="black"
                                    onPress={() => {
                                        promptAsync();
                                    }}

                                />
                            </View>
                        </>
                    }
                </View>
            </View>
        </>
    )
}

const styles = (theme: AppTheme) =>
    StyleSheet.create({
        extendedBaseContainer: {
            ...baseStyles(theme).container,
            flex: 0,
        },
        infoValue: {
            paddingHorizontal: 20,
        },
        infoValueListItem: {
            display: 'flex',
            flexDirection: 'row',
            paddingVertical: 8,
        },
        datePeriod: {
            paddingHorizontal: 10,
            paddingVertical: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        datePeriodText: {
            fontSize: 15,
            fontWeight: '600',
            fontStyle: "italic"
        },
        dateIcon: {
            marginRight: 10,
            backgroundColor: theme.colors.primary
        },
        signInGoogle: {
            marginTop: 10,
            padding: 10
        },
        signInGoogleText: {
            marginBottom: 5,
            marginLeft: 10,
            fontSize: 15,
            fontStyle: 'italic',
            textAlign: 'center',
            marginRight: 10,
            fontWeight: '600',

        }
    })
