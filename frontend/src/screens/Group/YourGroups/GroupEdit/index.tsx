import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet } from 'react-native'
import { Text, IconButton, Button, TextInput } from 'react-native-paper'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { baseStyles } from '../../../baseStyle'
import { useState } from 'react'
import { useAppDispatch } from '../../../../redux/store'
import { toast } from '../../../../utils/toast/toast'
import * as Clipboard from 'expo-clipboard';

import { UpdateGroupRequest, GroupInfo } from '../../../../lib/group/group_pb'

import {
  createGroupThunk, updateGroupThunk
} from '../../../../redux/features/groupList/thunk'
import { ScrollView } from 'react-native-gesture-handler'

export default function GroupEdit({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'GroupEdit'>) {
  const theme = useAppTheme()
  const dispatch = useAppDispatch()

  const [groupInfo, setGroupInfo] = useState<GroupInfo.AsObject>({
    id: route.params.groupInfo.id,
    name: route.params.groupInfo.name,
    description: route.params.groupInfo.description,
    backgroundPicture: route.params.groupInfo.backgroundPicture,
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

  const updateInfoGroup = async () => {
    const req: UpdateGroupRequest.AsObject = {
      groupinfo: {
        id: groupInfo.id,
        name: groupInfo.name,
        description: groupInfo.description,
        backgroundPicture: groupInfo.backgroundPicture,
      }
    }

    const { error } = await dispatch(updateGroupThunk(req)).unwrap()
    if (error) {
      toast.error({ message: 'An error occured, please try again!' })
      return
    }
    else {
      toast.success({ message: 'Group info updated!' })
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
            onPress={() => updateInfoGroup()}
            style={styles(theme).button}
          >
            Save
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
})


