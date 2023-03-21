import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button } from 'react-native-paper'
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
        <TouchableOpacity
          onPress={() => navigation.navigate('GroupAdd')}
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: theme.colors.primary,
            }}
          >
            NEW GROUP
          </Text>

          <IconButton
            icon="plus-circle"
            style={{ alignSelf: 'flex-end', marginRight: 10 }}
            iconColor={theme.colors.primary}
            size={30}
          />
        </TouchableOpacity>
        <GroupItem hideTopDivider={true} />
      </View>
    </View>
  )
}
