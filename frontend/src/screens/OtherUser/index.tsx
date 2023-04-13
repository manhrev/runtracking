import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { useModal } from '../../hooks/useModal'

import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import { baseStyles } from '../baseStyle'
import ProfileAchievement from './comp/ProfileAchievement'
import ProfileInfo from './comp/ProfileInfo'
import ImagePreview from './comp/ImagePreview'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import {
  isOtherUserLoading,
  resetOtherUser,
  selectOtherUserSlice,
} from '../../redux/features/otherUser/slice'
import {
  getOtherUserAchievementThunk,
  getUserPublicInfoThunk,
} from '../../redux/features/otherUser/thunks'
import { LoadingOverlay } from '../../comp/LoadingOverlay'

export default function OtherUser({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'OtherUser'>) {
  const theme = useAppTheme()
  const userIdParam = route.params.userId
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(selectOtherUserSlice)
  const { displayName, profilePicture, userId, username } = user
  const loading = useAppSelector(isOtherUserLoading)

  const [isInfoSelected, setIsInfoSelected] = useState(true)

  const { closeModal, modalVisible, openModal } = useModal()

  const fetchUserData = async () => {
    dispatch(getUserPublicInfoThunk(userIdParam))
    dispatch(getOtherUserAchievementThunk(userIdParam))
  }

  useEffect(() => {
    fetchUserData()

    return () => {
      dispatch(resetOtherUser())
    }
  }, [])

  return (
    <>
      <LoadingOverlay loading={loading} />
      <ImagePreview
        imageUrl={profilePicture}
        hideModal={closeModal}
        visible={modalVisible}
        showModal={openModal}
        displayName={displayName[0]}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchUserData} />
        }
      >
        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .32)"
          onPress={() => openModal()}
          style={{ zIndex: 10 }}
        >
          <View style={styles(theme).profileBackgroundContainer}>
            {!profilePicture ? (
              <Avatar.Text
                size={170}
                label={displayName[0]}
                style={styles(theme).profilePicture}
              />
            ) : (
              <Image
                style={styles(theme).profilePicture}
                source={{ uri: profilePicture }}
              />
            )}
            <View style={styles(theme).profilePictureBack}></View>
          </View>
        </TouchableRipple>
        <View style={styles(theme).extendedBaseContainer}>
          <View style={baseStyles(theme).innerWrapper}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Text
                  variant="headlineMedium"
                  style={{ fontWeight: 'bold', marginBottom: 15 }}
                >
                  {displayName}
                </Text>
              </View>
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Button icon="send" mode="contained-tonal" onPress={() => {
                  navigation.navigate('Chat', 
                    {userId: userId, toUserId: userIdParam})
                }}>
                  Send message
                </Button>
              </View>
              {/* <View>
                <IconButton
                  mode="contained-tonal"
                  icon="cog-outline"
                  onPress={() => {}}
                />
              </View>
              <View>
                <IconButton
                  mode="contained-tonal"
                  icon="bell-outline"
                  onPress={() => {}}
                  style={{ marginHorizontal: 0 }}
                />
              </View> */}
            </View>
          </View>
        </View>
        <Divider />
        <View style={{ backgroundColor: theme.colors.background }}>
          <View style={baseStyles(theme).innerWrapper}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 10,
              }}
            >
              <Button
                mode={isInfoSelected ? 'elevated' : 'text'}
                onPress={() => {
                  setIsInfoSelected(true)
                }}
              >
                Info
              </Button>
              <Button
                mode={!isInfoSelected ? 'elevated' : 'text'}
                style={{ marginLeft: 4 }}
                onPress={() => setIsInfoSelected(false)}
              >
                Achievements
              </Button>
            </View>
          </View>
        </View>
        <Divider />
        <View>{isInfoSelected ? <ProfileInfo /> : <ProfileAchievement />}</View>
      </ScrollView>
    </>
  )
}
const styles = (theme: AppTheme) =>
  StyleSheet.create({
    extendedBaseContainer: {
      ...baseStyles(theme).container,
      paddingTop: 44,
      paddingBottom: 15,
      flex: 0,
    },
    profileBackgroundContainer: {
      backgroundColor: theme.colors.tertiaryContainer,
      height: 220,
      justifyContent: 'flex-end',
      zIndex: 1,
    },
    profilePicture: {
      borderRadius: 100,
      width: 170,
      height: 170,
      top: 38 + 175,
      left: 13 + 5,
      zIndex: 2,
    },
    profilePictureBack: {
      width: 180,
      height: 180,
      backgroundColor: theme.colors.onPrimary,
      position: 'relative',
      borderRadius: 100,
      top: 38,
      left: 13,
    },
  })
