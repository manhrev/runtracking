import { StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Paragraph,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'
import { EventDetail } from '../../../../../lib/event/event_pb'
import { useAppTheme, AppTheme } from '../../../../../theme'
import { formatDateWithoutTime } from '../../../../../utils/helpers'

interface EvetItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  navigateFunc: () => void
  event: EventDetail.AsObject
  onSubmit: () => void
}

export default function EventItem({
  hideTopDivider,
  showBottomDivider,
  navigateFunc,
  event,
  onSubmit,
}: EvetItemProps) {
  const theme = useAppTheme()
  const {
    picture,
    description,
    id,
    isGlobal,
    name,
    numOfGroups,
    ownerGroupId,
    endAt,
    startAt,
  } = event
  return (
    <TouchableRipple onPress={() => navigateFunc()}>
      <>
        {!hideTopDivider && <Divider bold />}
        <View style={styles(theme).listItemContainer}>
          <Image
            style={styles(theme).eventImage}
            source={{
              uri: picture,
            }}
          />
          <View style={styles(theme).cardBottom}>
            <View style={styles(theme).eventInfo}>
              <Text
                variant="bodyMedium"
                style={{ fontWeight: 'bold', color: theme.colors.secondary }}
              >
                From: {startAt ? formatDateWithoutTime(startAt) : '?'} -{' '}
                {endAt ? formatDateWithoutTime(endAt) : '?'}
              </Text>
              <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>
                {name}
              </Text>
              <Text style={{ fontWeight: 'bold', color: theme.colors.primary }}>
                {numOfGroups} joined
              </Text>
            </View>
            <View style={styles(theme).eventAction}>
              <Button mode="contained">Join</Button>
            </View>
          </View>
        </View>
        {showBottomDivider && <Divider bold />}
      </>
    </TouchableRipple>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      marginVertical: 20,
      marginBottom: 10,
    },
    eventImage: {
      width: '100%',
      height: 160,
    },
    cardBottom: {
      paddingVertical: 10,
      flexDirection: 'row',
    },
    eventInfo: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    eventAction: {
      justifyContent: 'center',
    },
  })
