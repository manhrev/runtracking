import { useState } from 'react'
import { View } from 'react-native'
import { IconButton, Menu, SegmentedButtons, Text } from 'react-native-paper'
import { ChallengeSortByStr } from '../../../../../constants/enumstr/group'
import { RuleStatus, ListChallengeRequest } from '../../../../../lib/group/group_pb'
import { useAppTheme } from '../../../../../theme'

interface FilterProps {
  asc: boolean
  switchAsc: Function
  setSortBy: Function
  sortBy: ListChallengeRequest.ChallengeSortBy
  setStatus: Function
  status: RuleStatus
}

export default function Filter({
  asc,
  switchAsc,
  setSortBy,
  sortBy,
  setStatus,
  status,
}: FilterProps) {
  const theme = useAppTheme()
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const beforeSetStatus = (status: string) => {
    // string to number
    setStatus(Number(status))
  }

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Text
            variant="bodyLarge"
            style={{
              fontWeight: 'bold',
              // textAlignVertical: 'center',
              color: theme.colors.secondary,
            }}
          >
            Sort by: {ChallengeSortByStr[sortBy]}
          </Text>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <IconButton
                icon="cog"
                iconColor={theme.colors.primary}
                size={18}
                onPress={openMenu}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                setSortBy(ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_START_TIME)
                closeMenu()
              }}
              title={'Start Time'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_END_TIME)
                closeMenu()
              }}
              title={'End Time'}
            />
            <Menu.Item
              onPress={() => {
                setSortBy(ListChallengeRequest.ChallengeSortBy.CHALLENGE_SORT_BY_NAME)
                closeMenu()
              }}
              title={'Name'}
            />
          </Menu>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            flex: 1,
          }}
        >
          <Text
            variant="bodyLarge"
            style={{
              fontWeight: 'bold',
              textAlignVertical: 'center',
              color: theme.colors.secondary,
            }}
          >
            Sort:
          </Text>
          {asc ? (
            <IconButton
              icon="arrow-up-bold"
              iconColor={theme.colors.primary}
              onPress={() => switchAsc(!asc)}
              size={22}
            />
          ) : (
            <IconButton
              icon="arrow-down-bold"
              iconColor={theme.colors.primary}
              onPress={() => switchAsc(!asc)}
              size={22}
            />
          )}
        </View>
      </View>

      <SegmentedButtons
        style={{
            alignSelf: 'center',
            marginBottom: 10,
        }}
        value={status.toString()}
        onValueChange={beforeSetStatus}
        density="medium"
        buttons={[
          {
            value: RuleStatus.RULE_STATUS_UNSPECIFIED.toString(),
            label: 'All',
          },
          {
            value: RuleStatus.RULE_STATUS_INPROGRESS.toString(),
            label: 'In Progress',
          },
          {
            value: RuleStatus.RULE_STATUS_COMING_SOON.toString(),
            label: 'Coming',
          },
          // {
          //   value: Member.Status.MEMBER_STATUS_REJECTED.toString(),
          //   label: 'Rejected',
          // },
          // {
          //   value: Member.Status.MEMBER_STATUS_BANNED.toString(),
          //   label: 'Banned',
          // }
        ]}
      />
    </>
  )
}
