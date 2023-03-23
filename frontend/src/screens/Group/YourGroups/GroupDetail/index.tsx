import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Text, IconButton, Button, TextInput, Divider, List } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useState } from 'react'
import { useAppDispatch } from '../../../../redux/store'
import { toast } from '../../../../utils/toast/toast'

import { CreateGroupRequest, GroupInfo } from '../../../../lib/group/group_pb'

import {
  createGroupThunk
} from '../../../../redux/features/groupList/thunk'

export default function GroupDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupDetail'>) {
    const theme = useAppTheme()
    const dispatch = useAppDispatch()

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

  return (
    <View style={baseStyles(theme).container}>
      <ScrollView showsVerticalScrollIndicator={false} style={baseStyles(theme).innerWrapper}>
        <View style={styles(theme).imgContainer}>
            <IconButton
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                icon="pencil"
                size={30}
                onPress={() => navigation.navigate('GroupEdit', { groupInfo: route.params.groupInfo })}
            />
            <Image
                style={styles(theme).profilePicture}
                source={
                    route.params.groupInfo.backgroundPicture == "" ?
                    require('../../../../../assets/group-img.png') :
                    { uri: route.params.groupInfo.backgroundPicture }
                  }
            />
        </View>

        <Text style={styles(theme).groupTitle}>{route.params.groupInfo.name}</Text>
        
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
        <Text style={styles(theme).athTitle}>3,000 ATH</Text>

        <Divider bold style={{ width: '100%', marginTop: 20 }} />
        <Button
            style={{
                width: '60%',
                alignSelf: 'center',
            }}
            mode="text"
            onPress={() => {}}
            labelStyle={{
                fontSize: 15
            }}
        >
            Members of group
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
                        backgroundColor: theme.colors.primary,
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
                        backgroundColor: theme.colors.primary,
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
    

        {/* <Text>Group ID: {route.params.groupId}</Text> */}
      </ScrollView>
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
    athTitle: {
        marginTop: 5,
        alignSelf: 'center',
    },
    joinButton: {
        marginTop: 10,
        width: '40%',
        alignSelf: 'center',
    }
})


