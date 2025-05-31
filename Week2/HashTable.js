// Implementation of Basic Hash Table


// class SimpleHash{
//     constructor(size){
//         this.size = size
//         this.table = new Array(size)
//     }

//     hash(key){
//         let hash = 0
//         for(let char of key){
//             hash += char.charCodeAt(0)
//         }
//         return hash % this.size
//     }

//     set(key, value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
//         console.log(this.table)
//     }
// }

// const sh = new SimpleHash(10)

// sh.set("name", "Jenitta")
// sh.set("mane", "collision")
// sh.set("age", "22")
// sh.display()






// Hash Table with Collision Handling----- Chaining


// class HashChaining{
//     constructor(size){
//         this.size = size
//         this.table = new Array(size)
//     }

//     hash(key){
//         let hash = 0
//         for(let char of key){
//             hash += char.charCodeAt(0)
//         }
//         return hash % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] = []
//         }

//         for(let pair of this.table[index]){
//             if(pair[0] === key){
//                 pair[1] = value
//                 return
//             }
//         }

//         this.table[index].push([key,value])
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             for(let pair of bucket){
//                 if(pair[0] === key){
//                     return pair[1]
//                 }
//             }
//         }
//         return undefined
//     }

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             this.table[index] = bucket.filter(pair => pair[0] !== key)
//         }
//     }

//     display(){
//         this.table.forEach((bucket,index) =>{
//             if(bucket){
//                 console.log(index,bucket);
//             }
//         })
//     }
// }


// const chaining = new HashChaining(10)


// chaining.set("name", "Jeynita")
// chaining.set("mane", "This won't overwrite");
// chaining.display()













// Hash Table with Collision Handling----- Open Addressing(Linear Probing)


// class LinearProbing{
//     constructor(size){
//         this.size = size
//         this.table = new Array(size)
//         this.keys = new Array(size)
//     }

//     hash(key){
//         let hash = 0
//         for(let char of key){
//             hash += char.charCodeAt(0)
//         }
//         return hash % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         let start = index

//         while(this.table[index] !== undefined && this.keys[index] !== key){
//             index = (index + 1) % this.size
//             if(index === start) throw new Error("Hash table is full")
//         }

//         this.table[index] = value
//         this.keys[index] = key
//     }

//     get(key){
//         let index = this.hash(key)
//         let start = index

//         while(this.keys[index] !== undefined){
//             if(this.keys[index] === key) return this.table[index]
//             index = (index + 1) % this.size
//             if(index === start) break
//         }

//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         let start = index

//         while(this.keys[index] !== undefined){
//             if(this.keys[index] === key){
//                 this.keys[index] = undefined
//                 this.table[index] = undefined
//                 return
//             }
//             index = (index + 1) % this.size
//             if(index === start) break
//         }
//     }

//     display(){
//         for(let i = 0; i < this.size; i++){
//             console.log(`${i} : ${this.keys[i]} => ${this.table[i]}`);
//         }
//     }
// }


// const lp = new LinearProbing()

// lp.set("name", "Jeynita");
// lp.set("mane", "Resolved by probing");
// lp.display()




// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................



// HASH TABLE- LINEAR PROBING


// class Linear{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hash = 0
//         for(let char of key){
//             hash += char.charCodeAt(0)
//         }
//         return hash % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         while(this.table[index] && this.table[index][0]!==key){
//             index = (index+1)%this.size
//         }
//         this.table[index] = [key,value]
//     }

//     get(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 return this.table[index][1]
//             }
//             index = (index+1)%this.size
//         }
//         return undefined
//     }

//     remove(key){
//         let index = this.hash(key)
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 this.table[index] = null
//                 return true
//             }
//             index = (index+1)%this.size
//         }
//         return false
//     }

//     display(){
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(`Index ${i} : ${this.table[i][0]} => ${this.table[i][1]}`)
//             }else{
//                 console.log(`Index ${i} : Empty`);
//             }
//         }
//     }
// }


// const lp = new Linear(10)


// lp.set("name","jenitta")
// lp.set("age",22)
// lp.set("place","kerala")
// lp.set("mane","bijeesh")


// console.log(lp.get("age"));

// console.log(lp.remove("name"));


// lp.display()


// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................



// HASH TABLE- CHAINING


// class Chaining{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hash = 0
//         for(let char of key){
//             hash += char.charCodeAt(0)
//         }
//         return hash % this.size
//     }

//     set(key,value){
//         let index = this.hash(key)
//         if(!this.table[index]){
//             this.table[index] = []
//         }
//         for(let i=0;i<this.table[index].length;i++){
//             if(this.table[index][i][0]===key){
//                 this.table[index][i][1] = value
//                 return
//             }
//         }
//         this.table[index].push([key,value])
//     }

//     get(key){
//         let 
//     }
// }






// Count Occurrences of Characters


// function occurrence(str){
//     let hash = {}
//     for(let char of str){
//         hash[char] = (hash[char] || 0) + 1
//     }
//     return hash
// }


// console.log(occurrence("hello"));





//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................



// Remove Duplicate from an Array


// function remove(arr){
//     let hash = {}
//     let result = []
    
//     for(let val of arr){
//         if(!hash[val]){
//             hash[val] = true
//             result.push(val)
//         }
//     }
//     return result
// }


// let arr = [2,4,6,1,4,6,2]

// console.log(remove(arr))




// Remove Duplicates from a String


// function string(str){
//     let hash = {}
//     let result = ''
    
//     for(let char of str){
//         if(!hash[char]){
//             hash[char] = true
//             result += char
//         }
//     }
//     return result
// }


// let str = "amjcma"

// console.log(string(str))



// Count the occurance of letters in a string


// function occu(str){
//     let hash = {}
//     for(let char of str){
//         hash[char] = (hash[char] || 0) + 1
//     }
//     return hash
// }

// let str = "jenitta"

// console.log(occu(str))




// Two sum using hash table




// function sum(arr,t){
//     let hash = {}
//     for(let i = 0; i<arr.length;i++){
//         let num = arr[i]
//         let key = t - num
        
//         if(hash[key] !== undefined){
//             return [hash[key],i]
//         }
        
//         hash[num] = i
//     }
//     return []
// }

// let arr = [1,4,6,6,8,8,2,3,5], t = 14

// console.log(sum(arr,t))