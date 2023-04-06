import { useState } from 'react'
import { Image, StyleSheet, Dimensions, View } from 'react-native'
import { Avatar, Modal, Portal, Provider, Text } from 'react-native-paper'
import { FabGroup } from '../../../comp/FabGroup'
import { LoadingOverlay } from '../../../comp/LoadingOverlay'
import { useImageUpload } from '../../../hooks/useImageUpload'
import { UserInfo } from '../../../lib/auth/auth_pb'
import { getMeThunk } from '../../../redux/features/user/thunk'
import { useAppDispatch } from '../../../redux/store'
import { AppTheme, useAppTheme } from '../../../theme'
import { authClient } from '../../../utils/grpc'
import { toast } from '../../../utils/toast/toast'

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

  const close = () => {
    hideModal()
  }

  return (
    <>
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
              {imageUrl ? (
                <Image
                  source={{ uri: imageUrl }}
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
                    alignSelf: 'center',
                  }}
                />
              )}
            </View>
          </Modal>
        </Portal>
      </View>
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
