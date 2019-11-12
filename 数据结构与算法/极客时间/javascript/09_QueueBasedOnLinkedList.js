class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class QueueBasedOnLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(value) {
        if (this.head === null) {
            this.tail = this.head = new Node(value)
        } else {
            this.tail.next = new Node(value)
            this.tail = this.tail.next
        }
    }

    dequeue() {
        if (this.head !== null) {
            const value = this.head.element
            this.head = this.head.next
            return value
        } else {
            return -1
        }
    }

    display() {
        let temp = this.head
        let str = ''
        while (temp) {
            str += temp.element + '->'
            temp = temp.next
        }
        console.log(str ? str.slice(0, -2) : str)
    }
}

const newQueue = new QueueBasedOnLinkedList()

newQueue.display()
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)

newQueue.display()
console.log(newQueue.dequeue())

newQueue.display()