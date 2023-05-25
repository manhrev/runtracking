import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import {
  Button,
  Checkbox,
  IconButton,
  Text,
  TextInput,
} from 'react-native-paper'
import { RootBaseStackParamList } from '../../navigators/BaseStack'

import { AppTheme, useAppTheme } from '../../theme'
import { authClient, KEY_ACCESS_TOKEN } from '../../utils/grpc'
import { toast } from '../../utils/toast/toast'
import { baseStyles } from '../baseStyle'

export default function Signup({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'Signup'>) {
  const theme = useAppTheme()
  const [username, setUsername] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const handleContinue = async () => {
    if (
      displayName == '' ||
      password == '' ||
      confirmPassword == '' ||
      displayName == ''
    ) {
      toast.error({ message: 'Please input' })
      return
    }

    if (password != confirmPassword) {
      toast.error({ message: 'Password confirm mismatch!' })
      return
    }

    const { error, response } = await authClient.signUp({
      displayName: displayName,
      password: password,
      userName: username,
    })

    if (error) {
      toast.error({ message: 'An error occurred, please try again' })
    } else {
      const token = response?.tokenInfo?.accessToken || ''
      await AsyncStorage.setItem(KEY_ACCESS_TOKEN, token)
      navigation.pop()
      navigation.navigate('GetInfo')
    }
  }
  return (
    <>
      <View style={baseStyles(theme).homeContainer}>
        <View style={baseStyles(theme).innerWrapper}>
          <View
            style={{
              paddingVertical: 20,
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 1 }}>
              <IconButton
                icon="arrow-left"
                size={24}
                onPress={() => navigation.goBack()}
                style={{ position: 'relative' }}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text
                variant="displaySmall"
                style={{ fontWeight: 'bold', alignSelf: 'center' }}
              >
                Sign Up
              </Text>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View>
            <Image
              style={{ width: '100%', height: 140 }}
              source={require('./../../../assets/Banners/signup_banner.jpg')}
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <TextInput
              mode="outlined"
              label="Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
            <TextInput
              mode="outlined"
              label="Display name"
              value={displayName}
              onChangeText={(text) => setDisplayName(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
            <TextInput
              secureTextEntry={true}
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
            <TextInput
              secureTextEntry={true}
              mode="outlined"
              label="Confirm password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
          </View>
          {/* <View
            style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}
          >
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked)
              }}
            />
            <Text
              variant="bodyLarge"
              style={{ fontWeight: 'bold', lineHeight: 18, paddingTop: 6 }}
            >
              I would like to receive your newsletter and other promotional
              information.
            </Text>
          </View> */}
          <Button
            mode="elevated"
            onPress={handleContinue}
            style={{ marginTop: 30, borderRadius: 50 }}
            contentStyle={{ paddingVertical: 5, borderRadius: 100 }}
          >
            <Text
              variant="titleMedium"
              style={{ color: theme.colors.primary, fontWeight: 'bold' }}
            >
              Continue
            </Text>
          </Button>
        </View>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    inputStyle: {
      marginBottom: 10,
    },
  })
