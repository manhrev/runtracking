import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../navigators/GroupTopTab'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import GroupItem from './comp/GroupItem'

export default function Explore({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'Explore'>) {
  const theme = useAppTheme()

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <GroupItem hideTopDivider />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem />
        <GroupItem showBottomDivider />
      </View>
    </View>
  )
}
