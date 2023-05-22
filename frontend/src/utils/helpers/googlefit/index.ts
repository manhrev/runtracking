import { AGGREGATES_BY, Device, Point, PointValue } from "../../../constants/googleapi";
import { GoogleFitRecordInfo } from "../../../screens/Profile/GoogleFitRecord";

export const appendGoogleFitRecordValue = (type: string,
     points: Point[],
      googleFitRecord: GoogleFitRecordInfo, 
      curDevice: Device,
      deviceList: Device[]) => {
    points.forEach(point => {
        if(point.value){
            if(curDevice.uid !== "Other" && point.originDataSourceId.includes(curDevice.manufacturer + ':' + curDevice.model + ':' + curDevice.uid)){
             appendPointForGoogleFitRecord(type, point, googleFitRecord)
        }else
            if (curDevice.uid === "Other" && isOtherDevice(point.originDataSourceId, deviceList)) {
             appendPointForGoogleFitRecord(type, point, googleFitRecord)
            }
        }
    })
    return googleFitRecord
}

const appendPointForGoogleFitRecord = (type: string, point: Point, googleFitRecord: GoogleFitRecordInfo) =>{
    point.value.forEach(pointValue => {
                    switch (type) {
                        case AGGREGATES_BY.cal.dataSourceId:
                            googleFitRecord.totalCalories += (pointValue.fpVal) ? pointValue.fpVal : 0
                            break;
                        case AGGREGATES_BY.dis.dataSourceId:
                            googleFitRecord.totalDistance += (pointValue.fpVal) ? pointValue.fpVal : 0
                            break;
                        case AGGREGATES_BY.min.dataSourceId:
                            googleFitRecord.totalTimeSpend += (pointValue.intVal) ? pointValue.intVal : 0
                            break;
                        default:
                            break;
                    }
                })
}

const isOtherDevice = (originDataSourceId: string, deviceList: Device[]) => {
    for(let curDevice of deviceList)
      if(originDataSourceId.includes(curDevice.manufacturer + ':' + curDevice.model + ':' + curDevice.uid))
            return false
    return true
}
