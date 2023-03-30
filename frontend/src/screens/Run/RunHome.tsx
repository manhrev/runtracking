import { Dimensions, StyleSheet, View } from 'react-native'
import {
  Button,
  Divider,
  IconButton,
  Text,
  Dialog,
  Portal,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'

const windowWidth = Dimensions.get('window').width

export default function Run({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'RunHome'>) {
  const theme = useAppTheme()

  return (
    <View style={styles(theme).container}>
      <Button onPress={() => navigation.navigate('RunTracking')}>Run now &gt;</Button>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
