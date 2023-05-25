import { Dimensions, ScrollView, StyleSheet, View, Alert } from 'react-native'
import {
  Button,
  IconButton,
  SegmentedButtons,
  Text,
  List,
  Menu,
  Avatar,
  Divider,
} from 'react-native-paper'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppTheme, useAppTheme } from '../../theme'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { RootHomeTabsParamList } from '../../navigators/HomeTab'
import { useState, useEffect, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import {
  getPlanList,
  isPlanListLoading,
} from '../../redux/features/planList/slice'

import { listPlanThunk } from '../../redux/features/planList/thunk'

import {
  RuleStatus,
  DeletePlansRequest,
  PlanSortBy,
} from '../../lib/plan/plan_pb'

import { deletePlansThunk } from '../../redux/features/planList/thunk'

import { ActivityType } from '../../lib/activity/activity_pb'

import { toast } from '../../utils/toast/toast'
import { FabGroup } from '../../comp/FabGroup'
import { RefreshControl } from 'react-native-gesture-handler'
import Filter from './comp/Filter'
import PlanItem from './comp/PlanItem'
import { baseStyles } from '../baseStyle'
import { useDialog } from '../../hooks/useDialog'
import { ConfirmDialog } from '../../comp/ConfirmDialog'

export default function Plan({
  navigation,
  route,
}: NativeStackScreenProps<RootHomeTabsParamList, 'PlanHome'>) {
  const theme = useAppTheme()

  const dispatch = useAppDispatch()
  const { planList } = useAppSelector(getPlanList)
  const isLoading = useAppSelector(isPlanListLoading)
  const [tabState, setTabState] = useState('current')
  const [deleteListId, setDeleteListId] = useState<number[]>([])
  const [selectedAll, setSelectedAll] = useState(false)
  const { toggleDialog, open } = useDialog()

  // filter
  const [asc, setAsc] = useState(false)
  const [sortBy, setSortBy] = useState(PlanSortBy.PLAN_SORT_BY_CREATED_TIME)
  const [filteredActivityType, setFilteredActivityType] =
    useState<ActivityType>(ActivityType.ACTIVITY_TYPE_UNSPECIFIED)

  const fetchPlanList = async () => {
    const { error } = await dispatch(
      listPlanThunk({
        activityType: filteredActivityType,
        ascending: asc,
        limit: 100,
        offset: 0,
        sortBy: sortBy,
        idsList: [],
      })
    ).unwrap()

    if (error) {
      toast.error({ message: 'Something went wrong. Please try again later!' })
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchPlanList()
    }, [filteredActivityType, asc, sortBy])
  )

  // if tab or filter change, reset selected all and delete list
  useEffect(() => {
    setSelectedAll(false)
    setDeleteListId([])
  }, [tabState, filteredActivityType, asc, sortBy])

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

    toggleDialog()
  }

  const deletePlanConfirmed = () => {
    const deleteInfo: DeletePlansRequest.AsObject = {
      idsList: deleteListId,
    }
    dispatch(deletePlansThunk(deleteInfo)).unwrap()
    toast.success({ message: 'Deleted plans successfully' })
    setDeleteListId([])
    setSelectedAll(false)
    toggleDialog()
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
      (item.status === RuleStatus.RULE_STATUS_INPROGRESS &&
        tabState === 'current') ||
      (item.status !== RuleStatus.RULE_STATUS_INPROGRESS &&
        tabState === 'history')
  )

  return (
    <>
      <ConfirmDialog
        message={
          'Are you sure you want to delete ' + deleteListId.length + ' plan(s)?'
        }
        title="Delete Plan"
        visible={open}
        onSubmit={() => deletePlanConfirmed()}
        toogleDialog={toggleDialog}
      />
      <View style={baseStyles(theme).homeContainer}>
        <View style={baseStyles(theme).innerWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={fetchPlanList}
              />
            }
          >
            <View style={styles(theme).btnContainer}>
              {deleteListId.length > 0 ? (
                <FabGroup
                  actions={[
                    {
                      icon: 'delete',
                      label:
                        'Remove ' + deleteListId.length + ' selected plan(s)',
                      labelTextColor: theme.colors.onError,
                      onPress: () => deletePlanOrNot(),
                      color: theme.colors.onError,
                      style: { backgroundColor: theme.colors.error },
                    },
                  ]}
                  icon="trash-can"
                  type="error"
                />
              ) : (
                <FabGroup
                  actions={[
                    {
                      icon: 'plus',
                      label: 'Create new plan',
                      labelTextColor: theme.colors.onTertiary,
                      color: theme.colors.onTertiary,
                      style: { backgroundColor: theme.colors.tertiary },
                      onPress: () => navigation.navigate('PlanAdd'),
                    },
                  ]}
                  type="tertiary"
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

            <Filter
              asc={asc}
              setAsc={setAsc}
              sortBy={sortBy}
              setSortBy={setSortBy}
              filteredActivityType={filteredActivityType}
              setFilteredActivityType={setFilteredActivityType}
              selectedAll={selectedAll}
              selectOrUnselectAll={selectOrUnselectAll}
            />

            <Divider style={{ height: 1 }} />

            {filteredPlanList.map((plan, idx) => (
              <PlanItem
                key={idx}
                plan={plan}
                hideTopDivider={idx === 0}
                showBottomDivider={idx === filteredPlanList.length - 1}
                navigateFunc={() => {
                  navigation.navigate('PlanDetail', {
                    planId: plan.id,
                    canEdit: plan.status === RuleStatus.RULE_STATUS_INPROGRESS,
                  })
                }}
                deleteListId={deleteListId}
                addOrRemoveFromDeleteList={addOrRemoveFromDeleteList}
              />
            ))}
            {!isLoading && filteredPlanList.length == 0 && (
              <>
                <Text
                  variant="bodyLarge"
                  style={{
                    color: theme.colors.tertiary,
                    textAlign: 'center',
                    marginTop: 20,
                    fontWeight: 'bold',
                  }}
                >
                  {tabState === 'current'
                    ? 'You have no plan in progress'
                    : 'No plan found'}
                </Text>
                {tabState === 'current' && (
                  <Button
                    style={{ marginTop: 10 }}
                    onPress={() => navigation.navigate('PlanAdd')}
                  >
                    Create one!
                  </Button>
                )}
              </>
            )}
          </ScrollView>
        </View>
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
