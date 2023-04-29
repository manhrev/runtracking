import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { useModal } from '../../../hooks/useModal'
import { RootHomeTabsParamList } from '../../../navigators/HomeTab'
import {
  isUserSliceLoading,
  selectUserSlice,
} from '../../../redux/features/user/slice'
import {
  getMeThunk,
  getUserAchievementThunk,
} from '../../../redux/features/user/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { AppTheme, useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import ProfileAchievement from '../comp/ProfileAchievement'
import ProfileInfo from '../comp/ProfileInfo'
import ImagePreview from './comp/ImagePreview'
import { ProfileInfoTabStr } from '../../../constants/enumstr/group'
import GoogleFitRecord from '../GoogleFitRecord/index'


export default function ProfileHome({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'ProfileHome'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { displayName, profiePicture, userId } = useAppSelector(selectUserSlice)

  const loading = useAppSelector(isUserSliceLoading)
  // const [isInfoSelected, setIsInfoSelected] = useState(true)
  const [tabSelected, setTabSelected] = useState(ProfileInfoTabStr.INFO)

  const handleEditYourProfile = () => {
    navigation.navigate('ProfileSetting')
  }
  const handleSettingApp = () => {
    navigation.navigate('AppSetting')
  }
  const handleViewNofification = () => {
    navigation.navigate('NotificationList', {})
  }
  const handleViewConversation = () => {
    navigation.navigate('ConversationList')
  }

  const { closeModal, modalVisible, openModal } = useModal()

  const fetchUserData = async () => {
    await dispatch(getMeThunk())
    dispatch(getUserAchievementThunk({ userIdsList: [userId] }))
  }

  const getTabView = (tabName: string) : JSX.Element => {
    switch(tabName){
      case ProfileInfoTabStr.INFO:
        return <ProfileInfo />
        case ProfileInfoTabStr.ACHIEVEMENT:
          return <ProfileAchievement />
        default:
          return <GoogleFitRecord />
    }
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <ImagePreview
        imageUrl={profiePicture}
        hideModal={closeModal}
        visible={modalVisible}
        showModal={openModal}
        displayName={displayName[0]}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: StatusBar.currentHeight }}
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
            {!profiePicture ? (
              <Avatar.Text
                size={170}
                label={displayName[0]}
                style={styles(theme).profilePicture}
              />
            ) : (
              <Image
                style={styles(theme).profilePicture}
                source={{ uri: profiePicture }}
              />
            )}
            <View style={styles(theme).profilePictureBack}></View>
          </View>
        </TouchableRipple>
        <View style={styles(theme).extendedBaseContainer}>
          <View style={baseStyles(theme).innerWrapper}>
            <Text
              variant="headlineMedium"
              style={{ fontWeight: 'bold', marginBottom: 15 }}
            >
              {displayName}
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Button
                  icon="lead-pencil"
                  mode="contained-tonal"
                  onPress={handleEditYourProfile}
                >
                  <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>
                    Edit your profile
                  </Text>
                </Button>
              </View>
              <View>
                <IconButton
                  mode="contained-tonal"
                  icon="cog-outline"
                  onPress={handleSettingApp}
                />
              </View>
              <View>
              <IconButton
                  mode="contained-tonal"
                  icon="account-multiple"
                  onPress={handleViewConversation}
                />
              </View>
              <View>
                <IconButton
                  mode="contained-tonal"
                  icon="bell-outline"
                  onPress={handleViewNofification}
                  style={{ marginHorizontal: 0 }}
                />
              </View>
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
                mode={tabSelected === ProfileInfoTabStr.INFO ? 'elevated' : 'text'}
                onPress={() => {
                  setTabSelected(ProfileInfoTabStr.INFO)
                }}
              >
                Info
              </Button>
              <Button
                mode={tabSelected === ProfileInfoTabStr.ACHIEVEMENT ? 'elevated' : 'text'}
                style={{ marginLeft: 4 }}
                onPress={() => {
                  setTabSelected(ProfileInfoTabStr.ACHIEVEMENT)
                }}
              >
                Your achievements
              </Button>

              <Button
                mode={tabSelected === ProfileInfoTabStr.GOOGLE_FIT_RECORD? 'elevated' : 'text'}
                style={{ marginLeft: 4 }}
                onPress={() => {
                  setTabSelected(ProfileInfoTabStr.GOOGLE_FIT_RECORD)
                }}
              >
                Google Fit Record
              </Button>
            </View>
          </View>
        </View>
        <Divider />
        <View>{getTabView(tabSelected)}</View>
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
