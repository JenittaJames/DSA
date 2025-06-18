// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = []
//         }
//     }

//     addEdge(v1,v2){
//         if(!this.adjacencyList[v1]){
//             this.addVertex(v1)
//         }
//         if(!this.adjacencyList[v2]){
//             this.addVertex(v2)
//         }

//         this.adjacencyList[v1].push(v2)
//         this.adjacencyList[v2].push(v1)
//     }


//     removeEdge(v1,v2){
//         this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
//         this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
//     }

//     removeVertex(vertex){
//         while(this.adjacencyList[vertex].length){
//             const adjacentVertex = this.adjacencyList[vertex].pop()
//             this.removeEdge(vertex,adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }

//     print(){
//         console.log("Graph:",this.adjacencyList);
//     }
// }


// const g = new Graph()


// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")

// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "C")


// g.print()


// g.removeEdge("A", "B")
// g.print()

// g.removeVertex("C")
// g.print()




// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................




class Graph{
    constructor(){
        this.adjacencyList = {}
    }


    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }


    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    print(){
        console.log("Graph:", this.adjacencyList);
    }


    bfs(start){
        const result = []
        const visited = {}
        const queue = [start]
        visited[start] = true

        while(queue.length){
            const vertex = queue.shift()
            result.push(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            }
        }
        return result
    }


    dfsRecursive(start){
        const result = []
        const visited = {}

        const dfs = (vertex) =>{
            if(!vertex) return
            visited[vertex] = true
            result.push(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            }
        }
        dfs(start)
        return result
    }


    dfsIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        visited[start] = true

        while(stack.length){
            const vertex = stack.pop()
            result.push(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited[neighbor]){
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            }
        }
        return result
    }
}


const g = new Graph()


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("E","F")



g.print()


console.log("BFS:",g.bfs("A"));
console.log("DFS Recursive:",g.dfsRecursive("A"));
console.log("DFS Iterative:",g.dfsIterative("A"));











// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................








// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = [];
//         }
//     }

//     addEdge(v1, v2) {
//         this.addVertex(v1);
//         this.addVertex(v2);
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1); 
//     }

//     printGraph() {
//         for (let vertex in this.adjacencyList) {
//             console.log(`${vertex} --> ${this.adjacencyList[vertex].join(', ')}`);
//         }
//     }
// }


// const g = new Graph();
// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "D");
// g.printGraph();




// Graph.prototype.bfs = function(start) {
//     const queue = [start];
//     const visited = new Set();
//     visited.add(start);

//     while (queue.length > 0) {
//         const vertex = queue.shift();
//         console.log(vertex);

//         for (let neighbor of this.adjacencyList[vertex]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push(neighbor);
//             }
//         }
//     }
// };


// console.log("BFS starting from A:");
// g.bfs("A");









// Graph.prototype.dfsRecursive = function(start, visited = new Set()) {
//     console.log(start);
//     visited.add(start);

//     for (let neighbor of this.adjacencyList[start]) {
//         if (!visited.has(neighbor)) {
//             this.dfsRecursive(neighbor, visited);
//         }
//     }
// };


// console.log("DFS starting from A:");
// g.dfsRecursive("A");




// Graph.prototype.dfsIterative = function(start) {
//     const stack = [start];
//     const visited = new Set();
//     visited.add(start);

//     while (stack.length) {
//         const vertex = stack.pop();
//         console.log(vertex);

//         for (let neighbor of this.adjacencyList[vertex]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 stack.push(neighbor);
//             }
//         }
//     }
// };


// console.log("DFS Iterative from A:");
// g.dfsIterative("A");

