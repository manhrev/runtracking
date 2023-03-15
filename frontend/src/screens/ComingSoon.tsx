import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootBaseStackParamList } from '../navigators/BaseStack'
import { AppTheme, useAppTheme } from '../theme'

export default function ComingSoon({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList>) {
  const theme = useAppTheme()

  return (
    <View style={styles(theme).container}>
      <Text variant="displaySmall" style={{ fontWeight: 'bold' }}>
        Coming soon!
      </Text>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
