function secondMinimum(n, edges, time, change) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const dist = Array.from({ length: n + 1 }, () => new Array(2).fill(Infinity));
    const queue = [[1, 0]];

    dist[1][0] = 0;

    while (queue.length > 0) {
        const [node, t] = queue.shift();

        for (const neighbor of graph[node]) {
            let newTime = t + time;
            let period = Math.floor(newTime / change);
            if (period % 2 === 1) {
                newTime += change - (newTime % change);
            }

            if (newTime < dist[neighbor][0]) {
                dist[neighbor][1] = dist[neighbor][0];
                dist[neighbor][0] = newTime;
                queue.push([neighbor, newTime]);
            } else if (newTime > dist[neighbor][0] && newTime < dist[neighbor][1]) {
                dist[neighbor][1] = newTime;
                queue.push([neighbor, newTime]);
            }
        }
    }

    return dist[n][1];
}

// Example usage:
console.log(secondMinimum(5, [[1,2],[1,3],[1,4],[3,4],[4,5]], 3, 5)); // Output: 13
console.log(secondMinimum(2, [[1,2]], 3, 2)); // Output: 11