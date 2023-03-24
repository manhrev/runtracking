import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet, ScrollView } from 'react-native'
import { Text, IconButton, Button, TextInput } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useState } from 'react'
import { useAppDispatch } from '../../../../redux/store'
import { toast } from '../../../../utils/toast/toast'
import * as Clipboard from 'expo-clipboard';

import { CreateGroupRequest, GroupInfo } from '../../../../lib/group/group_pb'

import {
  createGroupThunk
} from '../../../../redux/features/groupList/thunk'

export default function GroupAdd({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupAdd'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()
  const [groupInfo, setGroupInfo] = useState<GroupInfo.AsObject>({
    id: 0,
    name: 'Example Group',
    description: 'Example Description',
    backgroundPicture: 'https://cdn.dribbble.com/users/2984251/screenshots/15487625/media/1501cb8cd7dbdb88127b7402c2692acd.png?compress=1&resize=1000x750&vertical=top',
    leaderId: 0,
    memberStatus: 0,
    numOfMembers: 0,
    numOfChallenge: 0,
    numOfEventParticipated: 0,
  })

  const copiedTextToImageLink = async () => {
    const text: any = await Clipboard.getStringAsync();
    if(text == null || text == "")
    {
      toast.error({ message: 'Clipboard is empty!' })
      return
    }
    setGroupInfo({...groupInfo, backgroundPicture: text})
  }

  const createNewGroup = async () => {
    if(groupInfo.name == "" || groupInfo.backgroundPicture == "")
    {
      toast.error({ message: 'Group name or image link cannot be empty!' })
      return
    }

    const req: CreateGroupRequest.AsObject = {
      groupInfo: {
        id: groupInfo.id,
        name: groupInfo.name,
        description: groupInfo.description,
        backgroundPicture: groupInfo.backgroundPicture,
        leaderId: groupInfo.leaderId,
        memberStatus: groupInfo.memberStatus,
        numOfMembers: groupInfo.numOfMembers,
        numOfChallenge: groupInfo.numOfChallenge,
        numOfEventParticipated: groupInfo.numOfEventParticipated,
      }
    }

    const { error } = await dispatch(createGroupThunk(req)).unwrap()
    if (error) {
      toast.error({ message: 'An error occured, please try again!' })
      return
    }
    else {
      toast.success({ message: 'Group created!' })
      navigation.goBack()
    }
  }

  return (
    <View style={baseStyles(theme).container}>
      <ScrollView showsVerticalScrollIndicator={false} style={baseStyles(theme).innerWrapper}>
        <View style={styles(theme).imgContainer}>
          <Image
            style={styles(theme).profilePicture}
            source={
              groupInfo.backgroundPicture == "" ?
              require('../../../../../assets/group-img.png') :
              { uri: groupInfo.backgroundPicture }
            }
          />
        </View>

        {groupInfo.name && <Text style={styles(theme).groupTitle}>{groupInfo.name}</Text>}

        <Text style={styles(theme).title}>Group name </Text>
        <TextInput
            mode="outlined"
            value={groupInfo.name}
            onChangeText={text => setGroupInfo({...groupInfo, name: text})}
        />

        <Text style={styles(theme).title}>Image link </Text>
        <TextInput
            mode="outlined"
            value={groupInfo.backgroundPicture}
            onChangeText={text => setGroupInfo({...groupInfo, backgroundPicture: text})}
            right={groupInfo.backgroundPicture == "" ?
                <TextInput.Icon
                  icon="clipboard-arrow-down-outline"
                  onPress={() => copiedTextToImageLink()}
                /> :
                <TextInput.Icon
                  icon="window-close"
                  onPress={() => setGroupInfo({...groupInfo, backgroundPicture: ""})}
                />
            }
        />

        <Text style={styles(theme).title}>Group description </Text>
        <TextInput
          style={styles(theme).noteInput}
          multiline={true}
          numberOfLines={6}
          mode="outlined"
          value={groupInfo.description}
          onChangeText={(text) => setGroupInfo({...groupInfo, description: text})}
        />

        
        
        <View style={styles(theme).btnContainer}>
          <Button
            mode="contained"
            buttonColor="#e82525"
            onPress={() => navigation.goBack()}
            style={styles(theme).button}
          >
            Cancel
          </Button>

          <Button
            mode="contained"
            onPress={() => createNewGroup()}
            style={styles(theme).button}
          >
            Create
          </Button>
        </View>
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
    noteInput: {
      width: '100%',
      maxHeight: 150,
    },
    button: {
      flex: 1,
      marginTop: 30,
      marginRight: 12,
      marginLeft: 12,
    },
    btnContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    groupTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
})


