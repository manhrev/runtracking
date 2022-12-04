import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as ReduxProvider } from "react-redux";

import store from "./src/redux/store";
import { BaseStack } from "./src/navigators/BaseStack";
import { lightTheme, darkTheme } from "./src/theme";
import { selectToggleSlice } from "./src/redux/features/toggle/slice";
import { useAppSelector } from "./src/redux/store";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <AppInsideRedux />
    </ReduxProvider>
  );
}

function AppInsideRedux() {
  const { isNightMode } = useAppSelector(selectToggleSlice);
  return (
    <PaperProvider theme={isNightMode ? darkTheme : lightTheme}>
      <NavigationContainer theme={isNightMode ? darkTheme : lightTheme}>
        <BaseStack />
      </NavigationContainer>
    </PaperProvider>
  );
}
