import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import TabNav from "./src/navigators/Tab";
import { theme } from "./src/theme";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <TabNav />
      </NavigationContainer>
    </PaperProvider>
  );
}
