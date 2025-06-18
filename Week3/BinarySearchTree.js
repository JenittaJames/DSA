// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }



//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }



//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left, value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }



//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }

//     levelOrder(){
//         const queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }


//     delete(value){
//         this.root = this.deleteNode(this.root, value)
//     }

//     deleteNode(root,value){
//         if(root === null){
//             return root
//         }
//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && !root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }


// }


// const bst = new BinarySearchTree()


// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)


// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,20));


// bst.preOrder()
// bst.inOrder()
// bst.postOrder()
// bst.levelOrder()


// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

// bst.delete(10)
// bst.levelOrder()




// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................



// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }


// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }


//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }


//     search(root,value){
//         if(!root){
//             return false
//         }else{
//             if(root.value === value){
//                 return true
//             }else if(value < root.value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }


//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }



//     levelOrder(){
//         let queue = []
//         queue.push(this.root)
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }


//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }


//     delete(value){
//         this.node = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root === null){
//             return root
//         }
//         if(value < root.value){
//             root.left = this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right = this.deleteNode(root.right,value)
//         }else{
//             if(!root.left && ! root.right){
//                 return null
//             }
//             if(!root.left){
//                 return root.right
//             }else if(!root.right){
//                 return root.left
//             }
//             root.value = this.min(root.right)
//             root.right = this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }



// const bst = new BinarySearchTree()


// console.log(bst.isEmpty());

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)


// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,5));
// console.log(bst.search(bst.root,1));


// // bst.preOrder(bst.root)
// // bst.inOrder(bst.root)
// // bst.postOrder(bst.root)

// bst.levelOrder()


// console.log("min::::",bst.min(bst.root));
// console.log(bst.max(bst.root));


// bst.delete(10)
// bst.levelOrder()





// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................







// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     insert(value) {
//         const newNode = new Node(value);
//         if (!this.root) return (this.root = newNode);
//         let curr = this.root;
//         while (true) {
//             if (value < curr.value) {
//                 if (!curr.left) return (curr.left = newNode);
//                 curr = curr.left;
//             } else {
//                 if (!curr.right) return (curr.right = newNode);
//                 curr = curr.right;
//             }
//         }
//     }

//     contains(value) {
//         let curr = this.root;
//         while (curr) {
//             if (value === curr.value) return true;
//             curr = value < curr.value ? curr.left : curr.right;
//         }
//         return false;
//     }

//     deleteNode(root, key) {
//         if (!root) return null;
//         if (key < root.value) root.left = this.deleteNode(root.left, key);
//         else if (key > root.value) root.right = this.deleteNode(root.right, key);
//         else {
//             if (!root.left) return root.right;
//             if (!root.right) return root.left;
//             let minLargerNode = root.right;
//             while (minLargerNode.left) minLargerNode = minLargerNode.left;
//             root.value = minLargerNode.value;
//             root.right = this.deleteNode(root.right, minLargerNode.value);
//         }
//         return root;
//     }

//     preorder(node) {
//         if (!node) return [];
//         return [node.value, ...this.preorder(node.left), ...this.preorder(node.right)];
//     }

//     inorder(node) {
//         if (!node) return [];
//         return [...this.inorder(node.left), node.value, ...this.inorder(node.right)];
//     }

//     postorder(node) {
//         if (!node) return [];
//         return [...this.postorder(node.left), ...this.postorder(node.right), node.value];
//     }
// }


// const bst = new BST();
// [10, 5, 15, 2, 7, 12, 20].forEach(val => bst.insert(val));
// console.log("Inorder:", bst.inorder(bst.root));
// console.log("Preorder:", bst.preorder(bst.root));
// console.log("Postorder:", bst.postorder(bst.root));
// console.log("Contains 7?", bst.contains(7));
// bst.root = bst.deleteNode(bst.root, 10);
// console.log("Inorder after deleting 10:", bst.inorder(bst.root));








// function findClosestValue(node, target) {
//     let closest = node.value;
//     while (node) {
//         if (Math.abs(node.value - target) < Math.abs(closest - target)) {
//             closest = node.value;
//         }
//         node = target < node.value ? node.left : node.right;
//     }
//     return closest;
// }


// console.log("Closest to 13:", findClosestValue(bst.root, 13));








// function isValidBST(node, min = -Infinity, max = Infinity) {
//     if (!node) return true;
//     if (node.value <= min || node.value >= max) return false;
//     return isValidBST(node.left, min, node.value) && isValidBST(node.right, node.value, max);
// }


// console.log("Is Valid BST?", isValidBST(bst.root)); 