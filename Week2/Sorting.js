// Bubble sort

// function bubbleSort(arr){
//     let swapped 
//     do {
//         swapped = false
//         for(let i =0 ; i<arr.length - 1; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped)
// }


// const arr = [8,20,-2,4,-6]
// bubbleSort(arr);
// console.log(arr);

// Big-O = O(n^2)



//Insertion sort

// function insertionSort(arr){
//     for(let i = 1 ; i< arr.length; i++){
//         let key = arr[i]
//         let j = i-1
//         while(j >= 0 && arr[j] > key){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = key
//     }
// }


// const arr = [8,20,-2,4,-6]
// insertionSort(arr);
// console.log(arr);

// Big-O = O(n^2)



//Quick Sort

// function quickSort(arr){
//   if(arr.length < 2){
//     return arr
//   }
//   let pivot = arr[arr.length-1]
//   let left = []
//   let right = []

//   for(let i = 0; i< arr.length - 1 ; i++ ){
//     if(arr[i]<pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left),pivot,...quickSort(right)]
// }


// const arr = [8,20,-2,4,-6]
// console.log(quickSort(arr));

// Worst case : Big-O = O(n^2)
// Avg case : Big-O = O(nlogn)



// Selection sort






// Merge sort


// function mergeSort(arr){
//   if(arr.length < 2){
//     return arr
//   }
//   const mid = Math.floor(arr.length / 2)
//   const leftArr = arr.slice(0,mid)
//   const rightArr = arr.slice(mid)
//   return merge(mergeSort(leftArr), mergeSort(rightArr))
// }


// function merge(leftArr,rightArr){
//   const sortedArr = []
//   while(leftArr.length && rightArr.length){
//     if(leftArr[0] <= rightArr[0]){
//       sortedArr.push(leftArr.shift())
//     }else{
//       sortedArr.push(rightArr.shift())
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [8,20,-2,4,-6]
// console.log(mergeSort(arr));

// Big-O = O(nlogn)


// .....................................................................................................................................................................................
// .....................................................................................................................................................................................
// .....................................................................................................................................................................................




// Selection Sort – Sort Numbers in Descending Order


// function selectionSortDesc(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//       let maxIdx = i;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] > arr[maxIdx]) {
//           maxIdx = j;
//         }
//       }
//       [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
//     }
//     return arr;
//   }
  
//   console.log(selectionSortDesc([29, 10, 14, 37, 13]));




// Merge Sort – Sort in Ascending Order


// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
    
//     return merge(left, right);
//   }
  
//   function merge(left, right) {
//     const result = [];
//     while (left.length && right.length) {
//       result.push(left[0] < right[0] ? left.shift() : right.shift());
//     }
//     return result.concat(left, right);
//   }
  
//   console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));



// Quick Sort – Handle Duplicates


// function quickSort(arr) {
//     if (arr.length < 2) return arr;
//     const pivot = arr[0];
//     const left = arr.slice(1).filter(x => x <= pivot);
//     const right = arr.slice(1).filter(x => x > pivot);
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   console.log(quickSort([4, 5, 3, 7, 2, 5, 1]));



//  Bubble Sort – Sort an Array of 10 Random Integers


// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len - 1; i++) {
//       for (let j = 0; j < len - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           // Swap
//           [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         }
//       }
//     }
//     return arr;
//   }
  
//   const nums = [64, 25, 12, 22, 11, 34, 90, 2, 7, 5];
//   console.log("Sorted:", bubbleSort(nums));



  // Insertion Sort – Sort Test Scores


  // function insertionSort(arr) {
  //   for (let i = 1; i < arr.length; i++) {
  //     let current = arr[i];
  //     let j = i - 1;
  //     while (j >= 0 && arr[j] > current) {
  //       arr[j + 1] = arr[j];
  //       j--;
  //     }
  //     arr[j + 1] = current;
  //   }
  //   return arr;
  // }
  
  // console.log(insertionSort([85, 70, 95, 60, 75]));



// Check for Duplicates in an Array 


// function hasDuplicates(arr) {
//   const map = {}; 

//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];
//     if (map[key] !== undefined) {
//       return true; 
//     }
//     map[key] = true;
//   }

//   return false; 
// }


// console.log(hasDuplicates([1, 2, 3, 4, 5]));     
// console.log(hasDuplicates([1, 2, 3, 4, 1]));     





























// ..................................................................................................................................................................................................................................






// Bubble sort


// function bubble(arr){
//   for(let i = 0; i < arr.length - 1; i++){
//     for(let j=0; j < arr.length - i - 1; j++){
//       if(arr[j] > arr[j + 1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }

// let arr = [2,8,9,3,5,7,3,54,32,7,6]
// bubble(arr)

// console.log(arr);







// Insertion sort


// function insert(arr){
//   for(let i = 0; i<arr.length; i++){
//     let key = arr[i], j = i-1
//     while(j >= 0 && arr[j] > key){
//       arr[j+1] = arr[j]
//       j--
//     }
//     arr[j+1] = key
//   }
//   return arr
// }


// let arr = [2,8,9,3,6]
// insert(arr)

// console.log(arr);








// Bubble



// function bubble(arr){
//   for(let i = 0; i<arr.length;i++){
//     for(let j = 0; j<arr.length - i - 1; j++){
//       if(arr[j]>arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }

// let arr = [5,6,4,8,7]

// console.log(bubble(arr));





// Merge 


// function merge(arr){
//   if(arr.length < 2){
//     return arr
//   }
//   let mid = Math.floor(arr.length/2)
//   let leftArr = arr.slice(0,mid)
//   let rightArr = arr.slice(mid)
//   return merge(mergeSort(leftArr),mergeSort(rightArr))
// }


// function mergeSort(leftArr,rightArr){
//   let sortedArr = []
//   while(leftArr.length && rightArr.length){
//     if(leftArr[0] <= rightArr[0]){
//       sortedArr.push(leftArr.shift())
//     }else{
//       sortedArr.push(rightArr.shift())
//     }
//   }
//   return [...sortedArr,...leftArr,...rightArr]
// }

