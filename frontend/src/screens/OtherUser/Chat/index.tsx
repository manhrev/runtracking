import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState , useCallback} from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { Button, Divider, Searchbar, Text } from 'react-native-paper'
import { useDialog } from '../../../hooks/useDialog'
import {
  GroupInfo,
  GroupSortBy,
  ListGroupRequest,
} from '../../../lib/group/group_pb'
import { RootGroupTopTabsParamList } from '../../../navigators/GroupTopTab'
import {
  isGroupListLoading,
  selectGroupList,
} from '../../../redux/features/groupList/slice'
import {
 getHistoryChatThunk,
 deleteConversationThunk, 
 sendMessageThunk
} from '../../../redux/features/messageList/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import { ConfirmDialog } from '../../../comp/ConfirmDialog'
import { groupClient } from '../../../utils/grpc'
import { toast } from '../../../utils/toast/toast'
import { GiftedChat } from 'react-native-gifted-chat'
import {
  getUserPublicInfoThunk,
} from '../../../redux/features/otherUser/thunks'
import {
  isOtherUserLoading,
  resetOtherUser,
  selectOtherUserSlice,
} from '../../../redux/features/otherUser/slice'
import { selectMessageList } from '../../../redux/features/messageList/slice'
import { isMemberListLoading } from '../../../redux/features/memberList/slice'
import { MessageInfo } from '../../../lib/chat/chat_pb'
import { UserInfo, UserPublicInfo } from '../../../lib/auth/auth_pb'
import { toDate } from '../../../utils/helpers'

const LIMIT = 10
export interface IMessage {
  _id: string | number
  text: string
  createdAt: Date | number
  user: User
  image?: string
  video?: string
  audio?: string
  system?: boolean
  sent?: boolean
  received?: boolean
  pending?: boolean
  quickReplies?: QuickReplies
}

interface User{
  _id: number
  name: string
  avatar: string 
}

interface Reply {
  title: string
  value: string
  messageId?: any
}

interface QuickReplies {
  type: 'radio' | 'checkbox'
  values: Reply[]
  keepIt?: boolean
}

function TransformerUserPublicInfoToUser(userPublicInfo: UserPublicInfo.AsObject) : User{
  return {
    _id: userPublicInfo.userId, 
    avatar: userPublicInfo.profilePicture, 
    name: userPublicInfo.displayName
  } as User
}

function TransformerMessageInfoListToMessageIList(messageInfoList: MessageInfo.AsObject[], userInfoMap: Map<number, UserPublicInfo.AsObject>) : IMessage[]{
  return messageInfoList.map(messageInfo => ({
    _id: messageInfo.id, 
    createdAt: new Date((messageInfo.time?.seconds || 0)*1000),
    text: messageInfo.message,
    user: TransformerUserPublicInfoToUser(userInfoMap.get(messageInfo.toUserId)|| new UserPublicInfo().toObject())
  } as IMessage))
}

export default function Chat({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'Chat'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const {
    handleToggleDialog,
    dataSelected: groupId,
    open,
    toggleDialog,
  } = useDialog<number>()
  const userIdParam = route.params.userId
  const toUserIdParam = route.params.toUserId
  const { user } = useAppSelector(selectOtherUserSlice)
  const userState = useAppSelector((state) => state.user)
  const { messageList } = useAppSelector(selectMessageList)
  const messageListLoading = useAppSelector(isMemberListLoading)
  // const noData = groupList.length === 0 && !groupListLoading
  const [canLoadmore, setCanLoadmore] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')

  const [asc, setAsc] = useState(false)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [searchByName, setSearchByName] = useState('')
  const [sortBy, setSortBy] = useState(GroupSortBy.GROUP_SORT_BY_CREATED_TIME)
  const filterBy = ListGroupRequest.FilterBy.FILTER_BY_IS_NOT_MEMBER

  useEffect(() => {
    getHistoryChat()
    fetchUserData()
  }, [dispatch, searchByName, sortBy, asc])


  const fetchUserData = async () => {
    dispatch(getUserPublicInfoThunk(userIdParam))
  }

  const getHistoryChat = async () => {
    const { response } = await dispatch(
      getHistoryChatThunk({
        toUserId: toUserIdParam, 
        limit: 20, 
        offset: 0
      })
    ).unwrap()

    // if (response) {
    //   setCurrentOffset(0)
    //   if (response.total > LIMIT) setCanLoadmore(true)
    //   else setCanLoadmore(false)
    // } else setCanLoadmore(false)
  }

  // const fetchMore = async () => {
  //   const { response } = await dispatch(
  //     listMoreGroupExploreThunk({
  //       ascending: asc,
  //       limit: LIMIT,
  //       filterBy: filterBy,
  //       offset: currentOffset + LIMIT,
  //       searchByName: searchByName,
  //       sortBy: sortBy,
  //     })
  //   ).unwrap()

  //   if (response) {
  //     if (currentOffset + 20 >= response.total) {
  //       setCanLoadmore(false)
  //     }
  //     setCurrentOffset(currentOffset + 10)
  //   }
  // }

  const [messages, setMessages] = useState<IMessage[]>([]);
  const userSender = new UserPublicInfo().
                  setUserId(userState.userId).
                  setDisplayName(userState.displayName).
                  setProfilePicture(userState.profiePicture).
                  toObject()

  useEffect(() => {
    const userInfoMap = new Map<number, UserPublicInfo.AsObject>([
      [userState.userId, userSender], 
      [toUserIdParam, user]
    ])

    console.log(TransformerMessageInfoListToMessageIList(messageList, userInfoMap))
    setMessages(TransformerMessageInfoListToMessageIList(messageList, userInfoMap))
  }, [])

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: userState.userId,
      }}
    />
  )
}
