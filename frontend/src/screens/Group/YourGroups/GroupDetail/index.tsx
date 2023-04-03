import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button, TextInput, Divider, List, ActivityIndicator } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'

import {
    selectGroupDetail,
    isGroupDetailLoading,
} from '../../../../redux/features/groupDetail/slice'

import { Member, GetGroupReply } from '../../../../lib/group/group_pb'
import { useEffect, useState } from 'react'
import { FabGroup } from '../../../../comp/FabGroup'
import { groupClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

import { useDialog } from '../../../../hooks/useDialog'
import { ConfirmDialog } from '../../../../comp/ConfirmDialog'
import { getGroupThunk } from '../../../../redux/features/groupDetail/thunk'
import { RefreshControl } from 'react-native-gesture-handler'

export default function GroupDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupDetail'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

    const userState  = useAppSelector((state) => state.user);

    const [currentAction, setCurrentAction] = useState("")
    const {
        handleToggleDialog,
        dataSelected: groupId,
        open,
        toggleDialog,
    } = useDialog<number>()

    const testData = [
        {
            id: 1,
            title: 'Example 1',
        },
        {
            id: 2,
            title: 'Example 2',
        },
        {
            id: 3,
            title: 'Example 3',
        },
        {
            id: 4,
            title: 'Example 4',
        },
    ]

    const { groupDetail } = useAppSelector(selectGroupDetail)
    const groupDetailLoading = useAppSelector(isGroupDetailLoading)
    // const noData = groupDetail.length === 0 && !groupDetailLoading

    const handleAction = (action: string) => {
        setCurrentAction(action)
        handleToggleDialog()
    }

    const leaveGroup = async () => {
        const { error } = await groupClient.leaveGroup({
            groupId: route.params.groupId,
        })
        if (error) {
            toast.error({ message: 'Something went wrong, please try again later!' })
        }
        else
        {
            toast.success({ message: 'You have left the group!' })
            route.params.reloadListFunc()
            navigation.goBack()
        }

        toggleDialog()
    }

    const joinGroup = async () => {
        const { error } = await groupClient.joinGroup({
            groupId: route.params.groupId,
        })
        if (error) {
            toast.error({ message: 'Something went wrong, please try again later!' })
        }
        else
        {
            toast.success({ message: 'Join group request sent, waiting for accept!' })
            route.params.reloadListFunc()
        }

        toggleDialog() // close dialog
        fetchGroupDetail() // reload group detail
    }

    const fetchGroupDetail = async () => {
        await dispatch(getGroupThunk({ groupId: route.params.groupId })).unwrap()
        console.log(groupDetail)
    }

    useEffect(() => {
        fetchGroupDetail()
    }, [])

  return (
    <View style={baseStyles(theme).container}>
      {!groupDetailLoading && <ScrollView
            showsVerticalScrollIndicator={false}
            style={baseStyles(theme).innerWrapper}
            refreshControl={
                <RefreshControl
                    refreshing={groupDetailLoading}
                    onRefresh={fetchGroupDetail}
                />
            }
        >
        
        <ConfirmDialog
          toogleDialog={toggleDialog}
          visible={open}
          onSubmit={currentAction == "leave" ? leaveGroup : joinGroup}
          message={currentAction == "leave" ? "Are you sure you want to leave this group?" : "Are you sure you want to join this group?"}
        />
        {groupDetail.groupinfo?.memberStatus == Member.Status.MEMBER_STATUS_ACTIVE && <FabGroup
            actions={
                [{
                    icon: 'exit-to-app',
                    label: 'Leave group',
                    onPress: () => handleAction('leave'),
                    labelTextColor: theme.colors.onError,
                    color: theme.colors.onError,
                    style: { backgroundColor: theme.colors.error },
                }]
            }
            type="primary"
            bottom={1}
            icon="cog"
        />}

        {groupDetail.groupinfo?.memberStatus == Member.Status.MEMBER_STATUS_UNSPECIFIED && <FabGroup
            actions={
                [{
                    icon: 'plus',
                    label: 'Join group',
                    onPress: () => handleAction("join"),
                    labelTextColor: theme.colors.onPrimary,
                    color: theme.colors.onPrimary,
                    style: { backgroundColor: theme.colors.primary },
                }]
            }
            type="primary"
            bottom={1}
            icon="cog"
        />}

        <View style={styles(theme).imgContainer}>
            {userState.userId == groupDetail.groupinfo?.leaderId && <IconButton
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                icon="pencil"
                size={30}
                onPress={() => navigation.navigate('GroupEdit', {
                    groupInfo: groupDetail.groupinfo? groupDetail.groupinfo : undefined,
                    reloadDetailFunc: fetchGroupDetail,
                })}
            />}
            <Image
                style={styles(theme).profilePicture}
                source={
                    groupDetail.groupinfo?.backgroundPicture == "" ?
                    require('../../../../../assets/group-img.png') :
                    { uri: groupDetail.groupinfo?.backgroundPicture }
                }
            />
        </View>

        <Text style={styles(theme).groupTitle}>{groupDetail.groupinfo?.name}</Text>

        {groupDetail.groupinfo?.memberStatus === Member.Status.MEMBER_STATUS_ACTIVE && (
            <Button
                style={styles(theme).joinButton}
                mode="contained"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                Joined &#10003;
            </Button>
        )}
        {groupDetail.groupinfo?.memberStatus === Member.Status.MEMBER_STATUS_WAITING && (
            <Button
                style={styles(theme).joinButton}
                buttonColor="#e68a00"
                mode="contained"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                Requested
            </Button>
        )}
        {groupDetail.groupinfo?.memberStatus === (Member.Status.MEMBER_STATUS_BANNED || Member.Status.MEMBER_STATUS_REJECTED) && (
            <Button
                style={styles(theme).joinButton}
                buttonColor="#e82525"
                mode="contained"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                {groupDetail.groupinfo?.memberStatus === Member.Status.MEMBER_STATUS_BANNED ? 'Banned' : 'Rejected'}
            </Button>
        )}

        <Text style={styles(theme).desTitle}>{groupDetail.groupinfo?.description}</Text>

        <Divider bold style={{ width: '100%', marginTop: 20 }} />
        <Button
            style={{
                width: '80%',
                alignSelf: 'center',
            }}
            mode="text"
            onPress={() => navigation.navigate('GroupMembers', { 
                groupId: groupDetail.groupinfo?.id || 0,
                isLeader: userState.userId == groupDetail.groupinfo?.leaderId,
            })}
            labelStyle={{
                fontSize: 15
            }}
        >
            Members of group ({groupDetail.groupinfo?.numOfMembers})
        </Button>
        
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={styles(theme).title}>User Ranking</Text>
            <Button
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                }}
                mode="text"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                View all &gt;
            </Button>
        </View>
        
        <List.Item
            title="Username"
            description=""
            left={props =>
                <>
                    <List.Icon {...props} icon="medal" />
                    <List.Icon {...props} icon="numeric-1-circle" />
                </>
            }
            right={props => <Text>30 km</Text>}
        />
        <List.Item
            title="Username"
            description=""
            left={props =>
                <>
                    <List.Icon {...props} icon="medal" />
                    <List.Icon {...props} icon="numeric-2-circle" />
                </>
            }
            right={props => <Text>30 km</Text>}
        />
        <List.Item
            title="Username"
            description=""
            left={props =>
                <>
                    <List.Icon {...props} icon="medal" />
                    <List.Icon {...props} icon="numeric-3-circle" />
                </>
            }
            right={props => <Text>30 km</Text>}
        />

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={styles(theme).title}>Challenges</Text>
            <Button
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                }}
                mode="text"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                View all &gt;
            </Button>
        </View>

        {/* // Horizontal FlatList of challenges */}
        <FlatList
            horizontal
            data={testData}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={{
                    flexDirection: 'column',
                    marginBottom: 10,
                }}
                onPress={() => console.log("Challenge pressed")}
                >
                    <View style={{
                        width: 150,
                        height: 130,
                        backgroundColor: theme.colors.tertiary,
                        borderRadius: 5,
                        margin: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{color: "white"}}>Image</Text>
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontWeight: 'bold',
                        fontSize: 15,
                    }}>{item.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
        />

        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text style={styles(theme).title}>Events</Text>
            <Button
                style={{
                    alignSelf: 'flex-end',
                    marginRight: 10,
                }}
                mode="text"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                View all &gt;
            </Button>
        </View>

        <FlatList
            horizontal
            data={testData}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={{
                    flexDirection: 'column',
                    marginBottom: 10,
                }}
                onPress={() => console.log("Event pressed")}
                >
                    <View style={{
                        width: 150,
                        height: 130,
                        backgroundColor: theme.colors.tertiary,
                        borderRadius: 5,
                        margin: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{color: "white"}}>Image</Text>
                    </View>
                    <Text style={{
                        marginLeft: 10,
                        fontWeight: 'bold',
                        fontSize: 15,
                    }}>{item.title}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
        />
      </ScrollView>}
      {groupDetailLoading &&
        <ActivityIndicator
            animating={true}
            size='large'
            style={{
                paddingVertical: 120,
            }}
        />
      }
    </View>
  )
}


const styles = (theme: AppTheme) =>
  StyleSheet.create({
    imgContainer: {
      backgroundColor: theme.colors.tertiaryContainer,
      height: 140,
      justifyContent: 'flex-end',
      zIndex: 1,
      marginBottom: 40,
    },
    profilePicture: {
      top: 30,
      alignSelf: 'center',
      zIndex: 2,
      height: 100,
      width: 100,
      borderRadius: 5,
    },
    title: {
      marginTop: 10,
      marginBottom: 5,
      fontWeight: 'bold',
      fontSize: 16,
    },
    groupTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    desTitle: {
        marginTop: 5,
        alignSelf: 'center',
    },
    joinButton: {
        marginTop: 10,
        width: '40%',
        alignSelf: 'center',
    }
})


