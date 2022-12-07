import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { RootBaseStackParamList } from "../../navigators/BaseStack";
import { AppTheme, useAppTheme } from "../../theme";
import { authClient, KEY_ACCESS_TOKEN } from "../../utils/grpc";
import { baseStyles } from "../baseStyle";

export default function Login({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "Login">) {
  const theme = useAppTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const res = await authClient.login(username, password);
    if (!res.error) {
      alert("login success");
      const token = res.response?.accessToken || "";
      AsyncStorage.setItem(KEY_ACCESS_TOKEN, token);

      navigation.goBack();
    } else {
      alert("dcm sai roi");
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
            mode="outlined"
            label="Email"
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
