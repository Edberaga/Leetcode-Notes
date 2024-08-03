package main

import (
	"fmt"
	"strconv"
)

func main() {
	tests := [][]string{
		{ "7868190130M7522","5303914400F9211","9273338290F4010" },
		{ "1313579440F2036","2921522980M5644"},
	}

	for _, test := range tests {
		fmt.Println(countSeniors(test))
	}
}

func countSeniors(details []string) int {
	count := 0
    for _, str := range details {
		num , err := strconv.Atoi(str[11:13])
		if err == nil && num > 60 {
			count++
		}
	}
	return count
}