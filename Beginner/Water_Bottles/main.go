package main

import "fmt"

func main() {
	fmt.Println(numWaterBottles(9, 3))
	fmt.Println(numWaterBottles(15, 4))
}


func numWaterBottles(numBottles int, numExchange int) int {
    drinkBottle := 0
	emptyBottle := 0

	for i := 0; i < numBottles; i++ {
		drinkBottle++
		emptyBottle++
		if(emptyBottle == numExchange) {
			numBottles++
			emptyBottle = 0
		}
	}

	return drinkBottle
}