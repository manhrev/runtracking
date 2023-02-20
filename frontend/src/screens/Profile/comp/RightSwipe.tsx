import { View , StyleSheet} from "react-native";
import {  Button, Text} from "react-native-paper";
import { useAppTheme, AppTheme } from "../../../theme";

export default function RightSwipe(theme : AppTheme){

    return (
        <View
          style={{
             backgroundColor: theme.colors.primaryContainer,
        justifyContent: 'center',
        alignItems: 'flex-end',
            
          }}
        >
          <Button icon="delete-outline">
          </Button>
        </View>
      );
}


