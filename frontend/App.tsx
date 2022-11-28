import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";

import store from "./src/redux/store";
import TabNav from "./src/navigators/Tab";
import { theme } from "./src/theme";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <TabNav />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
