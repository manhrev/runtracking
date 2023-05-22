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

  export interface DeviceRecord{
    deviceInfo: Device;
    totalCalories: number,
    totalDistance: number,
    totalTimeSpend: number,
  }
 export interface Device{
    uid: string;
      type: string;
      version: string;
      model: string;
      manufacturer: string;
 }

 export interface Bucket {
  startTimeMillis: string;
  endTimeMillis: string;
  dataset: DataSet[];
}

export interface ListBucket {
  bucket: Bucket[];
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

  export interface ListDataSetRequest{
    startTimeNanoSeconds: number, 
    endTimeNanoSeconds: number, 
  }
  
export interface AggregateByRequest{
  aggregateBy: AggregateBy[],
  endTimeMillis: number,
  startTimeMillis: number
}

export interface AggregateBy {
  dataTypeName: string;
  dataSourceId: string;
}

export const AGGREGATES_BY ={
  "dis" : {
    dataSourceId:  'derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta',
    dataTypeName: 'com.google.distance.delta'
  } as AggregateBy,
  "cal" : {
    dataSourceId:  'derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended',
    dataTypeName: 'com.google.calories.expended'
  } as AggregateBy,
  "min" : {
    dataSourceId:  'derived:com.google.active_minutes:com.google.android.gms:merge_active_minutes',
    dataTypeName: 'com.google.active_minutes'
  } as AggregateBy,

}
