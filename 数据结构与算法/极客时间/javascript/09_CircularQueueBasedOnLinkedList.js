
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class CircularQueue {
    constructor() {
        this.head = null
        this.tail = null
    }

    enqueue(value) {
        if (this.head === null) {
            this.tail = this.head = new Node(value)
            this.tail.next = this.head
        } else {
            let temp = new Node(value)
            temp.next = this.head
            this.tail.next = temp
            this.tail = this.tail.next
        }
    }

    dequeue() {
        if (this.head == null) return -1

        if (this.head === this.tail) {
            const value = this.head.element
            this.head = null
            return value
        } else {
            const value = this.head.element
            this.head = this.head.next
            this.tail.next = this.head
            return value
        }
    }

    display() {
        let res = 0
        while (res != -1) {
            res = this.dequeue()
            console.log(res)
        }
    }
}

const newQueue = new CircularQueue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.display()
newQueue.enqueue(4)

newQueue.display()

// console.log(newQueue.head === newQueue.head.next)