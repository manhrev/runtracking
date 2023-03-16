import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import { selectUserSlice } from "../../redux/features/user/slice";
import { useAppSelector } from "../../redux/store";
import { AppTheme, useAppTheme } from "../../theme";
import SettingItem from "./comp/SettingItem";
import { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useAppDispatch } from "../../redux/store";

import {
  UserInfo,
  UpdateUserInfoRequest,
} from "../../lib/auth/auth_pb";

import {
  updateUserInfoThunk
} from "../../redux/features/user/thunk";

export default function ProfileSetting({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "ProfileSetting">) {
  const theme = useAppTheme();
  const { displayName, email, height, phoneNumber, username, weight, age, userId } =
    useAppSelector(selectUserSlice);

  const dispatch = useAppDispatch();

  const [editMode, setEditMode] = useState(false);

  const [userInfo, setUserInfo] = useState<UserInfo.AsObject>({
    userId: userId,
    displayName: displayName,
    username: username,
    email: email,
    phoneNumber: phoneNumber,
    height: height,
    weight: weight,
    age: age,
  });

  const updateUserInfo = () => {
    if(userInfo.userId) {
      // check if empty input
      if(!userInfo.displayName || !userInfo.phoneNumber || !userInfo.email) {
        alert("Please fill all the fields!");
        return;
      }
      // mail regex
      if(!userInfo.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        alert("Invalid email!");
        return;
      }
      // check if height and weight are valid
      if(userInfo.height <= 0 || userInfo.weight <= 0) {
        alert("Height and weight must be greater than 0!");
        return;
      }

      const info = new UserInfo();
      info.setUserId(userInfo.userId);
      info.setDisplayName(userInfo.displayName);
      info.setUsername(userInfo.username);
      info.setEmail(userInfo.email);
      info.setPhoneNumber(userInfo.phoneNumber);
      info.setHeight(userInfo.height);
      info.setWeight(userInfo.weight);
      info.setAge(userInfo.age);

      const req = new UpdateUserInfoRequest();
      req.setUserInfo(info);
      dispatch(updateUserInfoThunk(req)).unwrap();
      alert("Update successfully!");
      setEditMode(false);
    }
    else alert("Invalid user id!");
  };

  const onChangeNumberInput = (text: string, key: string) => {
    if(text === "") {
      setUserInfo({ ...userInfo, [key]: 0 });
      return;
    }

    if(!isNaN(Number(text))) {
      setUserInfo({ ...userInfo, [key]: Number(text) });
    }
  }

  useEffect(() => {
    setUserInfo({
      userId: userId,
      displayName: displayName,
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      height: height,
      weight: weight,
      age: age,
    });
  }, [editMode]);

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Fullname"
          right={editMode ?
            <TextInput
              style={styles(theme).inputStyle}
              value={userInfo.displayName}
              onChangeText={(text) => setUserInfo({ ...userInfo, displayName: text })}
            />
            : displayName
          }
          editMode={editMode}
          topDivider
          onPress={() => {}}
        />
        <SettingItem
          left="Username"
          right={editMode ?
            <TextInput
              style={styles(theme).inputStyle}
              value={userInfo.username}
              onChangeText={(text) => setUserInfo({ ...userInfo, username: text })}
              disabled={true}
            />
            : username}
          editMode={editMode}
          onPress={() => {}}
        />
        <SettingItem
          left="Phone number"
          right={editMode ?
            <TextInput
              style={styles(theme).inputStyle}
              value={userInfo.phoneNumber}
              onChangeText={(text) => setUserInfo({ ...userInfo, phoneNumber: text })}
            />
            : phoneNumber}
          editMode={editMode}
          onPress={() => {}}
        />
        <SettingItem
          left="Email"
          right={editMode ?
            <TextInput
              style={styles(theme).inputStyle}
              value={userInfo.email}
              onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
            />
            : email}
          editMode={editMode}
          onPress={() => {}}
        />
      </View>
      <View style={styles(theme).settingGroup}>
        <SettingItem
          left="Height(cm)"
          right={editMode ?
            <TextInput
              style={styles(theme).inputStyle}
              value={userInfo.height.toString()}
              onChangeText={(text) => onChangeNumberInput(text, "height")}
            />
            : height.toString()}
          editMode={editMode}
          topDivider={true}
          onPress={() => {}}
        />
        <SettingItem
          left="Weight(kg)"
          right={editMode ?
            <TextInput
              style={styles(theme).inputStyle}
              value={userInfo.weight.toString()}
              onChangeText={(text) => onChangeNumberInput(text, "weight")}
            />
            : weight.toString()}
          editMode={editMode}
          onPress={() => {}}
        />
      </View>

      <View style={styles(theme).btnGroup}>
        {editMode &&
          <Button
            mode="contained"
            onPress={() => updateUserInfo()}
            style={styles(theme).greenBtn}
          >
            SAVE PROFILE
          </Button>
        }

        <Button
          mode="contained"
          onPress={() => setEditMode(!editMode)}
          buttonColor={editMode ? "#e82525" : theme.colors.primary}
          style={editMode ? styles(theme).redBtn : styles(theme).greenBtn}
        >
          {editMode ? "CANCEL" : "EDIT PROFILE"}
        </Button>
        
      </View>

    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surfaceVariant,
    },
    settingGroup: {
      marginTop: 20,
    },
    inputStyle: {
      backgroundColor: "white",
      height: 35,
      marginLeft: 10,
      alignSelf: "flex-end",
      flex: 1,
      borderRadius: 10,
    },
    btnGroup: {
      flexDirection: "row",
      justifyContent: "flex-end"
    },
    greenBtn: {
      marginTop: 20,
      marginRight: 10,
    },
    redBtn: {
      marginTop: 20,
      marginRight: 10,
      color: "red",
    }
  });