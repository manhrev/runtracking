import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState , useCallback} from 'react'
import { ScrollView, View } from 'react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { useDialog } from '../../../hooks/useDialog'

import {
 getHistoryChatThunk,
 deleteConversationThunk, 
 sendMessageThunk, 
 getMoreHistoryChatThunk,
 getUpToDateHistoryChatThunk
} from '../../../redux/features/messageList/thunk'
import { useAppDispatch, useAppSelector } from '../../../redux/store'
import { useAppTheme } from '../../../theme'
import { baseStyles } from '../../baseStyle'
import { ConfirmDialog } from '../../../comp/ConfirmDialog'
import { authClient, groupClient } from '../../../utils/grpc'
import { toast } from '../../../utils/toast/toast'
import { GiftedChat, InputToolbar, Message , Send} from 'react-native-gifted-chat'
import {
  getUserPublicInfoThunk,
} from '../../../redux/features/otherUser/thunks'
import {
  isOtherUserLoading,
  resetOtherUser,
  selectOtherUserSlice,
} from '../../../redux/features/otherUser/slice'
import { selectMessageList, getOffset, isMessageListLoading } from '../../../redux/features/messageList/slice'
import { MessageInfo } from '../../../lib/chat/chat_pb'
import { UserInfo, UserPublicInfo } from '../../../lib/auth/auth_pb'
import { dateTimeToTimestamp, toDate } from '../../../utils/helpers'
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb'
import { useFocusEffect } from '@react-navigation/native';
import { RootBaseStackParamList } from '../../../navigators/BaseStack'
import Icon from 'react-native-paper/lib/typescript/components/Icon'
import { IconButton } from 'react-native-paper'
import { LoadingOverlay } from '../../../comp/LoadingOverlay'

const LIMIT = 15
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
    user: TransformerUserPublicInfoToUser(userInfoMap.get(messageInfo.fromUserId)|| new UserPublicInfo().toObject())
  } as IMessage))
}

export default function Chat({
  navigation,
  route,

}: NativeStackScreenProps<RootBaseStackParamList, 'Chat'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const userIdParam = route.params.userId
  const toUserIdParam = route.params.toUserId
  const { user } = useAppSelector(selectOtherUserSlice)
  const userState = useAppSelector((state) => state.user)
  const { messageList } = useAppSelector(selectMessageList)
  const messageListLoading = useAppSelector(isMessageListLoading)
  const [canLoadmore, setCanLoadmore] = useState(false)
  const [isInitializing, setInitializing] = useState(true)

  const currentOffset = useAppSelector(getOffset)

  useFocusEffect(
    useCallback(() => {
      fetchUserData()
      getHistoryChat()
    }, [])
 )

 useEffect(() => {
  const interval = setInterval(() => {
    getUpToDateHistoryChat()
  }, 20000);
  return () => clearInterval(interval);
 }, [])

 useEffect(() => {
  const userInfoMap = new Map<number, UserPublicInfo.AsObject>([
    [userState.userId, userSender], 
    [toUserIdParam, user]
  ])
    setMessages(TransformerMessageInfoListToMessageIList(messageList, userInfoMap))
 }, [dispatch, messageList])

  const fetchUserData = async () => {
    dispatch(getUserPublicInfoThunk(toUserIdParam))
  }

  const getHistoryChat = async () => {
    const { response } = await dispatch(
      getHistoryChatThunk({
        toUserId: toUserIdParam, 
        limit: LIMIT, 
        offset: 0
      })
    ).unwrap()
    
    setInitializing(false)
    if (response) {
      if (response.total > LIMIT) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const getUpToDateHistoryChat = async () => {
    await dispatch(
      getUpToDateHistoryChatThunk({
        toUserId: toUserIdParam, 
        limit: LIMIT, 
        offset: 0, 
        from: {
          seconds: Math.floor(
            (Date.now() - 25000)/1000
          ),
          nanos: 0
        }, 
        to: {
          seconds: Math.floor(
            Date.now()/1000
          ),
          nanos: 0
        }
      })
    ).unwrap()
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
      if (currentOffset + LIMIT * 2 >= response.total) {
        setCanLoadmore(false)
      }
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


  return (
    <>
    <LoadingOverlay  loading={messageListLoading && isInitializing}/>
    <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: userState.userId,
        }}
        infiniteScroll={true}
        isLoadingEarlier={messageListLoading}
        onLoadEarlier={() => fetchMore()}
        loadEarlier={canLoadmore}
        renderInputToolbar={(props) => (
          <InputToolbar {...props} />
        )}

        renderSend={(props) => (
          <Send {...props} >
              <View style={{justifyContent: 'center', height: '100%', marginRight: 10}}>
                <IconButton icon="send" size={30} centered></IconButton>
              </View>
            </Send>
      )}
        // renderMessage={(props) => (
        //   <Message {...props} containerStyle={{}}/>
        // )}
      />
    </>
  )
}
