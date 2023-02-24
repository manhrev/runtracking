import { createAsyncThunk } from "@reduxjs/toolkit";
import { ListActivityInfoRequest } from "../../../lib/activity/activity_pb";
import { activityClient } from "../../../utils/grpc";

const fdata = [ // completed, failed, doing
    {
        id: 1,
        name: "First Item",
        startTime: {
            seconds: 1677248742,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 2,
        name: "Second Item",
        startTime: {
            seconds: 1625097600,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 3,
        name: "Third Item",
        startTime: {
            seconds: 1625097600,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 4,
        name: "Fourth Item",
        startTime: {
            seconds: 1625097600,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "completed",
    },
    {
        id: 5,
        name: "Fifth Item",
        startTime: {
            seconds: 1625097600,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 6,
        name: "Sixth Item",
        startTime: {
            seconds: 1625097600,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "doing",
    },
    {
        id: 7,
        name: "Seventh Item",
        startTime: {
            seconds: 1625097600,
            nanos: 0
        },
        endTime: {
            seconds: 1625097600,
            nanos: 0
        },
        total: 100,
        goal: 150,
        status: "doing",
    },

];


export const listPlanThunk = createAsyncThunk(
  "plan/listPlan",
  () => {
    return fdata;
  }
);

export const createPlanThunk = createAsyncThunk(
    "plan/createPlan",
    (newPlanInfo: any) => {
        const tempData = {
            id: fdata.length + 1,
            name: newPlanInfo.name,
            startTime: newPlanInfo.startTime,
            endTime: newPlanInfo.endTime,
            total: 0,
            goal: newPlanInfo.goal,
            status: "doing",
        }
        return tempData;
    }
);

// export const listMoreActivityInfoThunk = createAsyncThunk(
//   "activity/listMoreActivityInfo",
//   async (param: ListActivityInfoRequest.AsObject) => {
//     return await activityClient.listActivityInfo(param);
//   }
// );
