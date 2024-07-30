package main

import "fmt"

func threeConsecutiveOdds(arr []int) bool {
    var count int
    for i := 0; i < len(arr); i++ {
		if(arr[i] % 2 != 0) {
			count++
			if(count == 3) {
				break
			}
		} else {
			count = 0
		}
	}
	return count == 3
}

func main() {
    fmt.Println(threeConsecutiveOdds([]int{1, 5, 3, 2})) // true
    fmt.Println(threeConsecutiveOdds([]int{4, 6, 8, 10})) // false
}