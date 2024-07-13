var survivedRobotsHealths = function(positions, healths, directions) {
    const n = positions.length;

    // Create an array of indices from 0 to n-1
    const indices = Array.from({ length: n }, (_, i) => i);

    // Sort indices based on the positions
    indices.sort((a, b) => positions[a] - positions[b]);

    // Stack to keep track of robots moving to the right
    const stack = [];

    for (const i of indices) {
        // If the robot is moving to the right, add it to the stack
        if (directions[i] === 'R') {
            stack.push(i);
            continue;
        }

        // If the robot is moving to the left, handle collisions
        while (stack.length > 0 && healths[i] > 0) {
            const top = stack[stack.length - 1];

            // If the health of the top robot in the stack is less than the current robot's health
            if (healths[top] < healths[i]) {
                // Remove the robot from the stack and decrease the current robot's health by 1
                healths[top] = 0;
                stack.pop();
                healths[i] -= 1;
            } else if (healths[top] > healths[i]) {
                // Decrease the health of the top robot in the stack by 1 and set the current robot's health to 0
                healths[top] -= 1;
                healths[i] = 0;
            } else {
                // If both robots have the same health, remove both from the line
                healths[top] = 0;
                stack.pop();
                healths[i] = 0;
            }
        }
    }

    // Collect the healths of the surviving robots
    return healths.filter(h => h > 0);
};

console.log(survivingRobots([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR"));
console.log(survivingRobots([3, 5, 2, 6], [10, 10, 15, 12], "RLRL"));
console.log(survivingRobots([1, 2, 5, 6], [10, 10, 11, 11], "RLRL"));