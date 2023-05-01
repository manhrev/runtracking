import { useState } from 'react'
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import { Avatar, Button, Card, Modal, Portal, Provider, Text, TextInput } from 'react-native-paper'
import { FabGroup } from '../../../../comp/FabGroup'
import { LoadingOverlay } from '../../../../comp/LoadingOverlay'
import { AppTheme, useAppTheme } from '../../../../theme'
import { authClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'


interface SyncDataSettingProps {
    visible: boolean
    hideModal: () => void
    showModal: () => void
    getGoogleFitRecord: (startDate: Date, endDate: Date) => Promise<void>
    setStartDate : React.Dispatch<React.SetStateAction<Date>>
    setEndDate: React.Dispatch<React.SetStateAction<Date>>
    startDate: Date
    endDate: Date
}

const SyncDataSetting = ({
    hideModal,
    visible,
    endDate,
    startDate,
    setEndDate,
    setStartDate,
    getGoogleFitRecord
}: SyncDataSettingProps) => {
    const theme = useAppTheme()
    const [showStartTimePicker, setShowStartTimePicker] = useState(false)
    const [showEndTimePicker, setShowEndTimePicker] = useState(false)
    const [startDateSync, setStartDateSync] = useState(startDate ? startDate : new Date())
    const [endDateSync, setEndDateSync] = useState(endDate ? endDate : new Date())
    const [isLoading, setIsLoading] = useState(false)

    const close = () => {
        hideModal()
    }

    const syncData = async () => {
        setIsLoading(true)
        setStartDate(startDateSync)
        setEndDate(endDateSync)
        await getGoogleFitRecord(startDateSync, endDateSync)
        toast.success({ message: 'Sync Data Successfully' })
        setIsLoading(false)
        close()
    }

    const setStart = (event: DateTimePickerEvent, date: Date | undefined) => {
        setShowStartTimePicker(false)
        setStartDateSync(date ? date : new Date())
    }

    const setEnd = (event: DateTimePickerEvent, date: Date | undefined) => {
        setShowEndTimePicker(false)  
        setEndDateSync(date ? date : new Date())
    }

    return (
        <>
            <LoadingOverlay loading={isLoading} />
                <View >
                    <Portal>
                        <Modal
                            visible={visible}
                            onDismiss={close}
                      
                        >
                            <Card style={styles(theme).containerStyle}>
                                <Card.Title title="Sync Setting" titleStyle={styles(theme).cardTitle}/>
                                <Card.Content>
                                    <Text style={styles(theme).title}>Start Date</Text>
                                    <TextInput
                                        mode="outlined"
                                        value={startDateSync.toDateString()}
                                        editable={false}
                                        right={
                                            <TextInput.Icon
                                                icon="calendar"
                                                onPress={() => setShowStartTimePicker(true)}
                                            />
                                        }
                                    />
                                    {showStartTimePicker && (
                                        <DateTimePicker
                                            value={startDateSync}
                                            mode="date"
                                            display="default"
                                            onChange={setStart}
                                        />
                                    )}

                                    <Text style={styles(theme).title}>End Date</Text>
                                    <TextInput
                                        mode="outlined"
                                        value={endDateSync.toDateString()}
                                        editable={false}
                                        right={
                                            <TextInput.Icon
                                                icon="calendar"
                                                onPress={() => setShowEndTimePicker(true)}
                                            />
                                        }
                                    />
                                    {showEndTimePicker && (
                                        <DateTimePicker
                                            value={endDateSync}
                                            mode="date"
                                            display="default"
                                            onChange={setEnd}
                                        />
                                    )}
                                </Card.Content>
                                <Card.Actions style={styles(theme).cardAction}>
                                    <Button onPress={hideModal}>Cancel</Button>
                                    <Button onPress={syncData}>Sync</Button>
                                </Card.Actions>
                            </Card>
                        </Modal>
                    </Portal>
                </View>
    
        </>
    )
}

export default SyncDataSetting

const styles = (theme: AppTheme) =>
    StyleSheet.create({
        containerStyle: {
            padding: 10,
            marginHorizontal: 20,
            paddingVertical: 20
        },
        cardTitle:{
            fontSize: 20
        }
        ,
        cardAction: {
            marginVertical: 20
        },
        title: {
            marginTop: 10,
            marginBottom: 5,
            fontWeight: 'bold',
            fontSize: 16,
        },
    })
