// Min Heap


// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftChildIndex(i){
//         return 2 * i + 1
//     }

//     getRightChildIndex(i){
//         return 2 * i + 2
//     }


//     // Insert a value and heapify up

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }


//     heapifyUp(){
//         let index = this.heap.length - 1
//         while(index > 0 && this.heap[this.getParentIndex(index)] > this.heap[index]){
//             [this.heap[index], this.heap[this.getParentIndex(index)]] = [this.heap[this.getParentIndex(index)],this.heap[index]]
//             index = this.getParentIndex(index)
//         }
//     }


//     // Remove root and heapify down

//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }

//         const root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }


//     heapifyDown(index){
//         let smallest = index
//         const left = this.getLeftChildIndex(index)
//         const right = this.getRightChildIndex(index)

//         if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
//             smallest = left
//         }

//         if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
//             smallest = right
//         }

//         if(smallest !== index){
//             [this.heap[smallest], this.heap[index]] = [this.heap[index],this.heap[smallest]]
//             this.heapifyDown(smallest)
//         }
//     }

//     print(){
//         console.log("Min Heap:", this.heap);
//     }
// }


// const min = new MinHeap()

// min.insert(5)
// min.insert(3)
// min.insert(10)
// min.insert(1)
// min.insert(4)


// min.print()

// console.log("Removed root:", min.remove());


// min.print()




// ................................................................................................................................................................................................................................................................................................................................................................................................






// Max Heap


// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }


//     getParentIndex(i){
//         return Math.floor((i-1)/2)
//     }

//     getLeftChildIndex(i){
//         return 2 * i + 1
//     }

//     getRightChildIndex(i){
//         return 2 * i + 2
//     }


//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index = this.heap.length - 1
//         while(index > 0 && this.heap[this.getParentIndex(index)] < this.heap[index]){
//             [this.heap[index], this.heap[this.getParentIndex(index)]] = [this.heap[this.getParentIndex(index)], this.heap[index]]
//             index = this.getParentIndex(index)
//         }
//     }


//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }
//         if(this.heap.length === 1){
//             return this.heap.pop()
//         }

//         const root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }

//     heapifyDown(index){
//         let largest = index
//         const left = this.getLeftChildIndex(index)
//         const right = this.getRightChildIndex(index)

//         if(left < this.heap.length && this.heap[left] > this.heap[largest]){
//             largest = left
//         }
        
//         if(right < this.heap.length && this.heap[right] >this.heap[largest]){
//             largest = right
//         }

//         if(largest !== index){
//             [this.heap[largest], this.heap[index]] = [this.heap[index],this.heap[largest]]
//             this.heapifyDown(largest)
//         }
//     }


//     print(){
//         console.log("Max Heap:", this.heap);
//     }
// }



// const max = new MaxHeap()


// max.insert(5)
// max.insert(3)
// max.insert(10)
// max.insert(1)
// max.insert(4)


// max.print()

// console.log("Removed root:",max.remove());


// max.print()






// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................







// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let index = this.heap.length - 1;
//         while (index > 0) {
//             let parent = Math.floor((index - 1) / 2);
//             if (this.heap[index] >= this.heap[parent]) break;
//             [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
//             index = parent;
//         }
//     }

//     remove() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();
//         const min = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.bubbleDown();
//         return min;
//     }

//     bubbleDown() {
//         let index = 0;
//         const length = this.heap.length;
//         while (true) {
//             let left = 2 * index + 1;
//             let right = 2 * index + 2;
//             let smallest = index;

//             if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
//             if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

//             if (smallest === index) break;
//             [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//             index = smallest;
//         }
//     }
// }


// const minHeap = new MinHeap();
// [10, 5, 3, 2, 8].forEach(n => minHeap.insert(n));
// console.log("Min Heap after insertions:", minHeap.heap);
// console.log("Removed:", minHeap.remove());
// console.log("After removal:", minHeap.heap);



// function buildMinHeap(arr) {
//     const minHeap = new MinHeap();
//     arr.forEach(val => minHeap.insert(val));
//     return minHeap.heap;
// }


// const array = [12, 7, 6, 10, 15, 17];
// const minHeapArr = buildMinHeap(array);
// console.log("Built Min Heap from array:", minHeapArr);





// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................






// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.bubbleUp();
//     }

//     bubbleUp() {
//         let index = this.heap.length - 1;
//         while (index > 0) {
//             let parent = Math.floor((index - 1) / 2);
//             if (this.heap[index] <= this.heap[parent]) break;
//             [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
//             index = parent;
//         }
//     }

//     remove() {
//         if (this.heap.length === 0) return null;
//         if (this.heap.length === 1) return this.heap.pop();
//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.bubbleDown();
//         return max;
//     }

//     bubbleDown() {
//         let index = 0;
//         const length = this.heap.length;
//         while (true) {
//             let left = 2 * index + 1;
//             let right = 2 * index + 2;
//             let largest = index;

//             if (left < length && this.heap[left] > this.heap[largest]) largest = left;
//             if (right < length && this.heap[right] > this.heap[largest]) largest = right;

//             if (largest === index) break;
//             [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//             index = largest;
//         }
//     }
// }


// const maxHeap = new MaxHeap();
// [1, 4, 7, 2, 6].forEach(n => maxHeap.insert(n));
// console.log("Max Heap after insertions:", maxHeap.heap);
// console.log("Removed:", maxHeap.remove());
// console.log("After removal:", maxHeap.heap);















