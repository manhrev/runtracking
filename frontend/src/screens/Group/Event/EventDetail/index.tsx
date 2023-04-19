import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import StepIndicator from 'react-native-step-indicator'
import { RootGroupTopTabsParamList } from '../../../../navigators/GroupTopTab'
import { AppTheme, useAppTheme } from '../../../../theme'
import { formatDateWithoutTime } from '../../../../utils/helpers'
import { baseStyles } from '../../../baseStyle'

export default function EventDetail({
  navigation,
  route,
}: NativeStackScreenProps<RootGroupTopTabsParamList, 'EventDetail'>) {
  const theme = useAppTheme()
  const {
    id,
    description,
    isGlobal,
    name,
    numOfGroups,
    ownerGroupId,
    picture,
    endAt,
    startAt,
  } = route.params.event
  const [currentSubEventIndex, setCurrentSubEventIndex] = useState(2)

  return (
    <View style={styles(theme).baseContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles(theme).innerWrapper}>
          <View style={styles(theme).titleSection}>
            <View>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{name}</Text>
              <View
                style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>Created by: groupcv</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15, alignSelf: 'flex-end' }}>
                    Start: {formatDateWithoutTime(startAt)}
                  </Text>
                </View>
              </View>

              <Image
                style={styles(theme).coverPic}
                source={{
                  uri: 'https://placehold.jp/300x150.png',
                }}
              />
            </View>
            <Text style={{ fontSize: 15, marginTop: 8 }}>
              Description: Lorem eipsdf asdffw vshew ehwrhh ewh
            </Text>
          </View>
          <View style={styles(theme).metricSection}>
            <View style={styles(theme).metricDisplayBlock}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Participated
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingTop: 10,
                  gap: 10,
                  alignItems: 'flex-end',
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 35,
                    fontStyle: 'italic',
                  }}
                >
                  12
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 26,
                    fontStyle: 'italic',
                    marginBottom: 3,
                  }}
                >
                  Groups
                </Text>
              </View>
            </View>
            <View style={styles(theme).metricDisplayBlock}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Mini Events
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  paddingTop: 10,
                  gap: 10,
                  alignItems: 'flex-end',
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 35,
                    fontStyle: 'italic',
                  }}
                >
                  3
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 26,
                    fontStyle: 'italic',
                    marginBottom: 3,
                  }}
                >
                  Total
                </Text>
              </View>
            </View>
          </View>
          <View style={styles(theme).subEventProgress}>
            <Text
              style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30 }}
            >
              Current Event
            </Text>
            <StepIndicator
              customStyles={customStyles(theme)}
              currentPosition={currentSubEventIndex}
              labels={['Event 1', 'Event 2', 'Event 3', 'Event 4']}
              stepCount={4}
              onPress={(index) => {
                console.log(index)
              }}
            />
            <Divider style={{ marginVertical: 20 }} />
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  Event 3
                </Text>
              </View>
              <View style={{ flex: 2, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16 }}>Inprogress (19 days left)</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    baseContainer: {
      ...baseStyles(theme).container,
      // backgroundColor: theme.colors.surfaceDisabled,
    },
    innerWrapper: {
      ...baseStyles(theme).innerWrapper,
      marginTop: 20,
    },
    coverPic: {
      width: '100%',
      height: 150,
      marginTop: 20,
    },
    titleSection: {
      backgroundColor: theme.colors.background,
      ...shadow,
    },
    metricSection: {
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
      marginTop: 20,
    },
    metricDisplayBlock: {
      flex: 1,
      backgroundColor: theme.colors.background,
      ...shadow,
    },
    subEventProgress: {
      marginTop: 20,
      ...shadow,
      backgroundColor: theme.colors.background,
    },
  })

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  borderRadius: 2,
  padding: 20,
}

const customStyles = (theme: AppTheme) => ({
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: theme.colors.primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: theme.colors.primary,
  stepStrokeUnFinishedColor: theme.colors.surfaceVariant,
  separatorFinishedColor: theme.colors.primary,
  separatorUnFinishedColor: theme.colors.surfaceVariant,
  stepIndicatorFinishedColor: theme.colors.primary,
  stepIndicatorUnFinishedColor: theme.colors.background,
  stepIndicatorCurrentColor: theme.colors.secondaryContainer,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: theme.colors.primary,
  stepIndicatorLabelFinishedColor: theme.colors.background,
  stepIndicatorLabelUnFinishedColor: theme.colors.surfaceVariant,
  labelColor: theme.colors.onSurfaceDisabled,
  labelSize: 15,
  currentStepLabelColor: theme.colors.primary,
})
