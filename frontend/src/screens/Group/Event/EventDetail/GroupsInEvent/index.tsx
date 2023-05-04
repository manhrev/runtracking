import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RefreshControl, ScrollView, View } from 'react-native'
import { Text } from 'react-native-paper'
import { ConfirmDialog } from '../../../../../comp/ConfirmDialog'
import { useDialog } from '../../../../../hooks/useDialog'
import { RootGroupTopTabsParamList } from '../../../../../navigators/GroupTopTab'
import {
  isGroupInEventLoading,
  selectEventList,
} from '../../../../../redux/features/eventList/slice'
import { listGroupInEventThunk } from '../../../../../redux/features/eventList/thunks'
import { useAppDispatch, useAppSelector } from '../../../../../redux/store'
import { useAppTheme } from '../../../../../theme'
import { eventClient } from '../../../../../utils/grpc'
import { toast } from '../../../../../utils/toast/toast'
import { baseStyles } from '../../../../baseStyle'
import GroupItem from './comp/GroupListItem'

export default function GroupsInEvent({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupsInEvent'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const userState = useAppSelector((state) => state.user)
  const {
    handleToggleDialog,
    dataSelected: groupIdToAccept,
    open,
    toggleDialog,
  } = useDialog<number>()
  const { groupList } = useAppSelector(selectEventList)
  const groupListLoading = useAppSelector(isGroupInEventLoading)
  const noData = groupList.length === 0 && !groupListLoading

  const fetchListEventGroups = async () => {
    const { response } = await dispatch(
      listGroupInEventThunk({
        eventId: route.params.eventId,
        limit: 100,
        offset: 0,
      })
    ).unwrap()
  }

  const acceptRequestedGroup = async () => {
    const { error } = await eventClient.approveJoinEvent({
      eventId: route.params.eventId,
      groupId: groupIdToAccept || 0,
    })
    if (error) {
      return toast.error({
        message: 'An error ocurred, please try again later!',
      })
    }
    toast.success({ message: 'Group accepted!' })
    fetchListEventGroups()
    toggleDialog()
  }

  return (
    <>
      <ConfirmDialog
        toogleDialog={toggleDialog}
        visible={open}
        onSubmit={acceptRequestedGroup}
        message="Are you sure you want to accept this group?"
      />
      <View style={baseStyles(theme).container}>
        <View style={baseStyles(theme).innerWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={groupListLoading}
                onRefresh={fetchListEventGroups}
              />
            }
          >
            {noData && (
              <Text
                variant="bodyLarge"
                style={{ color: theme.colors.tertiary, textAlign: 'center' }}
              >
                No data
              </Text>
            )}
            {groupList.map((group, idx) => {
              return (
                <GroupItem
                  key={idx}
                  group={group}
                  showBottomDivider={idx === groupList.length - 1}
                  acceptCallback={() => {
                    handleToggleDialog(group.id)
                  }}
                  isAdmin={route.params.isAdmin}
                />
              )
            })}
          </ScrollView>
        </View>
      </View>
    </>
  )
}
