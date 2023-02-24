import { View , StyleSheet} from "react-native";
import {  Button, Text} from "react-native-paper";
import { useAppTheme, AppTheme } from "../../../theme";
// interface RightSwipeProps {
//   onPressDelete: (id: number) => void;
// }

export default function RightSwipe(theme : AppTheme, onPress: () => void){

    return (
        <View
          style={{
             backgroundColor: theme.colors.primaryContainer,
        justifyContent: 'center',
        alignItems: 'flex-end',
            
          }}
        >
          <Button icon="delete-outline" onPress={onPress}>
          </Button>
        </View>
      );
}


