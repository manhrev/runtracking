package helper

func ConvertInt64sToInts(int64s []int64) []int {
	var nums []int
	for _, num := range int64s {
		nums = append(nums, int(num))
	}

	return nums
}

func ConvertIntsToInt64s(nums []int) []int64 {
	var res []int64
	for _, num := range nums {
		res = append(res, int64(num))
	}

	return res
}
