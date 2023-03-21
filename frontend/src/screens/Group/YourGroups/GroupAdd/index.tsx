import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Image, StyleSheet } from 'react-native'
import { Text, IconButton, Button, TextInput } from 'react-native-paper'
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
    backgroundPicture: '',
  })

  const createNewGroup = async () => {
    const req: CreateGroupRequest.AsObject = {
      groupInfo: {
        id: groupInfo.id,
        name: groupInfo.name,
        description: groupInfo.description,
        backgroundPicture: groupInfo.backgroundPicture,
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
      <View style={baseStyles(theme).innerWrapper}>
        <View style={styles(theme).imgContainer}>
          <Image
            style={styles(theme).profilePicture}
            source={require('../../../../../assets/group-img.png')}
          />
        </View>

        <Text style={styles(theme).title}>Group name </Text>
        <TextInput
            mode="outlined"
            value={groupInfo.name}
            onChangeText={text => setGroupInfo({...groupInfo, name: text})}
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
      </View>
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
    },
})


