import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'
import { TouchableOpacity, View } from 'react-native'
import {
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppTheme, useAppTheme } from '../theme'

interface CustomProps {
  theme: AppTheme
}
const TabBar: React.FC<BottomTabBarProps & CustomProps> = ({
  state,
  descriptors,
  navigation,
  theme,
}) => {
  const getIcon = (icon: string, solid: boolean) => {
    return ({
      GroupHome: solid ? 'account-group' : 'account-group-outline',
      ActivityHome: solid ? 'text-box-check' : 'text-box-check-outline',
      RunHome: 'run',
      PlanHome: solid ? 'file-document-edit' : 'file-document-edit-outline',
      ProfileHome: solid ? 'account' : 'account-outline',
    }[icon] || 'run') as
      | 'account-group'
      | 'account-group-outline'
      | 'text-box-check'
      | 'text-box-check-outline'
      | 'run'
      | 'file-document-edit'
      | 'file-document-edit-outline'
      | 'account'
      | 'account-outline'
      | 'plus-circle'
      | 'plus-circle-outline'
  }
  const getIconSize = (icon: string) => {
    return (
      {
        GroupHome: 25,
        ActivityHome: 25,
        RunHome: 35,
        PlanHome: 25,
        ProfileHome: 25,
      }[icon] || 26
    )
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        borderTopColor: theme.colors.onTertiary,
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        overflow: 'hidden',
        backgroundColor: theme.colors.surface,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        const labela = label as string
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <View
            key={index}
            style={{
              flex: labela === 'RunHome' ? 5 : 6,
              overflow: 'hidden',
              height: labela === 'RunHome' ? '95%' : '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor:
                labela === 'RunHome' ? theme.colors.primary : 'transparent',
              borderRadius: labela === 'RunHome' ? 100 : 0,
              marginHorizontal: labela === 'RunHome' ? 20 : 0,
              marginVertical: labela === 'RunHome' ? 3 : 0,
            }}
          >
            <TouchableRipple
              rippleColor={theme.colors.secondaryContainer}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 80,
                borderRadius: 70,
                width: '100%',
              }}
              key={index}
              borderless
            >
              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <MaterialCommunityIcons
                  size={getIconSize(labela)}
                  name={getIcon(labela, isFocused)}
                  color={
                    labela === 'RunHome'
                      ? theme.colors.background
                      : !isFocused
                      ? theme.colors.outline
                      : theme.colors.primary
                  }
                  style={{
                    // borderWidth: labela === 'RunHome' ? 1 : 0,
                    // borderRadius: 100,
                    // padding: labela === 'RunHome' ? 9 : 0,
                    transform: [{ translateY: isFocused ? -5 : 0 }],
                  }}
                />
              </View>
            </TouchableRipple>
          </View>
        )
      })}
    </View>
  )
}

export default TabBar
