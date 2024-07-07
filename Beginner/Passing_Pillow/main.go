package main

import "fmt"

func main() {
	fmt.Println(passThePillow(4, 5))
	fmt.Println(passThePillow(3, 2))
}

func passThePillow(n int, time int) int {
	var person []int
	for i := 1; i <= n; i++ {
		person = append(person, i)
	}
	fmt.Println("Person: ", person)

	position := false //False to left, True to right 
	currentPerson := person[0]
    for i := 1; i <= time; i++ {
		if(currentPerson == person[0] || currentPerson == person[len(person) - 1]) {
			fmt.Print("Position changes from: ", position)
			position = !position
			fmt.Println("to: ", position)
		}
		if(position == true) {
			currentPerson++
			fmt.Println("Current person holding: ", currentPerson)
		} else {
			currentPerson--
			fmt.Println("Current person holding: ", currentPerson)
		}
	}
	return currentPerson
}