import { View } from 'react-native'
import { Divider, Text, TouchableRipple } from 'react-native-paper'
import { useAppTheme } from '../../../theme'

interface SettingItemProps {
  topDivider?: boolean
  editMode?: boolean
  left: string
  right?: string | JSX.Element // right is string or text input
  color?: string
  onPress: Function
  widthLimit?: boolean
}

export default function SettingItem(props: SettingItemProps) {
  const theme = useAppTheme()
  const { editMode, left, right, topDivider, color, onPress, widthLimit } =
    props

  return (
    <TouchableRipple
      onPress={() => onPress()}
      style={{ backgroundColor: theme.colors.surface }}
    >
      <>
        {topDivider && <Divider bold />}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            paddingHorizontal: 24,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: 'bold',
                color: color ? color : theme.colors.onBackground,
                width: widthLimit ? 90 : '100%',
              }}
            >
              {left}
            </Text>
          </View>
          {editMode ? (
            right
          ) : (
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text variant="titleMedium">{right}</Text>
            </View>
          )}
        </View>
        <Divider bold />
      </>
    </TouchableRipple>
  )
}
