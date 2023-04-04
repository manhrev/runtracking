package main

import (
	"fmt"
	"time"

	"google.golang.org/protobuf/types/known/timestamppb"
)

func printTimeFormatTimestampp(t time.Time) {
	tmp := timestamppb.New(t)

	fmt.Printf(`"seconds": %d, "nanos:": %v`+"\n", tmp.Seconds, tmp.Nanos)
}

func main() {
	fromTime := time.Date(2020, 8, 15, 14, 30, 45, 100, time.Local)
	toTime := time.Date(2023, 8, 15, 14, 30, 45, 100, time.Local)
	timeNow := time.Now()

	printTimeFormatTimestampp(fromTime)
	printTimeFormatTimestampp(toTime)
	printTimeFormatTimestampp(timeNow)
	printTimeFormatTimestampp(timeNow.Add(time.Hour * 10))

}
