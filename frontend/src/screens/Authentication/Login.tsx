import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import { loginThunk } from "../../redux/features/user/thunk";
import { checkIfExistOrSaveExpoPushTokenThunk } from "../../redux/features/notification/thunk";
import { useAppDispatch } from "../../redux/store";
import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import { notificationClient } from "../../utils/grpc";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { ExpoPushTokenRequest } from "../../lib/notification/notification_pb";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EXPO_PUSH_TOKEN } from "../../utils/grpc";
export default function Login({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "Login">) {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const {response, error } = await dispatch(
      loginThunk({
        password,
        userName: username,
      })
    ).unwrap();

    if (error) {
      alert("Cannot login, please try again");
    } else {
      alert("Logged in!");
      let expoPushToken = await registerForPushNotificationsAsync()
      let req = new ExpoPushTokenRequest()
      if(expoPushToken != undefined){
        req.setExpoPushToken(expoPushToken)
        await AsyncStorage.setItem(EXPO_PUSH_TOKEN, expoPushToken)
      }
      if(response != null && response.userId != undefined ) req.setUserId(response.userId)
      await dispatch(
        checkIfExistOrSaveExpoPushTokenThunk(req.toObject())
      ).unwrap();
    }
  };
  return (
    <View style={baseStyles(theme).homeContainer}>
      <View style={baseStyles(theme).innerWrapper}>
        <View
          style={{
            paddingVertical: 20,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <IconButton
              icon="arrow-left"
              size={24}
              onPress={() => navigation.goBack()}
              style={{ position: "relative" }}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              variant="displaySmall"
              style={{ fontWeight: "bold", alignSelf: "center" }}
            >
              Login
            </Text>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderWidth: 1,
              borderColor: "blue",
              borderRadius: 25,
            }}
            source={require("./../../../assets/Banners/signup_banner.jpg")}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <TextInput
            mode="outlined"
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            selectionColor={theme.colors.backdrop}
            style={styles(theme).inputStyle}
          />
          <TextInput
            secureTextEntry={true}
            mode="outlined"
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            selectionColor={theme.colors.backdrop}
            style={styles(theme).inputStyle}
          />
        </View>
        <Button
          mode="contained"
          onPress={handleLogin}
          style={{
            marginTop: 30,
            marginBottom: 5,
            borderRadius: 50,
          }}
          contentStyle={{ paddingVertical: 5, borderRadius: 100 }}
        >
          <Text
            variant="titleMedium"
            style={{ color: theme.colors.onPrimary, fontWeight: "bold" }}
          >
            Login
          </Text>
        </Button>
        <Button mode="text" onPress={() => {}}>
          Forgot your password?
        </Button>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    inputStyle: {
      marginBottom: 10,
    },
  });
  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    return token;
  }