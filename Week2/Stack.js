// Implementation


// class Stack{
//     constructor(){
//         this.items = []
//     }

//     push(x){
//         this.items.push(x)
//     }

//     pop(){
//         return this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length-1]
//     }

//     isEmpty(){
//         return this.items.length === 0
//     }
// }




// Reverse a string


// function reverse(str){
//     let stack = new Stack()
//     for(let char of str){
//         stack.push(char)
//     }

//     let reversed = ''

//     while(!stack.isEmpty()){
//         reversed += stack.pop()
//     }
//     return reversed
// }


// console.log(reverse("hello worls is the new program"));



// Reversal(in-place)


// function reversal(snt){
//     let stack = []
//     result = ''

//     for(let i = 0; i<= snt.length; i++){
//         let char = snt[i]

//         if(char !== ' ' && i !== snt.length){
//             stack.push(char)
//         }else{
//             while(stack.length > 0){
//                 result += stack.pop()
//             }
//             if(i !== snt.length){
//                 result += ' '
//             }
//         }
//     }
//     return result
// }

// console.log(reversal("hello world"));







//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................
//..........................................................................................................................................................................................................




// Valid Paranthesis


// function para(str){
//     let stack = []
//     let map = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '['
//     }
    
//     for(let char of str){
//         if(char === '(' || char === '{' || char === '['){
//             stack.push(char)
//         }else{
//             if(stack.pop()!==map[char]){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }


// let str = '({})'

// console.log(para(str))



// String reversal


// function reverse(str){
//     let stack = []
//     let result  = ''
    
//     for(let char of str){
//         stack.push(char)
//     }
    
//     while(stack.length>0){
//         result += stack.pop()
//     }
//     return result
// }

// let str = "hello"

// console.log(reverse(str))



// In-Place reversal of String


// function place(str){
//     let stack = []
//     let result = ''
    
//     for(let i=0;i<=str.length;i++){
//         let char = str[i]
        
//         if(char !== " " && i !== str.length){
//             stack.push(char)
//         }else{
//             while(stack.length>0){
//                 result += stack.pop()
//             }
            
//             if(i !== str.length){
//                 result += " "
//             }
//         }
//     }
//     return result
// }

// let str = "hello world"

// console.log(place(str))












