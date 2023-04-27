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
import { SocialIcon } from 'react-native-elements'
import { LoadingOverlay } from '../../../comp/LoadingOverlay'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import moment from 'moment'
import { formatDateWithoutTime } from '../../../utils/helpers'
import { FabGroup } from '../../../comp/FabGroup'
interface GoogleFitRecordInfo {
  deviceList: Device[],
  totalCalories: number,
  totalDistance: number,
  totalTimeSpend: number,
  startTime: number,
  endTime: number
}

export default function GoogleFitRecord() {
  const theme = useAppTheme()
  WebBrowser.maybeCompleteAuthSession();
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [googleFitRecord, setGoogleFitRecord] = useState<GoogleFitRecordInfo>({
    deviceList: [],
    totalCalories: 0,
    totalDistance: 0,
    totalTimeSpend: 0,
    endTime: Math.floor(
      moment
        .unix(new Date().getTime() / 1000 + 86400)
        .endOf('day')
        .valueOf()
    ),
    startTime: Math.floor(
      moment
        .unix(new Date().getTime() / 1000)
        .startOf('day')
        .valueOf()
    ),
  })

  console.log(googleFitRecord)
  // time picker
  const [showStartTimePicker, setShowStartTimePicker] = useState(false)
  const [showEndTimePicker, setShowEndTimePicker] = useState(false)

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
      const endDate = new Date()
      const startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)
      getGoogleFitRecord(startDate, endDate)
    }
  }, [response]);

  // Get me and check user authorized or not 
  useEffect(() => {
    getUserInfo().then(() => {
      const endDate = new Date()
      const startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000)
      getGoogleFitRecord(startDate, endDate)
    })
  }, [])

  const getUserInfo = async () => {
    try {
      setIsLoading(true)
      await googleAuthClient.getMe()
      setIsSignedIn(true)
    }
    catch (error) {
      setIsSignedIn(false)
      console.log("UNAUTHORIZED OR ERROR WHEN AUTHORIZE USER")
    }
    finally {
      setIsLoading(false)
    }
  }

  const appendGoogleFitRecordValue = (type: string, points: Point[], googleFitRecord: GoogleFitRecordInfo) => {
    points.forEach(point => {
      if (point.value) {
        point.value.forEach(pointValue => {
          switch (type) {
            case AGGREGATES_BY.cal.dataSourceId:
              googleFitRecord.totalCalories += (pointValue.fpVal) ? pointValue.fpVal : 0
              break;
            case AGGREGATES_BY.dis.dataSourceId:
              googleFitRecord.totalDistance += (pointValue.fpVal) ? pointValue.fpVal : 0
              break;
            case AGGREGATES_BY.min.dataSourceId:
              googleFitRecord.totalTimeSpend += (pointValue.intVal) ? pointValue.intVal : 0
              break;
            default:
              break;
          }
        })
      }
    })
    return googleFitRecord
  }

  const setStart = (event: DateTimePickerEvent, date: Date | undefined) => {
    setShowStartTimePicker(false)
    setGoogleFitRecord({ ...googleFitRecord, startTime: date ? date.getTime() : new Date().getTime() })
  }



  const getGoogleFitRecord = async (startDate: Date, endDate: Date) => {
    try {
      const dataSourceListPromise = googleFitClient.listDataSources()
      const bucketDatasetListPromise = googleFitClient.listDataSets({
        startTimeNanoSeconds: startDate.getTime(),
        endTimeNanoSeconds: endDate.getTime(),
      })
      const [dataSourceList, bucketDatasetList] = await Promise.all([dataSourceListPromise, bucketDatasetListPromise])

      if (bucketDatasetList && bucketDatasetList.bucket && bucketDatasetList.bucket.length > 0) {
        bucketDatasetList.bucket[0].dataset.forEach(
          dataset => {
            if (dataset.point) {
              setGoogleFitRecord(appendGoogleFitRecordValue(dataset.dataSourceId, dataset.point, googleFitRecord))
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
        googleFitRecord.deviceList = dataDevices
      }

      googleFitRecord.deviceList.push({
        manufacturer: "Samsung",
        model: "AG-134",
        type: "Phone",
        uid: "123456789",
        version: "SAG124"
      } as Device)
      console.log(googleFitRecord)
      return googleFitRecord
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <LoadingOverlay loading={isLoading} />
      <View style={styles(theme).extendedBaseContainer}>
        <View style={baseStyles(theme).innerWrapper}>
          {isSignedIn ?
            <><FabGroup
              actions={[
                {
                  icon: 'sync',
                  label: 'Sync Data',
                  labelTextColor: theme.colors.onTertiary,
                  color: theme.colors.onTertiary,
                  style: { backgroundColor: theme.colors.tertiary },
                  onPress: () => { }
                  //  navigator.navigate('GroupAdd', {
                  //    reloadYourGroupList: () => fetchListYourGroups(),
                  //  }),
                },
              ]}
              type="tertiary" />
              {/* <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                  <Text>From: </Text>
                  <TextInput
                    mode="outlined"
                    value={new Date(googleFitRecord.startTime).toLocaleDateString()}
                    editable={false}
                    right={<TextInput.Icon
                      icon="calendar"
                      onPress={() => setShowStartTimePicker(true)} />}
                    style={{ width: 150, fontSize: 15, height: 40 }} />
                  {showStartTimePicker && (
                    <DateTimePicker
                      value={googleFitRecord.startTime ? new Date(googleFitRecord.startTime) : new Date()}
                      mode="date"
                      display="default"
                      onChange={setStart} />
                  )}

                </View>

                <View style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                  <Text>To: </Text>
                  <TextInput
                    mode="outlined"
                    value={new Date(googleFitRecord.endTime).toLocaleDateString()}
                    editable={false}
                    right={<TextInput.Icon
                      icon="calendar"
                      onPress={() => setShowStartTimePicker(true)} />}
                    style={{ width: 150, fontSize: 15, height: 40 }} />
                  {showEndTimePicker && (
                    <DateTimePicker
                      value={googleFitRecord.endTime ? new Date(googleFitRecord.endTime) : new Date()}
                      mode="date"
                      display="default"
                      onChange={setStart} />
                  )}
                </View>
              </View> */}

              <View>
                <List.Accordion
                  title="Devices"
                  left={props => <List.Icon {...props} icon="tablet-cellphone" />}
                >
                  {googleFitRecord.deviceList && googleFitRecord.deviceList.map(
                    device => <List.Item title={device.manufacturer + " " + device.model} />
                  )}
                </List.Accordion>
              </View>

              <View >
                <View style={{}}>
                <Card.Title
                  title="Distance"
                  subtitle={googleFitRecord ? googleFitRecord.totalDistance.toString() : ''}
                  left={(props) => <Avatar.Icon {...props} icon="map-marker-distance" />}
                  style={{
                    backgroundColor: theme.colors.onTertiary,
                    borderRadius: 10,
                    padding: 20,
                    elevation: 4,
                    marginBottom: 5
                  }}
                // right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />

                <Card.Title
                  title="Calories"
                  subtitle={googleFitRecord ? googleFitRecord.totalCalories.toString() : ''}
                  left={(props) => <Avatar.Icon {...props} icon="lightning-bolt" />}
                  style={{
                    backgroundColor: theme.colors.onTertiary,
                    borderRadius: 10,
                    padding: 20,
                    elevation: 4,
                    marginBottom: 5
                  }}
                // right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />

                <Card.Title
                  title="Time Spend"
                  subtitle={googleFitRecord ? googleFitRecord.totalTimeSpend.toString() : ''}
                  left={(props) => <Avatar.Icon {...props} icon="clock-time-eight-outline" />}
                  style={{
                    backgroundColor: theme.colors.onTertiary,
                    borderRadius: 10,
                    padding: 20,
                    elevation: 4,
                    marginBottom: 5
                  }}
                // right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                />

                </View>

              </View>
              <View>
              </View></>
            :
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
              style={{
                marginTop: 100
              }}
            />
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
  })
