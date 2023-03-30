import { useState } from 'react'
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import { Avatar, Modal, Portal, Provider, Text } from 'react-native-paper'
import { FabGroup } from '../../../../comp/FabGroup'
import { LoadingOverlay } from '../../../../comp/LoadingOverlay'
import { useImageUpload } from '../../../../hooks/useImageUpload'
import { UserInfo } from '../../../../lib/auth/auth_pb'
import { getMeThunk } from '../../../../redux/features/user/thunk'
import { useAppDispatch } from '../../../../redux/store'
import { AppTheme, useAppTheme } from '../../../../theme'
import { authClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

const windowWidth = Dimensions.get('window').width

interface ImagePreviewProps {
  imageUrl: string
  visible: boolean
  displayName: string
  hideModal: () => void
  showModal: () => void
}

const ImagePreview = ({
  hideModal,
  imageUrl,
  visible,
  displayName,
}: ImagePreviewProps) => {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const [uploading, setUploading] = useState(false)

  const { pickImage, selectedImage, clearSelectedImage, uploadImage } =
    useImageUpload({
      aspect: [1, 1],
      quality: 0.5,
    })
  const close = () => {
    hideModal()
    clearSelectedImage()
  }
  const submitImage = async () => {
    setUploading(true)
    close()
    const { error, imageUrl } = await uploadImage()
    if (error) {
      toast.error({ message: "Can't upload image, please try again" })
      setUploading(false)

      return
    }
    const userInfo = new UserInfo().toObject()
    userInfo.profilePicture = imageUrl

    const { error: errorUpdate } = await authClient.updateUserInfo({
      userInfo,
    })

    if (errorUpdate) {
      toast.error({ message: 'An error occured' })
      setUploading(false)
      return
    }
    toast.success({ message: 'Profile picture updated!' })
    dispatch(getMeThunk())
    setUploading(false)
  }

  return (
    <>
      <LoadingOverlay loading={uploading} />
      {/* <ConfirmDialog
        message="Do you want to update your profile picture?"
        visible={dialogSubmitOpen}
        toogleDialog={toggleSubmitDialog}
        onSubmit={() => {
          toggleSubmitDialog()
          submitImage()
        }}
      /> */}
      <View style={{ zIndex: 1 }}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={close}
            contentContainerStyle={styles(theme).containerStyle}
          >
            <View
              style={{
                marginBottom: 100,
              }}
            >
              {imageUrl || selectedImage ? (
                <Image
                  source={{ uri: selectedImage || imageUrl }}
                  style={{
                    width: windowWidth,
                    height: windowWidth,
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <Avatar.Text
                  size={windowWidth}
                  label={displayName}
                  style={{
                    borderRadius: 0,
                  }}
                />
              )}
            </View>
          </Modal>
        </Portal>
      </View>
      {visible && (
        <FabGroup
          actions={[
            ...(selectedImage
              ? []
              : [
                  // {
                  //   icon: 'delete',
                  //   labelTextColor: theme.colors.onError,
                  //   onPress: () => {
                  //     toast.error({ message: 'Not implemented yet' })
                  //   },
                  //   color: theme.colors.onError,
                  //   style: { backgroundColor: theme.colors.error },
                  // },
                  {
                    icon: 'pencil',
                    labelTextColor: 'white',
                    label: 'Change profile picture',
                    onPress: pickImage,
                    color: theme.colors.onPrimary,
                    style: { backgroundColor: theme.colors.primary },
                  },
                ]),
            ...(selectedImage
              ? [
                  {
                    icon: 'check',
                    labelTextColor: 'white',
                    onPress: submitImage,
                    label: 'Save profile picture',
                    color: theme.colors.onPrimary,
                    style: { backgroundColor: theme.colors.primary },
                  },
                  {
                    icon: 'file-undo',
                    labelTextColor: 'white',
                    label: 'Revert all changes',
                    onPress: clearSelectedImage,
                    color: theme.colors.onPrimary,
                    style: { backgroundColor: theme.colors.primary },
                  },
                ]
              : []),
          ]}
          type="primary"
          icon={selectedImage ? 'check' : undefined}
          forceOpen={visible}
        />
      )}
    </>
  )
}

export default ImagePreview

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    containerStyle: {
      backgroundColor: 'black',
      padding: 20,
      width: '100%',
      height: '100%',
      alignSelf: 'center',
    },
  })
