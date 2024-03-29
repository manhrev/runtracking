import { View, StyleSheet } from 'react-native'
import { IconButton, Text } from 'react-native-paper'
import { AppTheme, useAppTheme } from '../../../theme'

export default function Monitor(props: any) {
  const theme = useAppTheme()

  return (
    <View style={styles(theme).container}>
      <IconButton
        style={{
          left: 0,
          marginBottom: -30,
          zIndex: 10,
        }}
        size={30}
        iconColor={theme.colors.tertiary}
        icon="close"
        onPress={() => {
          props.showGoBackDialog()
        }}
      />
      <View style={styles(theme).firstCtn}>
        <Text style={styles(theme).timer}>{props.displayTime}</Text>
        <Text style={styles(theme).unit}>DURATION</Text>
      </View>

      <View style={styles(theme).secondCtn}>
        <Text style={styles(theme).text}>
          {props.displayDistance}
          {'\n'}
          <Text style={styles(theme).unit}>KM</Text>
        </Text>

        <Text style={styles(theme).text}>
          {props.displayPace}
          {'\n'}
          <Text style={styles(theme).unit}>PACE(MIN/KM)</Text>
        </Text>

        <Text style={styles(theme).text}>
          {props.displayKcal}
          {'\n'}
          <Text style={styles(theme).unit}>KCAL</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      paddingTop: 30,
      marginBottom: 10,
    },
    timer: {
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      alignSelf: 'flex-end',
      flex: 2, // 2:2:2
    },
    unit: {
      fontSize: 13,
    },
    firstCtn: {
      // col
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondCtn: {
      // row
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  })
