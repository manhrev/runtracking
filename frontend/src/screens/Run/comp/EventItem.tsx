import { Dimensions, StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { ActivityType, Rule } from '../../../lib/group/group_pb'
import { EventDetail } from '../../../lib/event/event_pb'
import { AppTheme, useAppTheme } from '../../../theme'
import { formatDateWithoutTime, toDate } from '../../../utils/helpers'
import { ChallengeRuleStrShorted } from '../../../constants/enumstr/group'

interface GroupItemProps {
    hideTopDivider?: boolean
    showBottomDivider?: boolean
    event: EventDetail.AsObject
    selectedEvent: EventDetail.AsObject
    setSelectedEvent: (challenge: EventDetail.AsObject) => void
}

export default function GroupItem({
    hideTopDivider,
    showBottomDivider,
    event,
    selectedEvent,
    setSelectedEvent,
}: GroupItemProps) {
  const theme = useAppTheme()
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableRipple onPress={() => {}}>
      <>
        {!hideTopDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
        <View style={styles(theme).listItemContainer}>
          <View style={styles(theme).listItemTilte}>
            <Image
                style={{
                    width: 55,
                    height: 55,
                    borderRadius: 5,
                }}
                source={
                    event.picture == "" ?
                    require('../../../../assets/group-img.png') :
                    { uri: event.picture }
                }
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
              }}
            >
                <View style={{ marginLeft: 12 }}>
                    <Text variant="titleMedium" style={{ fontWeight: '700', width: windowWidth * 0.6 }}>
                        {event.name}
                    </Text>
                    <Text variant="bodyMedium">
                        Start: {toDate(event.startAt?.seconds || 0, true)}   --&gt;   End:{' '}
                        {toDate(event.endAt?.seconds || 0, true)}
                    </Text>
                </View>
            </View>
            {<View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <IconButton
                  icon={
                    selectedEvent.id === event.id
                      ? 'checkbox-marked'
                      : 'checkbox-blank-outline'
                  }
                  iconColor={
                    selectedEvent.id === event.id ? theme.colors.primary : '#969696'
                  }
                  size={27}
                  onPress={() => setSelectedEvent(event)}
                />
            </View>}
          </View>
        </View>
        {showBottomDivider && (
          <Divider bold style={{ width: '80%', alignSelf: 'flex-end' }} />
        )}
      </>
    </TouchableRipple>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 20,
      paddingHorizontal: 8,
    },
    listItemTilte: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
  })
