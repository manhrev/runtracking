import { Button, Divider } from "react-native-paper";
import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppTheme, useAppTheme } from "../../theme";
import { baseStyles } from "../baseStyle";
import ActivityListItem from "./comp/ActivityListItem";
import { RootBaseStackParamList } from "../../navigators/BaseStack";

const ids = [...Array(10 + 1).keys()].slice(1);

export default function ActivityList({
  navigation,
  route,
}: NativeStackScreenProps<RootBaseStackParamList, "ActivityList">) {
  const theme = useAppTheme();
  return (
    <View style={baseStyles(theme).container}>
      <View style={baseStyles(theme).innerWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {ids.map((id) => {
            return (
              <ActivityListItem
                id={id}
                onPress={() =>
                  navigation.navigate("ActivityDetail", { activityId: id })
                }
                key={id}
              />
            );
          })}

          <Button
            style={{ marginTop: 10, marginBottom: 40 }}
            mode="elevated"
            onPress={() =>
              navigation.navigate("ActivityDetail", { activityId: 4 })
            }
          >
            Load more
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = (theme: AppTheme) => StyleSheet.create({});
