

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }


    isEmpty(){
        return this.size === 0
    }


    getSize(){
        return this.size
    }


    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }


    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i<index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }


    removeFrom(index){
        if(index < 0 || index > this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0; i<index-1 ; i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }


    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                const removedValue = prev.next
                prev.next = removedValue.next
                this.size--
                return value
            }
            return null
        }
    }


    search(value){
        if(this.isEmpty()){
            return -1
        }else{
            let i = 0
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    return i
                }
                curr = curr.next
                i++
            }
            return -1
        }
    }


    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }


    print(){
        if(this.isEmpty()){
            console.log("The list is empty...")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}


const list = new LinkedList()


console.log(list.isEmpty());
console.log(list.getSize());
list.print()



list.prepend(10)
list.prepend(20)
list.prepend(30)
list.prepend(40)
list.print()


list.append(5)
// list.append(60)
// list.append(70)
// list.append(80)
// list.print()


list.insert(15,3)
list.insert(25,2)
list.insert(35,1)
list.print()

// console.log("List size = ",list.getSize());


// console.log(list.removeFrom(5));
// console.log("List size = ",list.getSize());


// console.log(list.removeFrom(3));
// console.log("List size = ",list.getSize());


// list.print()


// console.log(list.removeValue(35));
// console.log("List size = ",list.getSize());


// console.log(list.removeValue(5));
// console.log("List size = ",list.getSize());



console.log(list.search(50))

console.log(list.search(30))

