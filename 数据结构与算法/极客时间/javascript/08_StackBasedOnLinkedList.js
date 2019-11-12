class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class StackBasedLinkedList {
    constructor() {
        this.top = null
    }
    push(value) {
        const node = new Node(value)
        if (this.top === null) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
    }
    pop() {
        if (this.top === null) {
            return -1
        }
        const value = this.top.element
        this.top = this.top.next
        return value
    }
    clear() {
        this.top = null
    }
    display() {
        let temp = this.top
        while (temp !== null) {
            console.log(temp.element)
            temp = temp.next
        }
    }
}

const newStack = new StackBasedLinkedList()

// newStack.push(1)
// newStack.push(2)
// console.log(newStack.pop())
// console.log(newStack)
newStack.display()

exports.StackBasedLinkedList = StackBasedLinkedList