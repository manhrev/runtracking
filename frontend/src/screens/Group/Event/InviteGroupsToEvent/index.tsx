import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import { Button, Chip, Divider, Searchbar, Text } from 'react-native-paper'
import {
  GroupInfo,
  GroupSortBy,
  ListGroupRequest,
} from '../../../../lib/group/group_pb'
import { RootBaseStackParamList } from '../../../../navigators/BaseStack'
import { selectUserSlice } from '../../../../redux/features/user/slice'
import { useAppSelector } from '../../../../redux/store'
import { useAppTheme } from '../../../../theme'
import { eventClient, groupClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'
import { baseStyles } from '../../../baseStyle'
import GroupItem from '../../YourGroups/comp/YourGroupItem'

export default function InviteGroupsToEvent({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'InviteGroupsToEvent'>) {
  const [groupList, setGroupList] = useState<GroupInfo.AsObject[]>([])
  const [searchByName, setSearchByName] = useState('')
  const theme = useAppTheme()
  const { userId } = useAppSelector(selectUserSlice)
  const [selectedGroup, setSelectedGroup] = useState<GroupInfo.AsObject[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    ;(async () => {
      const { error, response } = await groupClient.listGroup({
        ascending: false,
        filterBy: ListGroupRequest.FilterBy.FILTER_BY_UNSPECIFIED,
        limit: 40,
        groupIdsList: [],
        searchByName: searchByName,
        offset: 0,
        sortBy: GroupSortBy.GROUP_SORT_BY_NAME,
      })
      if (!error) setGroupList(response?.groupListList || [])
    })()
  }, [searchByName])

  const onChangeSearch = (query: string) => {
    setSearchQuery(query)
    if (query === '') setSearchByName(query)
  }
  const selectedNotContain = (groupid: number) => {
    return selectedGroup.findIndex((group) => group.id === groupid) === -1
  }

  const inviteGroups = async () => {
    const { error } = await eventClient.inviteGroupsToEvent({
      eventId: route.params.eventId,
      groupIdsList: selectedGroup.map((group) => group.id),
      ownerGroupId: route.params.ownerGroupId,
    })
    if (!error) {
      toast.success({ message: 'Invite groups successfully' })
      navigation.goBack()
    }
  }

  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Searchbar
            style={{ marginTop: 20, height: 45 }}
            placeholder="Search event name"
            onChangeText={onChangeSearch}
            value={searchQuery}
            onSubmitEditing={() => {
              setSearchByName(searchQuery)
            }}
          />

          {selectedGroup.length > 0 && (
            <>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                }}
              >
                {selectedGroup.map((group, idx) => (
                  <Chip
                    mode="outlined"
                    closeIcon="close"
                    style={{ margin: 2 }}
                    onClose={() => {
                      setSelectedGroup(
                        selectedGroup.filter((_, index) => index !== idx)
                      )
                    }}
                  >
                    {group.name}
                  </Chip>
                ))}
              </View>
              <Button
                mode="contained"
                onPress={inviteGroups}
                style={{ width: 200, alignSelf: 'center', marginBottom: 20 }}
              >
                Invite now!
              </Button>
            </>
          )}

          {selectedGroup.length > 0 && <Divider bold />}
          {groupList
            .filter((group) => {
              return selectedNotContain(group.id) && group.leaderId != userId
            })
            .map((group, idx) => (
              <GroupItem
                key={group.id}
                group={group}
                isLeader={false}
                navigateFunc={() => {
                  setSelectedGroup([...selectedGroup, group])
                }}
                hideTopDivider={idx === 0}
                showBottomDivider={idx !== groupList.length - 1}
              />
            ))}
          {groupList.length === 0 && <Text>No group found</Text>}
        </ScrollView>
      </View>
    </View>
  )
}
