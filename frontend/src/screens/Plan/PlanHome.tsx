import { Dimensions, ScrollView, StyleSheet, View, Alert } from 'react-native'
import {
  Button,
  IconButton,
  SegmentedButtons,
  Text,
  List,
  Menu,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { baseStyles } from '../baseStyle'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import * as Progress from 'react-native-progress'

import {
  isPlanListLoading,
  getPlanList,
} from '../../redux/features/planList/slice'

import { listPlanThunk } from '../../redux/features/planList/thunk'

import {
  RuleStatus,
  DeletePlansRequest,
  Rule,
  PlanProgress,
} from '../../lib/plan/plan_pb'

import { deletePlansThunk } from '../../redux/features/planList/thunk'

import { ActivityType } from '../../lib/activity/activity_pb'

const windowWidth = Dimensions.get('window').width

export default function Plan({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'PlanHome'>) {
  const theme = useAppTheme()

  const dispatch = useAppDispatch()
  const { planList } = useAppSelector(getPlanList)
  // const isLoading = useAppSelector(isPlanListLoading);
  const [tabState, setTabState] = useState('current')
  const [deleteListId, setDeleteListId] = useState<number[]>([])
  const [selectedAll, setSelectedAll] = useState(false)

  // filter menu
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)
  const [filteredActivityType, setFilteredActivityType] =
    useState<ActivityType>(ActivityType.ACTIVITY_TYPE_UNSPECIFIED)

  useFocusEffect(
    useCallback(() => {
      dispatch(
        listPlanThunk({
          activityType: 0,
          ascending: false,
          limit: 100,
          offset: 0,
          sortBy: 1,
        })
      ).unwrap()
    }, [])
  )

  // if tab or filter change, reset selected all and delete list
  useEffect(() => {
    setSelectedAll(false)
    setDeleteListId([])
  }, [tabState, filteredActivityType])

  const toDate = (seconds: number) => {
    // dd/mm/yyyy
    const date = new Date(seconds * 1000)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    return `${day < 10 ? '0' + day : day}/${
      month < 10 ? '0' + month : month
    }/${year}`
  }

  const addOrRemoveFromDeleteList = (id: number) => {
    if (deleteListId.includes(id)) {
      // remove from delete list
      setDeleteListId(deleteListId.filter((item) => item !== id))
      setSelectedAll(false)
    } else {
      setDeleteListId([...deleteListId, id])
      if (deleteListId.length + 1 === filteredPlanList.length)
        setSelectedAll(true) // if all selected
    }
  }

  const deletePlanOrNot = () => {
    if (deleteListId.length === 0) {
      alert('No plan selected')
      return
    }

    Alert.alert(
      'Delete Plan',
      'Are you sure you want to delete ' + deleteListId.length + ' plan(s)?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: () => deletePlanConfirmed() },
      ],
      { cancelable: false }
    )
  }

  const deletePlanConfirmed = () => {
    const deleteInfo: DeletePlansRequest.AsObject = {
      idsList: deleteListId,
    }
    dispatch(deletePlansThunk(deleteInfo)).unwrap()
    alert('Deleted plan with ID(s): ' + deleteListId)
    setDeleteListId([])
    setSelectedAll(false)
  }

  const isDailyActivity = (planRule: Rule) => {
    return (
      planRule === Rule.RULE_TOTAL_DISTANCE_DAILY ||
      planRule === Rule.RULE_TOTAL_TIME_DAILY ||
      planRule === Rule.RULE_TOTAL_ACTIVITY_DAILY ||
      planRule === Rule.RULE_TOTAL_CALORIES_DAILY
    )
  }

  const getProgressOfDailyActivity = (
    progressList: Array<PlanProgress.AsObject>
  ) => {
    if (progressList.length > 0) {
      const today = new Date().getDate()
      var value = -1
      progressList.map((element: any) => {
        // if the date is today -> get this element value
        const date = new Date(element.timestamp.seconds * 1000)
        if (date.getDate() === today) {
          value = Number(element.value)
        }
      })
      if (value === -1) return 0
      else return value
    }
    return 0
  }

  const selectOrUnselectAll = () => {
    if (selectedAll) {
      setSelectedAll(false)
      setDeleteListId([])
    } else {
      setSelectedAll(true)
      const listId: number[] = []
      filteredPlanList.map((plan) => {
        listId.push(plan.id)
      })
      setDeleteListId(listId)
    }
  }

  const filteredPlanList = planList.filter(
    (item) =>
      ((item.status === RuleStatus.RULE_STATUS_INPROGRESS &&
        tabState === 'current') ||
        (item.status !== RuleStatus.RULE_STATUS_INPROGRESS &&
          tabState === 'history')) &&
      (filteredActivityType === ActivityType.ACTIVITY_TYPE_UNSPECIFIED ||
        item.activityType === filteredActivityType)
  )

  return (
    <>
      <View style={styles(theme).container}>
        <View style={styles(theme).btnContainer}>
          <Button
            mode="text"
            onPress={() => navigation.navigate('PlanAdd')}
            style={styles(theme).addPlanBtn}
            labelStyle={{ fontSize: 16 }}
          >
            ADD NEW PLAN
          </Button>

          {deleteListId.length > 0 && (
            <Button
              mode="text"
              onPress={() => deletePlanOrNot()}
              style={styles(theme).selectPlanBtn}
              labelStyle={{
                fontSize: 16,
                color: '#e82525',
              }}
            >
              DELETE({deleteListId.length})
            </Button>
          )}
        </View>

        <SegmentedButtons
          style={styles(theme).segmentedBtn}
          value={tabState}
          onValueChange={setTabState}
          density="regular"
          buttons={[
            {
              value: 'current',
              label: '      Current      ',
            },
            {
              value: 'history',
              label: '      History      ',
            },
          ]}
        />

        <View style={styles(theme).filterContainer}>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <IconButton
                icon="filter-menu"
                style={{ marginLeft: 10 }}
                iconColor={theme.colors.primary}
                size={24}
                onPress={openMenu}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                setFilteredActivityType(ActivityType.ACTIVITY_TYPE_UNSPECIFIED)
                closeMenu()
              }}
              title="All"
            />
            <Menu.Item
              onPress={() => {
                setFilteredActivityType(ActivityType.ACTIVITY_TYPE_RUNNING)
                closeMenu()
              }}
              title="Running"
            />
            <Menu.Item
              onPress={() => {
                setFilteredActivityType(ActivityType.ACTIVITY_TYPE_WALKING)
                closeMenu()
              }}
              title="Walking"
            />
            <Menu.Item
              onPress={() => {
                setFilteredActivityType(ActivityType.ACTIVITY_TYPE_CYCLING)
                closeMenu()
              }}
              title="Cycling"
            />
          </Menu>

          <Text
            variant="bodyLarge"
            style={{
              fontWeight: 'bold',
              textAlignVertical: 'center',
              color: theme.colors.secondary,
            }}
            onPress={openMenu}
          >
            {filteredActivityType === ActivityType.ACTIVITY_TYPE_RUNNING
              ? 'Running'
              : filteredActivityType === ActivityType.ACTIVITY_TYPE_WALKING
              ? 'Walking'
              : filteredActivityType === ActivityType.ACTIVITY_TYPE_CYCLING
              ? 'Cycling'
              : 'All'}
          </Text>

          <IconButton
            icon={selectedAll ? 'checkbox-marked' : 'checkbox-blank-outline'}
            iconColor={selectedAll ? '#e82525' : '#969696'}
            size={25}
            onPress={() => selectOrUnselectAll()}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredPlanList.map((item, index) => (
            <List.Item
              style={
                index == 0
                  ? styles(theme).curPlanTopDownBordered
                  : styles(theme).curPlan
              }
              key={index}
              title={item.name}
              titleStyle={styles(theme).planName}
              descriptionNumberOfLines={10}
              description={
                <View>
                  <Text>
                    St: {toDate(item.startTime.seconds)} - End:{' '}
                    {toDate(item.endTime.seconds)}
                  </Text>
                  {isDailyActivity(item.rule) ? (
                    <Text style={{ marginBottom: 3 }}>
                      Today: {getProgressOfDailyActivity(item.progressList)} /{' '}
                      {item.goal}
                    </Text>
                  ) : (
                    <Text style={{ marginBottom: 3 }}>
                      Progress: {item.total} / {item.goal}
                    </Text>
                  )}
                  <Progress.Bar
                    progress={
                      isDailyActivity(item.rule)
                        ? getProgressOfDailyActivity(item.progressList) /
                          item.goal
                        : item.total / item.goal
                    }
                    width={windowWidth * 0.6}
                    color={theme.colors.primary}
                    borderColor="#e0e0e0"
                    unfilledColor="#e0e0e0"
                    borderRadius={5}
                    animated={true}
                  />
                </View>
              }
              left={(props) => (
                <List.Icon
                  {...props}
                  icon={
                    item.activityType === ActivityType.ACTIVITY_TYPE_RUNNING
                      ? 'run-fast'
                      : item.activityType === ActivityType.ACTIVITY_TYPE_WALKING
                      ? 'walk'
                      : 'bike'
                  }
                  style={{
                    alignSelf: 'center',
                    marginLeft: 20,
                  }}
                />
              )}
              // checkbox
              right={(props) => (
                <IconButton
                  {...props}
                  icon={
                    deleteListId.includes(item.id)
                      ? 'checkbox-marked'
                      : 'checkbox-blank-outline'
                  }
                  iconColor={
                    deleteListId.includes(item.id) ? '#e82525' : '#969696'
                  }
                  size={27}
                  onPress={() => addOrRemoveFromDeleteList(item.id)}
                />
              )}
              onPress={() =>
                navigation.navigate('PlanDetail', {
                  planId: item.id,
                  canEdit: item.status === RuleStatus.RULE_STATUS_INPROGRESS,
                })
              } // only in progress plan can be edited
            />
          ))}
        </ScrollView>
      </View>
    </>
  )
}

const styles = (theme: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    planName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    curPlan: {
      // bottom divider
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#b5b7ba',
    },
    curPlanTopDownBordered: {
      // top and bottom divider
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#b5b7ba',
      borderTopWidth: 1,
      borderTopColor: '#b5b7ba',
    },
    addPlanBtn: {
      marginLeft: 10,
    },
    selectPlanBtn: {
      marginRight: 10,
    },
    btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    segmentedBtn: {
      marginTop: 10,
      // marginBottom: 10,
      alignSelf: 'center',
    },
    filterContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
