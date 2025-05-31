


// finding the sum of the n elements in an array

let arr = [1,2,3,4,5];

function reversal(num){
    let sum = 0;

    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }

    return sum;
}


console.log(reversal(arr));


// finding the frequency of elements in an array

let data = [1,2,3,4,5];

function frequencyFinder(data){
    let obj = {};

    for(let val of data){
        obj[val] = (obj[val] || 0) + 1;
    }

    return obj;
}

console.log(frequencyFinder(data));


// find maximum element

let arr1 = [1,2,5,9,3,3,4,5]

function max(arr1){
    let max= arr1[0]

    for(let i = 0; i<arr1.length; i++){
        if(max<arr1[i]){
            max = arr1[i]
        }
    }
    return max
}


console.log(max(arr1))


// check if an array contains duplicate

let ar1 = [3,5,7,9,6,7]

function duplicate(ar1){
    for(let i = 0;i<ar1.length;i++){
        if(ar1.indexOf(ar1[i])!==ar1.lastIndexOf(ar1[i])){
            return true
        }
        
    }
    return false
}


console.log(duplicate(ar1));