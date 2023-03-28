import { Dimensions, ScrollView, StyleSheet, View, Alert } from 'react-native'
import {
  Button,
  IconButton,
  SegmentedButtons,
  Text,
  List,
  Menu,
  Avatar,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import { getPlanList } from '../../redux/features/planList/slice'

import { listPlanThunk } from '../../redux/features/planList/thunk'

import { RuleStatus, DeletePlansRequest } from '../../lib/plan/plan_pb'

import { deletePlansThunk } from '../../redux/features/planList/thunk'

import { ActivityType } from '../../lib/activity/activity_pb'

import {
  displayValue,
  getProgressOfDailyActivity,
  isDailyActivity,
  toDate,
} from '../../utils/helpers'
import { toast } from '../../utils/toast/toast'
import { FabGroup } from '../../comp/FabGroup'

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
          idsList: [],
        })
      ).unwrap()
    }, [])
  )

  // if tab or filter change, reset selected all and delete list
  useEffect(() => {
    setSelectedAll(false)
    setDeleteListId([])
  }, [tabState, filteredActivityType])

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
      toast.error({ message: 'No plan selected' })
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
    toast.success({ message: 'Deleted plans successfully' })
    setDeleteListId([])
    setSelectedAll(false)
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
          {deleteListId.length > 0 ? (
            <FabGroup
              actions={[
                {
                  icon: 'delete',
                  label: 'Remove selected plans',
                  labelTextColor: theme.colors.onError,
                  onPress: () => deletePlanOrNot(),
                  color: theme.colors.onError,
                  style: { backgroundColor: theme.colors.error },
                },
              ]}
              type="error"
            />
          ) : (
            <FabGroup
              actions={[
                {
                  icon: 'plus',
                  label: 'Create new plan',
                  labelTextColor: theme.colors.onPrimary,
                  color: theme.colors.onPrimary,
                  style: { backgroundColor: theme.colors.primary },
                  onPress: () => navigation.navigate('PlanAdd'),
                },
              ]}
            />
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
                    Start: {toDate(item.startTime.seconds, true)}   --&gt;   End:{' '}
                    {toDate(item.endTime.seconds, true)}
                  </Text>
                  {isDailyActivity(item.rule) ? (
                    <Text style={{ marginBottom: 3 }}>
                      Today:{' '}
                      {displayValue(
                        item.rule,
                        getProgressOfDailyActivity(item.progressList)
                      )}{' '}
                      / {displayValue(item.rule, item.goal)}
                    </Text>
                  ) : (
                    <Text style={{ marginBottom: 3 }}>
                      Progress: {displayValue(item.rule, item.total)} /{' '}
                      {displayValue(item.rule, item.goal)}
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
                <Avatar.Icon
                  size={37}
                  icon={
                    item.activityType === ActivityType.ACTIVITY_TYPE_RUNNING
                      ? 'run-fast'
                      : item.activityType === ActivityType.ACTIVITY_TYPE_WALKING
                      ? 'walk'
                      : 'bike'
                  }
                  style={{
                    borderRadius: 5,
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
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    segmentedBtn: {
      alignSelf: 'center',
    },
    filterContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
