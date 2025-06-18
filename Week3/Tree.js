// class TreeNode{
//     constructor(value){
//         this.value = value
//         this.children = []
//     }

//     addChild(childNode){
//         this.children.push(childNode)
//     }
// }



// const ceo = new TreeNode("CEO")

// const manager1 = new TreeNode("Manager A")
// const manager2 = new TreeNode("Manager B")


// ceo.addChild(manager1)
// ceo.addChild(manager2)


// const developer1 = new TreeNode("Developer A1")
// const developer2 = new TreeNode("Developer A2")

// manager1.addChild(developer1)
// manager1.addChild(developer2)


// const intern = new TreeNode("Intern B1")
// manager2.addChild(intern)






// function printTree(node,indent = ""){
//     console.log(indent + "- " + node.value);
//     for(const child of node.children){
//         printTree(child,indent + " ")
//     }
// }


// function printLevel(node, level = 0){
//     console.log("Level", level, ":", node.value);
//     for(const child of node.children){
//         printLevel(child, level + 1)
//     }
// }



// console.log("Tree structure (Indented view : ");
// printTree(ceo)

// console.log("Tree structure (Level view : ");
// printLevel(ceo)



// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................
// ...................................................................................................................................................................................................



// class Tree{
//     constructor(value){
//         this.value = value
//         this.children = []
//     }

//     addChild(child){
//         this.children.push(child)
//     }
// }


// const ceo = new Tree("CEO")

// const manager1 = new Tree("Manager1")
// const manager2 = new Tree("Manager2")

// ceo.addChild(manager1)
// ceo.addChild(manager2)

// const employee1 = new Tree("Employee1")
// const employee2 = new Tree("Employee2")

// manager1.addChild(employee1)
// manager2.addChild(employee2)


// function printTree(node,indent = ""){
//     console.log(indent + "- " + node.value);
//     for(let child of node.children){
//         printTree(child,indent + " ")
//     }
// }


// function printLevel(node,level = 0){
//     console.log("Level",level + ":" + node.value);
//     for(let child of node.children){
//         printLevel(child,level + 1)
//     }
// }

// console.log("Tree structure(Level)");
// printLevel(ceo)


// console.log("Tree structure(Indent)");
// printTree(ceo)






// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................
// ................................................................................................................................................................................................................................................................................................................................................................................................








// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.children = [];
//     }

//     addChild(childValue) {
//         const child = new TreeNode(childValue);
//         this.children.push(child);
//         return child;
//     }

//     find(value) {
//         if (this.value === value) return this;
//         for (let child of this.children) {
//             const found = child.find(value);
//             if (found) return found;
//         }
//         return null;
//     }
// }


// const root = new TreeNode("A");
// const nodeB = root.addChild("B");
// const nodeC = root.addChild("C");
// nodeB.addChild("D");
// nodeC.addChild("E");

// // console.log(root, null, 2);




// function findDepth(root, target, depth = 0) {
//     if (root.value === target) return depth;
//     for (let child of root.children) {
//         let d = findDepth(child, target, depth + 1);
//         if (d !== -1) return d;
//     }
//     return -1;
// }

// console.log(findDepth(root, "E"));




// function getTreeHeight(node) {
//     if (!node.children.length) return 0;
//     let heights = node.children.map(getTreeHeight);
//     return 1 + Math.max(...heights);
// }


// console.log(getTreeHeight(root));

