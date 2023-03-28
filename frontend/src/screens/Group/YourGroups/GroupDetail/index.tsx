import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button, TextInput, Divider, List } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useAppDispatch, useAppSelector } from '../../../../redux/store'
import {
    selectYourGroupList,
} from '../../../../redux/features/yourGroupList/slice'

import {
    selectGroupList,
} from '../../../../redux/features/groupList/slice'

import { Member, GroupInfo } from '../../../../lib/group/group_pb'
import { useEffect, useState } from 'react'
import { FabGroup } from '../../../../comp/FabGroup'
import { groupClient } from '../../../../utils/grpc'
import { toast } from '../../../../utils/toast/toast'

import { useDialog } from '../../../../hooks/useDialog'
import { ConfirmDialog } from '../../../../comp/ConfirmDialog'

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

    const [selectedGroup, setSelectedGroup] = useState(({} as GroupInfo.AsObject))
    const yourGroups = useAppSelector(selectYourGroupList).yourGroupList.find(group => group.id === route.params.groupId)
    const exploreGroups = useAppSelector(selectGroupList).groupList.find(group => group.id === route.params.groupId)

    useEffect(() => {
        if(route.params.detailFrom == "YourGroups") {
            setSelectedGroup(yourGroups as GroupInfo.AsObject)
        }
        else if(route.params.detailFrom == "Explore") {
            setSelectedGroup(exploreGroups as GroupInfo.AsObject)
        }
    }, [yourGroups, exploreGroups])

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

        toggleDialog()
    }


  return (
    <View style={baseStyles(theme).container}>
      {selectedGroup != undefined && <ScrollView showsVerticalScrollIndicator={false} style={baseStyles(theme).innerWrapper}>
        <ConfirmDialog
          toogleDialog={toggleDialog}
          visible={open}
          onSubmit={currentAction == "leave" ? leaveGroup : joinGroup}
          message={currentAction == "leave" ? "Are you sure you want to leave this group?" : "Are you sure you want to join this group?"}
        />
        {selectedGroup.memberStatus == Member.Status.MEMBER_STATUS_ACTIVE && <FabGroup
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

        {selectedGroup.memberStatus == Member.Status.MEMBER_STATUS_UNSPECIFIED && <FabGroup
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
            {userState.userId == selectedGroup.leaderId && <IconButton
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                icon="pencil"
                size={30}
                onPress={() => navigation.navigate('GroupEdit', { groupInfo: selectedGroup })}
            />}
            <Image
                style={styles(theme).profilePicture}
                source={
                    selectedGroup.backgroundPicture == "" ?
                    require('../../../../../assets/group-img.png') :
                    { uri: selectedGroup.backgroundPicture }
                }
            />
        </View>

        <Text style={styles(theme).groupTitle}>{selectedGroup.name}</Text>

        {selectedGroup.memberStatus === Member.Status.MEMBER_STATUS_ACTIVE && (
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
        {selectedGroup.memberStatus === Member.Status.MEMBER_STATUS_WAITING && (
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
        {selectedGroup.memberStatus === (Member.Status.MEMBER_STATUS_BANNED || Member.Status.MEMBER_STATUS_REJECTED) && (
            <Button
                style={styles(theme).joinButton}
                buttonColor="#e82525"
                mode="contained"
                onPress={() => {}}
                labelStyle={{
                    fontSize: 15
                }}
            >
                {selectedGroup.memberStatus === Member.Status.MEMBER_STATUS_BANNED ? 'Banned' : 'Rejected'}
            </Button>
        )}

        <Text style={styles(theme).desTitle}>{selectedGroup.description}</Text>

        <Divider bold style={{ width: '100%', marginTop: 20 }} />
        <Button
            style={{
                width: '80%',
                alignSelf: 'center',
            }}
            mode="text"
            onPress={() => navigation.navigate('GroupMembers', { 
                groupId: selectedGroup.id || 0,
                isLeader: userState.userId == selectedGroup.leaderId,
            })}
            labelStyle={{
                fontSize: 15
            }}
        >
            Members of group ({selectedGroup.numOfMembers})
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


