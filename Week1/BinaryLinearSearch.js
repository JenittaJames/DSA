

// Search index position (Binary search)

function binarySearch(arr,target){
    let left = 0, right = arr.length-1

    while(left<=right){
        const mid = Math.floor((left + right)/2)
        if(arr[mid] === target){
            return mid
        }else if(arr[mid]<target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return left
}

let arr = [10,20,30,40,50,60,70,80,90], target = 60

console.log(binarySearch(arr,target))


// Find the first and last position of the element








