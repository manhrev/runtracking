import { StyleSheet, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { selectUserSlice } from '../../../redux/features/user/slice'
import { useAppSelector } from '../../../redux/store'
import { AppTheme, useAppTheme } from '../../../theme'
import { mToKm } from '../../../utils/helpers'
import { getActivitySubjectWithActivityType } from '../../../utils/helpers/enumStr'
import { baseStyles } from '../../baseStyle'

export default function ProfileAchievement() {
  const theme = useAppTheme()
  const { achievement } = useAppSelector(selectUserSlice)

  return (
    <View style={styles(theme).extendedBaseContainer}>
      <View style={baseStyles(theme).innerWrapper}>
        {achievement.length === 0 && (
          <Text
            variant="bodyLarge"
            style={{
              color: theme.colors.tertiary,
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            You have no achievement yet!
          </Text>
        )}
        {achievement.map(
          ([acitivityType, { level, totalDistance, totalKcal }], idx) => (
            <View style={styles(theme).achievementSection} key={idx}>
              <Text
                variant="titleMedium"
                style={{
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                  marginVertical: 12,
                }}
              >
                {getLevelStr(level, acitivityType)}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <View style={styles(theme).achievementBoxLeft}>
                  <Text
                    variant="displaySmall"
                    style={{ fontStyle: 'italic', fontWeight: 'bold' }}
                  >
                    {mToKm(totalDistance)}
                  </Text>
                  <Text variant="bodyLarge">Total kilometers</Text>
                </View>
                <View style={styles(theme).achievementBoxRight}>
                  <Text
                    variant="displaySmall"
                    style={{ fontStyle: 'italic', fontWeight: 'bold' }}
                  >
                    {Number(totalKcal.toFixed(3))}
                  </Text>
                  <Text variant="bodyLarge">Total kcal burned</Text>
                </View>
              </View>
            </View>
          )
        )}
      </View>
    </View>
  )
}

function getLevelStr(level: number, acitivityType: number) {
  switch (level) {
    case 1:
      return `Beginner level ${getActivitySubjectWithActivityType(
        acitivityType
      )}`
    case 2:
      return `Intermediate level ${getActivitySubjectWithActivityType(
        acitivityType
      )}`
    case 3:
      return `Advanced level ${getActivitySubjectWithActivityType(
        acitivityType
      )}`
    default:
      return `Beginner level ${getActivitySubjectWithActivityType(
        acitivityType
      )}`
  }
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    extendedBaseContainer: {
      ...baseStyles(theme).container,
      flex: 0,
    },
    achievementSection: {
      paddingHorizontal: 10,
      paddingBottom: 20,
    },
    achievementBoxLeft: {
      flex: 1,
      backgroundColor: theme.colors.elevation.level1,
      borderRadius: 20,
      padding: 10,
      marginRight: 8,
    },
    achievementBoxRight: {
      flex: 1,
      backgroundColor: theme.colors.elevation.level1,
      borderRadius: 20,
      padding: 10,
      marginLeft: 8,
    },
  })
