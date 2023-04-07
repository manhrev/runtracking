import { Dimensions, StyleSheet, View, Image } from 'react-native'
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Text,
  TouchableRipple,
} from 'react-native-paper'
import { ActivityType, ChallengeInfo } from '../../../../../lib/group/group_pb'
import { AppTheme, useAppTheme } from '../../../../../theme'
import { formatDateWithoutTime, toDate } from '../../../../../utils/helpers'
import * as Progress from 'react-native-progress'

interface GroupItemProps {
    hideTopDivider?: boolean
    showBottomDivider?: boolean
    challenge: ChallengeInfo.AsObject
    deleteListId: number[]
    addOrRemoveFromDeleteList: (id: number) => void
}

export default function GroupItem({
    hideTopDivider,
    showBottomDivider,
    challenge,
    deleteListId,
    addOrRemoveFromDeleteList,
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
                    challenge.picture == "" ?
                    require('../../../../../../assets/group-img.png') :
                    { uri: challenge.picture }
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
                    <Text variant="titleMedium" style={{ fontWeight: '700' }}>
                        {challenge.name}
                    </Text>
                    <Text variant="bodyMedium">
                        Start: {toDate(challenge.from?.seconds || 0, true)}   --&gt;   End:{' '}
                        {toDate(challenge.to?.seconds || 0, true)}
                    </Text>

                    <Text variant="bodyMedium" style={{ marginBottom: 3, fontWeight: "bold", color: theme.colors.tertiary }}>
                        Progress: {0} /{' '}
                        {challenge.challengerulesList[0]? challenge.challengerulesList[0].goal : 0}
                    </Text>

                    <Progress.Bar
                        progress={0}
                        width={windowWidth * 0.6}
                        color={theme.colors.primary}
                        borderColor="#e0e0e0"
                        unfilledColor="#e0e0e0"
                        borderRadius={5}
                        animated={true}
                    />
                </View>
            </View>
            <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flex: 1,
                }}
              >
                <IconButton
                  icon={
                    deleteListId.includes(challenge.id)
                      ? 'checkbox-marked'
                      : 'checkbox-blank-outline'
                  }
                  iconColor={
                    deleteListId.includes(challenge.id) ? '#e82525' : '#969696'
                  }
                  size={27}
                  onPress={() => addOrRemoveFromDeleteList(challenge.id)}
                />
            </View>
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