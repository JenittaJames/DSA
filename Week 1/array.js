
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