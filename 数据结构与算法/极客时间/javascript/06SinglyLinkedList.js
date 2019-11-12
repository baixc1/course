/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个结点
 * 5) 求链表的中间结点
 *
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }
    // 根据value查找节点
    findByValue(item) {
        let currentNode = this.head.next
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }

    // 查找前一个
    findPrev(item) {
        let currentNode = this.head
        while (currentNode.next !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }
        if (currentNode.next === null) {
            return -1
        }
        return currentNode
    }

    // 根据index查找节点，下标从0开始
    findByIndex(index) {
        let currentNode = this.head.next
        let pos = 0
        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }

    // 向链表末尾追加节点
    append(newElement) {
        const newNode = new Node(newElement)
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = newNode
    }

    // 指定元素向后插入
    insert(newElement, element) {
        const currentNode = this.findByValue(element)
        if (currentNode === -1) {
            console.log('未找到插入位置')
            return
        }
        const newNode = new Node(newElement)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }

    // 根据值删除
    remove(item) {
        const prevNode = this.findPrev(item)
        if (prevNode === -1) {
            console.log('未找到元素')
            return
        }
        prevNode.next = prevNode.next.next
    }

    // 遍历显示所有节点
    display() {
        let currentNode = this.head.next // 忽略头指针的值
        let str = ''
        while (currentNode !== null) {
            if (str) str += ' -> '
            str += currentNode.element
            currentNode = currentNode.next
        }
        console.log(str)
    }
}


// Test
const LList = new LinkedList()

LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao')

// console.log(LList.head.next.next)

LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入

LList.display()

LList.remove('curry')
LList.display()

LList.findByValue('chen')

LList.findByIndex(2)