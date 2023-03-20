import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../navigators/GroupTopTab'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import GroupItem from './comp/YourGroupItem'

export default function YourGroups({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'YourGroups'>) {
  const theme = useAppTheme()

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <GroupItem />
      </View>
    </View>
  )
}
