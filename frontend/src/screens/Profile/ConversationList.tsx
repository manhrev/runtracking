import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useEffect, useState , useCallback} from 'react'
import { Alert, NativeScrollEvent, ScrollView, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'
import { RootBaseStackParamList } from '../../navigators/BaseStack'
import {
  listMoreConversationThunk,
  listConversationThunk,
} from '../../redux/features/conversationList/thunk'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { AppTheme, useAppTheme } from '../../theme'
import ConversationListItem from './comp/ConversationListItem'
import { useFocusEffect } from '@react-navigation/native'
import { baseStyles } from '../baseStyle'
import { RefreshControl } from 'react-native-gesture-handler'
import { isConversationListLoading, selectConversationList } from '../../redux/features/conversationList/slice'
import { LoadingOverlay } from '../../comp/LoadingOverlay'
import { isMessageListLoading } from '../../redux/features/messageList/slice'

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize} : NativeScrollEvent) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default function ConversationList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, 'ConversationList'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const { conversationList, status, total } = useAppSelector(selectConversationList)
  const isLoading = useAppSelector(isConversationListLoading)
  const loading = useAppSelector(isMessageListLoading)
  const [canLoadmore, setCanLoadmore] = useState(true)
  const [offset, setOffset] = useState(0)

  const fetchConversationList = async () => {
    const { response } = await dispatch(
      listConversationThunk({
        limit: 10,
        offset: 0,
      })
    ).unwrap()

    if (response) {
      if (response.conversationsList.length >= 10) setCanLoadmore(true)
      else setCanLoadmore(false)
    } else setCanLoadmore(false)
  }

  const fetchMore = async () => {
    const { response } = await dispatch(
      listMoreConversationThunk({
        limit: 10,
        offset: offset + 10,
      })
    ).unwrap()

    if (response) {
      if (offset + 20 > conversationList.length) {
        setCanLoadmore(false)
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
       fetchConversationList()
    }, [dispatch, navigation])
  );

  return (
    <>
    <LoadingOverlay loading={isLoading} />
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={fetchConversationList}
            />
          }
          onScroll={({nativeEvent}) => {
              if (canLoadmore && !isLoading && isCloseToBottom(nativeEvent)) {
                fetchMore()
              }
          } }
          scrollEventThrottle={400}
        >
          {conversationList.map((conversation) => {
            return (
              <ConversationListItem
                key={conversation.partner?.userId}
                conversationInfo={conversation}
                navigation={navigation}
              />
            )
          })}

        </ScrollView>
      </View>
    </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surfaceVariant,
    },
    itemTitle: {},
  })
