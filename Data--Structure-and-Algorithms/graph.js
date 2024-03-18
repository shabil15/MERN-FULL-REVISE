class Graph{
    constructor(){
        this.list = {}
    }   

    
    addVertex(vetex){
        if(!this.list[vetex]){
            this.list[vetex] = new Set();
        }
    }// o(1) T & S


    addEdge(vetex1, vetex2){
        if(!this.list[vetex1]){
            this.addVertex(vetex1)
        }
        if(!this.list[vetex2]){
            this.addVertex(vetex2)
        }
        this.list[vetex1].add(vetex2);
        this.list[vetex2].add(vetex1)
    }// O(1) T S


    display(){
        for(let vetex in this.list){
            console.log(vetex+'->'+[...this.list[vetex]]);
        }


    }// O(V+E) T  O(1)S
    // searching
    hasEdge(vetex1, vetex2){
        return this.list[vetex1].has(vetex2) && this.list[vetex2].has(vetex1)
    }// O(1) T S


    deleteEdge(vetex1, vetex2){
        this.list[vetex1].delete(vetex2);
        this.list[vetex2].delete(vetex1)
    }// O(1) T S


    removeVertex(vetex){
        if(!this.list[vetex]){
            return 
        }
        for(let edges of this.list[vetex]){
            this.deleteEdge(vetex, edges)
        }
        delete this.list[vetex]
    }// time complexity depend on adjecent verticies O(V+E)   O(1)S


    BFS(start){
        const queue = [start];
        const visited = new Set();

        while(queue.length){
            const vertex = queue.shift();
            if(!visited.has(vertex)){
                visited.add(vertex);

                for(let edges of this.list[vertex]){
                    queue.push(edges);
                }
            }
        }
        return visited;  // O(v+e) T   O(v) S
    }


    DFS(start){
        const stack = [start];
        const visited = new Set();

        while(stack.length){
            const vertex = stack.pop()
            if(!visited.has(vertex)){
                visited.add(vertex);

                for(let edges of this.list[vertex]){
                    stack.push(edges);
                }
            }
        }
        return visited  // O(v+e) T   O(v) S
    }
    
} 

const graph = new Graph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B',);
graph.addEdge("B","C");
graph.addEdge('C','B')
graph.addEdge('A','D',);

// graph.display()
// console.log(graph.hasEdge("C","B"));
// // graph.deleteEdge("C","B")
// // graph.display()
// // console.log(graph.hasEdge("C","B"));
// graph.removeVertex('A')
// graph.display()
// console.log(graph.hasEdge("C","B"));
console.log(graph.BFS('A'));
console.log(graph.DFS('A'));