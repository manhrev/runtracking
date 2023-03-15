import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ImageBackground, Platform, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import { useAppTheme } from '../../theme'

export default function Intro({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'Intro'>) {
  const theme = useAppTheme()
  return (
    <View style={{ flex: 1, display: 'flex' }}>
      <View
        style={{
          flex: 3,
          backgroundColor: '#FEFEFE',
          justifyContent: 'flex-end',
          elevation: Platform.OS === 'android' ? 0.1 : 0,
          zIndex: 200,
        }}
      >
        <View
          style={{
            position: 'relative',
            top: 50,
          }}
        >
          <Text
            variant="displaySmall"
            style={{ textAlign: 'center', fontWeight: 'bold' }}
          >
            Welcome to{'\n'}Runtracking
          </Text>
          <Text
            variant="titleLarge"
            style={{ textAlign: 'center', fontWeight: 'bold' }}
          >
            Break your limits!
          </Text>
        </View>
      </View>
      <ImageBackground
        style={{ flex: 10, justifyContent: 'flex-end', zIndex: 2 }}
        source={require('./../../../assets/Banners/intro2.jpg')}
      >
        <View
          style={{
            paddingHorizontal: 50,
            position: 'relative',
            top: 30,
            zIndex: 3,
          }}
        >
          <Button
            mode="contained"
            onPress={() => {
              navigation.navigate('Signup')
            }}
            style={{ marginTop: 30, borderRadius: 50 }}
            contentStyle={{
              borderRadius: 100,
            }}
            labelStyle={{
              fontSize: 25,
              paddingVertical: 10,
              lineHeight: 30,
              textAlign: 'center',
            }}
          >
            JOIN NOW!
          </Button>
        </View>
      </ImageBackground>
      <View style={{ flex: 4, backgroundColor: '#E8E8E8' }}>
        <Text
          variant="titleMedium"
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: theme.colors.primary,
            position: 'relative',
            top: 30 + 10,
          }}
          onPress={() => navigation.navigate('Login')}
        >
          Already have an account?{'\n'}Login here!
        </Text>
      </View>
    </View>
  )
}
