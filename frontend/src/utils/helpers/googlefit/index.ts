import { AGGREGATES_BY, Point } from "../../../constants/googleapi";
import { GoogleFitRecordInfo } from "../../../screens/Profile/GoogleFitRecord";

export const appendGoogleFitRecordValue = (type: string, points: Point[], googleFitRecord: GoogleFitRecordInfo) => {
    points.forEach(point => {
        if (point.value) {
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
    })
    return googleFitRecord
}