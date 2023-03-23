import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Button, IconButton, Text, TextInput } from 'react-native-paper'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import { AppTheme, useAppTheme } from '../../theme'
import { authClient } from '../../utils/grpc'
import { toast } from '../../utils/toast/toast'
import { baseStyles } from '../baseStyle'

export default function GetInfo({
  navigation,
}: NativeStackScreenProps<RootBaseStackParamList, 'GetInfo'>) {
  const theme = useAppTheme()
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const handleContinue = async () => {
    if (age == '' || height == '' || weight == '') {
      toast.error({ message: 'Please fill all fields' })
      return
    }

    const { error } = await authClient.updateHealthInfo({
      age: parseInt(age),
      height: parseInt(height),
      weight: parseInt(weight),
    })

    if (error) {
      toast.error({ message: 'An error occurred, please try again' })
    } else {
      toast.success({ message: 'Create account successfully, please login' })
      navigation.navigate('Login')
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
            <View style={{ flex: 1, alignItems: 'center' }}></View>
            <View style={{ flex: 1 }}></View>
          </View>
          <View>
            <Image
              style={{
                width: '80%',
                height: 170,
                borderRadius: 50,
                alignSelf: 'center',
              }}
              source={require('./../../../assets/Banners/getinf.jpg')}
            />
          </View>
          <Text
            variant="bodyLarge"
            style={{ fontWeight: 'bold', lineHeight: 18, paddingTop: 20 }}
          >
            We need these information to calculate your activity, you can use
            default values here
          </Text>
          <View style={{ marginTop: 20 }}>
            <TextInput
              mode="outlined"
              label="Age"
              value={age}
              onChangeText={(text) => setAge(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
            <TextInput
              mode="outlined"
              label="Height (cm)"
              value={height}
              onChangeText={(text) => setHeight(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
            <TextInput
              mode="outlined"
              label="Weight (kg)"
              value={weight}
              onChangeText={(text) => setWeight(text)}
              selectionColor={theme.colors.backdrop}
              style={styles(theme).inputStyle}
            />
          </View>
          <Button
            mode="contained"
            onPress={handleContinue}
            style={{ marginTop: 30, borderRadius: 50 }}
            contentStyle={{ paddingVertical: 5, borderRadius: 100 }}
          >
            <Text
              variant="titleMedium"
              style={{ color: theme.colors.onPrimary, fontWeight: 'bold' }}
            >
              Finish
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
