// Max Heap(Ascending Order)


// function heapify(arr,n,i){
//     let largest = i
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(left < n && arr[left] > arr[largest]){
//         largest = left
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest = right
//     }

//     if(largest !== i){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }



// function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor(n/2) - 1; i >= 0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i = n - 1 ; i > 0 ; i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]

//         heapify(arr,i,0)
//     }
//     return arr
// }



// let arr = [4,10,3,5,1]


// console.log("Original array: ",arr);

// let sortedArray = heapSort([...arr])

// console.log("Sorted array(ascending): ",sortedArray);




// ................................................................................................................................................................................................................................................................................................................................................................................................




// Min Heap(Descending Order)



// function heapify(arr,n,i){
//     let smallest = i
//     let left = 2 * i + 1
//     let right = 2 * i + 2

//     if(left < n && arr[left] < arr[smallest]){
//         smallest = left
//     }

//     if(right < n && arr[right] < arr[smallest]){
//         smallest = right
//     }

//     if(smallest !== i){
//         [arr[i],arr[smallest]] = [arr[smallest],arr[i]]
//         heapify(arr,n,smallest)
//     }
// }



// function heapSort(arr){
//     let n = arr.length

//     for(let i = Math.floor(n/2) - 1 ; i >= 0 ; i--){
//         heapify(arr,n,i)
//     }

//     for(let i = n - 1; i > 0 ; i--){
//         [arr[0],arr[i]] = [arr[i],arr[0]]

//         heapify(arr,i,0)
//     }
//     return arr.reverse()
// }



// const arr = [7,2,9,4,1]

// console.log("Original array:", arr)

// const sorted = heapSort([...arr])

// console.log("Sorted array (descending):", sorted)








// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................




// function tracedHeapSort(arr) {
//     function heapifyTrace(arr, n, i) {
//         let largest = i;
//         let l = 2 * i + 1;
//         let r = 2 * i + 2;

//         if (l < n && arr[l] > arr[largest]) largest = l;
//         if (r < n && arr[r] > arr[largest]) largest = r;

//         if (largest !== i) {
//             [arr[i], arr[largest]] = [arr[largest], arr[i]];
//             console.log("Heapified:", [...arr]);
//             heapifyTrace(arr, n, largest);
//         }
//     }

//     let n = arr.length;

//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapifyTrace(arr, n, i);
//     }

//     for (let i = n - 1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         console.log(`Swapped root with index ${i}:`, [...arr]);
//         heapifyTrace(arr, i, 0);
//     }

//     return arr;
// }


// let arr3 = [9, 4, 7, 1, 3];
// console.log("Tracing Heap Sort:");
// console.log("Final Sorted Array:", tracedHeapSort(arr3));








