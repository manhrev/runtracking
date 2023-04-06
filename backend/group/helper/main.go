package main

import (
	"fmt"
	"math"
	"time"

	"google.golang.org/protobuf/types/known/timestamppb"
)

func printTimeFormatTimestampp(t time.Time) {
	tmp := timestamppb.New(t)

	fmt.Printf(`"seconds": %d, "nanos:": %v`+"\n", tmp.Seconds, tmp.Nanos)
}

const (
	POINT_PER_KILOMETER float64 = 5
	MODULO_FACTOR       float64 = 0.1
)

func calculatePoint(distance int) int {
	distanceFloat := float64(distance) / 1000.0

	return int(math.Ceil(distanceFloat * POINT_PER_KILOMETER * math.Pow(1+MODULO_FACTOR, distanceFloat*2/POINT_PER_KILOMETER)))
}

func main() {
	fromTime := time.Date(2020, 8, 15, 14, 30, 45, 100, time.Local)
	toTime := time.Date(2023, 8, 15, 14, 30, 45, 100, time.Local)
	timeNow := time.Now()

	printTimeFormatTimestampp(fromTime)
	printTimeFormatTimestampp(toTime)
	printTimeFormatTimestampp(timeNow)
	printTimeFormatTimestampp(timeNow.Add(time.Hour * 10))

	fmt.Println(fmt.Sprintf("Point is: %d", calculatePoint(987)))

}
