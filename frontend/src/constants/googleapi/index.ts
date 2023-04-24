export interface User {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
  }

  export interface ListDataSource{
    dataSource: DataSource[]
  }

  export interface DataSource {
    dataStreamId: string;
    name: string;
    dataStreamName: string;
    type: string;
    dataType: {
      name: string;
      field: {
        name: string;
        format: string;
        optional: boolean;
      }[];
    };
    device: Device;

    application: {
      packageName: string;
      version: string;
      detailsUrl: string;
      name: string;
    };
    dataQualityStandard: string[];
  }
 export interface Device{
    uid: string;
      type: string;
      version: string;
      model: string;
      manufacturer: string;
 }

  export interface DataSet {
    minStartTimeNs: number;
    maxEndTimeNs: number;
    dataSourceId: string;
    point: Point[];
    nextPageToken?: string;
  }
  
  export interface Point {
    startTimeNanos: number;
    endTimeNanos: number;
    dataTypeName: string;
    originDataSourceId: string;
    value: PointValue[];
    modifiedTimeMillis?: number;
    rawTimestampNanos?: number;
    computationTimeMillis?: number;
  }
  
  export interface PointValue {
    intVal?: number;
    fpVal?: number;
    stringVal?: string;
    mapVal?: MapValue[];
  }
  
  export interface MapValue {
    key: string;
    value: {
      fpVal: number;
    };
  }
  

 export const DATA_SOURCE = {
    "steps": "derived:com.google.step_count.delta:com.google.android.gms:merge_step_deltas",
    "dist": "derived:com.google.distance.delta:com.google.android.gms:from_steps<-merge_step_deltas",
    "bpm": "derived:com.google.heart_rate.bpm:com.google.android.gms:merge_heart_rate_bpm",
    "rhr": "derived:com.google.heart_rate.bpm:com.google.android.gms:resting_heart_rate<-merge_heart_rate_bpm",
    "sleep" : "derived:com.google.sleep.segment:com.google.android.gms:sleep_from_activity<-raw:com.google.activity.segment:com.heytap.wearable.health:stream_sleep",
    "cal" : "derived:com.google.calories.expended:com.google.android.gms:from_activities",
    "move": "derived:com.google.active_minutes:com.google.android.gms:from_steps<-estimated_steps",
    "points" : "derived:com.google.heart_minutes:com.google.android.gms:merge_heart_minutes",
    "weight" : "derived:com.google.weight:com.google.android.gms:merge_weight"
}


export const SCOPES = {
  FITNESS_ACTIVITY_READ: 'https://www.googleapis.com/auth/fitness.activity.read',
  FITNESS_ACTIVITY_WRITE: 'https://www.googleapis.com/auth/fitness.activity.write',
  FITNESS_BODY_READ: 'https://www.googleapis.com/auth/fitness.body.read',
  FITNESS_BODY_WRITE: 'https://www.googleapis.com/auth/fitness.body.write',
};
