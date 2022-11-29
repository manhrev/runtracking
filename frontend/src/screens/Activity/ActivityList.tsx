import { Avatar, Button, Divider, Text } from "react-native-paper";
import {
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootActivityParamList } from "../../navigators/ActivityStack";
import { useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";

const ids = [...Array(10 + 1).keys()].slice(1);

export default function ActivityList({
  navigation,
  route,
}: NativeStackScreenProps<RootActivityParamList, "ActivityList">) {
  const theme = useAppTheme();
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Divider />

          {ids.map((id) => {
            return (
              <>
                <TouchableNativeFeedback
                  key={id}
                  onPress={() =>
                    navigation.push("ActivityDetail", { activityId: id })
                  }
                >
                  <View style={styles(theme).listItemContainer}>
                    <View style={styles(theme).listItemTilte}>
                      <Avatar.Icon size={40} icon="run" />
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flex: 1,
                        }}
                      >
                        <View style={{ marginLeft: 12 }}>
                          <Text
                            variant="titleLarge"
                            style={{ fontWeight: "700" }}
                          >
                            Afternoon run
                          </Text>
                          <Text variant="bodyMedium">22/09/2022 15:30</Text>
                        </View>
                        <View
                          style={{
                            justifyContent: "flex-end",
                            flex: 1,
                          }}
                        >
                          <Text
                            variant="bodyMedium"
                            style={{ alignSelf: "flex-end" }}
                          >
                            Running activity
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles(theme).listItemValue}>
                      <View style={styles(theme).listItemValueBox}>
                        <Text
                          variant="titleMedium"
                          style={{
                            textAlign: "center",
                            color: theme.colors.secondary,
                          }}
                        >
                          2.01
                        </Text>
                        <Text
                          variant="bodyMedium"
                          style={{ textAlign: "center" }}
                        >
                          Kilometers
                        </Text>
                      </View>
                      <View style={styles(theme).listItemValueBox}>
                        <Text
                          variant="titleMedium"
                          style={{ textAlign: "center" }}
                        >
                          3'33"
                        </Text>
                        <Text
                          variant="bodyMedium"
                          style={{ textAlign: "center" }}
                        >
                          Avg Pace
                        </Text>
                      </View>
                      <View style={styles(theme).listItemValueBox}>
                        <Text
                          variant="titleMedium"
                          style={{ textAlign: "center" }}
                        >
                          20:12
                        </Text>
                        <Text
                          variant="bodyMedium"
                          style={{ textAlign: "center" }}
                        >
                          Minutes
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableNativeFeedback>
                <Divider bold />
              </>
            );
          })}

          <Button
            style={{ marginVertical: 10 }}
            mode="contained"
            onPress={() => navigation.push("ActivityDetail", { activityId: 4 })}
          >
            Load more
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = (theme: any) =>
  StyleSheet.create({
    listItemContainer: {
      paddingVertical: 15,
      paddingHorizontal: 8,
    },
    listItemTilte: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
    listItemValue: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      textAlign: "center",
    },

    listItemValueBox: {
      width: "33.333%",
    },
  });
