import { autoBatchEnhancer } from '@reduxjs/toolkit'
import { timeConversion } from 'geolib'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Button,
  Divider,
  IconButton,
  SegmentedButtons,
  Text,
} from 'react-native-paper'
import { AppTheme, useAppTheme } from '../../../theme'

export default function Monitor(props: any) {
  const theme = useAppTheme()

  return (
    <View style={styles(theme).container}>
      <IconButton
        style={{
          position: 'absolute',
          top: 30,
          left: 0,
        }}
        size={30}
        iconColor={theme.colors.tertiary}
        icon="close"
        onPress={() => props.goBackFunc()}
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
