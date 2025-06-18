// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isEndOfWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }


//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char] = new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isEndOfWord = true
//     }


//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return node.isEndOfWord
//     }


//     startsWith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node = node.children[char]
//         }
//         return true
//     }
// }



// const trie = new Trie()


// trie.insert("hello")
// trie.insert("hey")
// trie.insert("he")
// trie.insert("heat")


// console.log(trie.search("hey"));
// console.log(trie.search("hero"));


// console.log(trie.startsWith("hea"));
// console.log(trie.startsWith("he"));





// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................









// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.endOfWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.endOfWord = true;
//     }

//     search(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) return false;
//             node = node.children[char];
//         }
//         return node.endOfWord;
//     }
// }


// const trie = new Trie();
// trie.insert("cat");
// trie.insert("can");
// console.log("Search 'cat':", trie.search("cat"));
// console.log("Search 'cap':", trie.search("cap"));






// Trie.prototype.startsWith = function(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//         if (!node.children[char]) return false;
//         node = node.children[char];
//     }
//     return true;
// };


// console.log("Starts with 'ca':", trie.startsWith("ca"));
// console.log("Starts with 'co':", trie.startsWith("co")); 









// Trie.prototype.countWords = function(node = this.root) {
//     let count = node.endOfWord ? 1 : 0;
//     for (let char in node.children) {
//         count += this.countWords(node.children[char]);
//     }
//     return count;
// };


// console.log("Total words in Trie:", trie.countWords()); 