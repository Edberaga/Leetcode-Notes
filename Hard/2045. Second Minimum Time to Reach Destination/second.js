function secondMinimum(n, edges, time, change) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const dist = Array.from({ length: n + 1 }, () => [Infinity, Infinity]);
    dist[1][0] = 0;

    const pq = [[0, 1]]; // [current time, current vertex]
    
    while (pq.length > 0) {
        const [currentTime, node] = pq.shift();

        for (const neighbor of graph[node]) {
            let newTime = currentTime + time;

            // Handle traffic signal
            if (Math.floor(currentTime / change) % 2 === 1) {
                newTime = (Math.floor(currentTime / change) + 1) * change + time;
            }

            if (newTime < dist[neighbor][0]) {
                dist[neighbor][1] = dist[neighbor][0];
                dist[neighbor][0] = newTime;
                pq.push([newTime, neighbor]);
            } else if (newTime > dist[neighbor][0] && newTime < dist[neighbor][1]) {
                dist[neighbor][1] = newTime;
                pq.push([newTime, neighbor]);
            }
        }

        // Sort priority queue by time
        pq.sort((a, b) => a[0] - b[0]);
    }

    return dist[n][1];
}

// Example usage:
console.log(secondMinimum(5, [[1,2],[1,3],[1,4],[3,4],[4,5]], 3, 5)); // Output: 13
console.log(secondMinimum(2, [[1,2]], 3, 2)); // Output: 11