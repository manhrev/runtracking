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
 sendMessageThunk, 
 getMoreHistoryChatThunk
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
import { dateTimeToTimestamp, toDate } from '../../../utils/helpers'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { useFocusEffect } from '@react-navigation/native';
import { NativeSyntheticEvent } from 'react-native'
import { NativeScrollEvent } from 'react-native'

const LIMIT = 1
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

type OnScrollEventHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

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
    user: TransformerUserPublicInfoToUser(userInfoMap.get(messageInfo.fromUserId)|| new UserPublicInfo().toObject())
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


  const [currentOffset, setCurrentOffset] = useState(0)

  useFocusEffect(
    useCallback(() => {
       const userInfoMap = new Map<number, UserPublicInfo.AsObject>([
    [userState.userId, userSender], 
    [toUserIdParam, user]
  ])
      getHistoryChat(LIMIT)
      fetchUserData()
      
      setMessages(TransformerMessageInfoListToMessageIList(messageList, userInfoMap))

      


    }, [dispatch])
 )

 useEffect(() => {
  const userInfoMap = new Map<number, UserPublicInfo.AsObject>([
    [userState.userId, userSender], 
    [toUserIdParam, user]
  ])

  const interval = setInterval(() => {
    console.log(LIMIT + currentOffset)
    getHistoryChat(LIMIT + currentOffset)
    console.log(messageList)
    setMessages(TransformerMessageInfoListToMessageIList(messageList, userInfoMap))
  }, 5000);
  return () => clearInterval(interval);
 }, [])

  const fetchUserData = async () => {
    dispatch(getUserPublicInfoThunk(userIdParam))
  }

  const getHistoryChat = async (limit : number) => {
    const { response } = await dispatch(
      getHistoryChatThunk({
        toUserId: toUserIdParam, 
        limit: limit, 
        offset: 0
      })
    ).unwrap()

    if (response) {
      setCurrentOffset(0)
      if (response.total > LIMIT) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const fetchMore = async () => {
    const { response } = await dispatch(
      getMoreHistoryChatThunk({
        toUserId: toUserIdParam, 
        limit: LIMIT,
        offset: currentOffset + LIMIT,
      })
    ).unwrap()

    if (response) {
      if (currentOffset + LIMIT*2 >= response.total) {
        setCanLoadmore(false)
      }
      setCurrentOffset(currentOffset + LIMIT)
    }
  }

  const [messages, setMessages] = useState<IMessage[]>([]);
  const userSender = new UserPublicInfo().
                  setUserId(userState.userId).
                  setDisplayName(userState.displayName).
                  setProfilePicture(userState.profiePicture).
                  toObject()

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const iMessage = messages.at(0)
    const timestampNow = new Timestamp()
    timestampNow.fromDate(new Date())
    dispatch(sendMessageThunk({
      message: iMessage?.text || "",
      toUserId: toUserIdParam,
      time: timestampNow.toObject(),
    }))
  }, [])

  const isCloseToTop = (event : NativeScrollEvent)  => {
    const paddingToTop = 80;
    return event.contentSize.height - event.layoutMeasurement.height - paddingToTop <= event.contentOffset.y;
  }

  const onScroll: OnScrollEventHandler = (event) => {
    console.log(canLoadmore)
    if (isCloseToTop(event.nativeEvent) && canLoadmore) { 
        fetchMore()
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: userState.userId,
      }}
      listViewProps={{
        scrollEventThrottle: 400,
        onScroll: onScroll
      }}
      infiniteScroll={true}
    />
  )
}
