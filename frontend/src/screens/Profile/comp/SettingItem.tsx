import { View } from "react-native";
import { Divider, Text, TouchableRipple } from "react-native-paper";
import { useAppTheme } from "../../../theme";

interface SettingItemProps {
  topDivider?: boolean;
  left: string;
  right?: string;
  color?: string;
  onPress: Function;
}

export default function SettingItem(props: SettingItemProps) {
  const theme = useAppTheme();
  const { left, right, topDivider, color, onPress } = props;
  let action = () => {};

  return (
    <TouchableRipple
      onPress={() => onPress()}
      style={{ backgroundColor: theme.colors.elevation.level1 }}
    >
      <>
        {topDivider && <Divider bold />}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 24,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text
              variant="titleMedium"
              style={{
                fontWeight: "bold",
                color: color ? color : theme.colors.onBackground,
              }}
            >
              {left}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text variant="titleMedium">{right}</Text>
          </View>
        </View>
        <Divider bold />
      </>
    </TouchableRipple>
  );
}
