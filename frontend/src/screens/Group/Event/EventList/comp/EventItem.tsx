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
import { GroupStatusInEventButtonStr } from '../../../../../constants/enumstr/event'
import { EventDetail, GroupStatus } from '../../../../../lib/event/event_pb'
import { useAppTheme, AppTheme } from '../../../../../theme'
import { formatDateWithoutTime } from '../../../../../utils/helpers'

interface EvetItemProps {
  hideTopDivider?: boolean
  showBottomDivider?: boolean
  navigateFunc: () => void
  event: EventDetail.AsObject
  onSubmit: () => void
  isAdmin: boolean
  yourGroup: number
}

export default function EventItem({
  hideTopDivider,
  showBottomDivider,
  navigateFunc,
  event,
  onSubmit,
  yourGroup,
  isAdmin,
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
    yourGroupStatus,
  } = event
  const adminOfEvent = isAdmin && ownerGroupId === yourGroup

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
              <EventButton
                adminOfEvent={adminOfEvent}
                isAdmin={isAdmin}
                yourGroupStatus={yourGroupStatus}
                joinCallBack={onSubmit}
              />
            </View>
          </View>
        </View>
        {showBottomDivider && <Divider bold />}
      </>
    </TouchableRipple>
  )
}

interface EventButtonProps {
  yourGroupStatus: GroupStatus
  isAdmin: boolean
  adminOfEvent: boolean
  joinCallBack: () => void
}
const EventButton = ({
  adminOfEvent,
  isAdmin,
  yourGroupStatus,
  joinCallBack,
}: EventButtonProps) => {
  if (!isAdmin) {
    if (yourGroupStatus === GroupStatus.GROUP_STATUS_ACTIVE) {
      return (
        <Button mode="text">
          {GroupStatusInEventButtonStr[yourGroupStatus]}
        </Button>
      )
    }
    return <></>
  } else if (!adminOfEvent) {
    if (yourGroupStatus === GroupStatus.GROUP_STATUS_UNSPECIFIED) {
      return (
        <Button mode="contained" onPress={joinCallBack}>
          {GroupStatusInEventButtonStr[yourGroupStatus]}
        </Button>
      )
    }
    return (
      <Button mode="contained" disabled>
        {GroupStatusInEventButtonStr[yourGroupStatus]}
      </Button>
    )
  } else {
    return <Button mode="text">You are admin</Button>
  }
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
