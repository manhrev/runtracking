import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useMemo, useState } from 'react'
import { ScrollView, View, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Avatar, Button, IconButton, Text, TextInput } from 'react-native-paper'
import { LoadingOverlay } from '../../../../comp/LoadingOverlay'

import { useImageUpload } from '../../../../hooks/useImageUpload'
import { UpdateEventInfoRequest } from '../../../../lib/event/event_pb'
import { RootBaseStackParamList } from '../../../../navigators/BaseStack'
import { AppTheme, useAppTheme } from '../../../../theme'
import { eventClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

export default function EditEvent({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'EditEvent'>) {
  const theme = useAppTheme()
  const { event } = route.params
  const [eventToUpdate, setEventToUpdate] =
    useState<UpdateEventInfoRequest.AsObject>({
      description: event.description,
      eventId: event.id,
      name: event.name,
      picture: event.picture,
    })
  const [loading, setLoading] = useState(false)

  const { pickImage, selectedImage, clearSelectedImage, uploadImage } =
    useImageUpload({
      aspect: [2, 1],
      quality: 0.5,
    })
  useMemo(() => {
    if (selectedImage) {
      setEventToUpdate({ ...eventToUpdate, picture: selectedImage })
    }
  }, [selectedImage])
  const { name, description, picture } = eventToUpdate

  const handleSubmit = async () => {
    if (name === '') {
      toast.error({ message: 'Please input event name!' })
      return
    }
    if (description === '') {
      toast.error({ message: 'Please add some description!' })
      return
    }

    setLoading(true)
    const { error: upImageError, imageUrl } = await uploadImage()
    if (upImageError) {
      toast.error({
        message: 'Error while uploading your picture, please try again!',
      })
      return setLoading(false)
    }
    const { error } = await eventClient.updateEventInfo({
      ...eventToUpdate,
      picture: imageUrl ? imageUrl : picture,
    })
    if (error) {
      toast.error({ message: 'An error occurred, please try again later!' })
      return setLoading(false)
    }
    toast.success({ message: 'Update event successfully!' })
    setLoading(false)
    route.params.reloadEvent()
    navigation.goBack()
    navigation.goBack()
  }

  return (
    <>
      <View style={styles(theme).container}>
        <LoadingOverlay loading={loading} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles(theme).eventPicture}
            source={
              picture == ''
                ? require('../../../../../assets/event-img.png')
                : { uri: picture }
            }
          />
          <IconButton
            icon="pencil"
            style={{
              zIndex: 9999,
              position: 'relative',
              alignSelf: 'flex-end',
              top: -30,
              marginBottom: -30,
            }}
            mode="contained"
            onPress={pickImage}
          />
          {/* </View> */}
          <Text style={styles(theme).title}>Event name: </Text>
          <TextInput
            mode="outlined"
            value={name}
            onChangeText={(text) => {
              setEventToUpdate({ ...eventToUpdate, name: text })
            }}
            placeholder="Event name"
          />
          <Text style={styles(theme).title}>Description: </Text>
          <TextInput
            multiline
            numberOfLines={3}
            mode="outlined"
            value={description}
            onChangeText={(text) => {
              setEventToUpdate({ ...eventToUpdate, description: text })
            }}
            placeholder="Description"
          />
          <Text style={styles(theme).title}>Challenges: </Text>

          <View style={styles(theme).btnContainer}>
            <Button
              mode="contained"
              buttonColor="#e82525"
              onPress={() => {
                navigation.goBack()
              }}
              style={styles(theme).button}
            >
              Cancel
            </Button>

            <Button
              mode="contained"
              onPress={handleSubmit}
              style={styles(theme).button}
            >
              Update
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
const styles = (theme: AppTheme) =>
  StyleSheet.create({
    eventPicture: {
      alignSelf: 'center',
      zIndex: 2,
      height: 200,
      width: '100%',
      marginTop: 20,
    },
    container: {
      flex: 1,
      marginLeft: 16,
      marginRight: 16,
    },
    title: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
    },
    button: {
      flex: 1,
      margin: 12,
    },
    btnContainer: {
      marginTop: 20,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
