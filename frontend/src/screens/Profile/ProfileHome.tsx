import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import { Avatar, Button, Divider, IconButton, Text } from 'react-native-paper'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { selectUserSlice } from '../../redux/features/user/slice'
import { getMeThunk } from '../../redux/features/user/thunk'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import { baseStyles } from '../baseStyle'
import ProfileAchievement from './comp/ProfileAchievement'
import ProfileInfo from './comp/ProfileInfo'

export default function ProfileHome({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'ProfileHome'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { displayName } = useAppSelector(selectUserSlice)
  const [isInfoSelected, setIsInfoSelected] = useState(true)
  const handleEditYourProfile = () => {
    navigation.navigate('ProfileSetting')
  }
  const handleSettingApp = () => {
    navigation.navigate('AppSetting')
  }
  const handleViewNofification = () => {
    navigation.navigate('NotificationList', {})
  }
  useEffect(() => {
    dispatch(getMeThunk())
  }, [])
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: StatusBar.currentHeight }}
      >
        <View style={styles(theme).profileBackgroundContainer}>
          <Avatar.Text
            size={170}
            label={displayName[0]}
            style={styles(theme).profilePicture}
          />
          <View style={styles(theme).profilePictureBack}></View>
        </View>
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
                Your achievements
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
