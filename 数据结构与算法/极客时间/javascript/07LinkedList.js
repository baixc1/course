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
        let currentNode = this.head
        while (currentNode !== null && currentNode.element !== item) {
            currentNode = currentNode.next
        }
        return currentNode === null ? -1 : currentNode
    }
    // 根据index查找节点 
    findByIndex(index) {
        let currentNode = this.head
        let pos = 0
        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }
        return currentNode === null ? -1 : currentNode
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
    // 根据值删除
    remove(item) {
        const desNode = this.findByValue(item)
        if (desNode === -1) {
            console.log('未找到元素')
            return
        }
        const prevNode = this.findPrev(item)
        prevNode.next = desNode.next
    }
    // 遍历显示所有节点
    display() {
        console.log(this)
        let currentNode = this.head.next
        let str = ''
        if (this.checkCircle()) return;
        while (currentNode !== null) {
            if (str) str += ' -> '
            str += currentNode.element
            currentNode = currentNode.next
        }
        console.log(str)
    }

    //链表头部后插入，反转单链表
    reverseList() {
        const root = new Node('head')
        let currentNode = this.head.next
        while (currentNode !== null) {
            //类似：a=1,b=2;
            //a+=b;b=a-b;a-=b;
            const next = currentNode.next       //保存后一项
            currentNode.next = root.next        //临时节点关联第一项（新增）
            root.next = currentNode             //head关联临时节点
            currentNode = next                  //指针后移

            //或（空间复杂度多O(1)）
            // const next = currentNode.next   //后一项
            // const tem = root.next         //拿出来
            // root.next = currentNode       //连接
            // currentNode.next = tem        //连接
            // currentNode = next
        }
        this.head = root
    }

    //环验证
    checkCircle() {
        let fast = this.head.next
        let slow = this.head
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            slow = slow.next
            if (slow === fast) return slow;
        }
        return false
    }

    removeByIndexFromEnd(n) {
        let a = this.head;      //双指针
        let b = this.head;      //双指针
        for (let i = 0; i < n; i++) {   //指针a向后移动n位
            if (a.next) {
                a = a.next
            } else {
                return this.head    //不够位，无删除
            }
        }
        while (a.next) {
            a = a.next
            b = b.next
        }
        b.next = b.next.next
        return this.head
    }

    findMiddleNode() {
        let fast, slow
        fast = slow = this.head.next
        while (fast && fast.next) {
            fast = fast.next.next
            slow = slow.next
        }
        return slow.element
    }
}

const mergeSortedLists = (listA, listB) => {
    if (!listA) {
        return listB
    }
    if (!listB) {
        return listA
    }

    let a = listA
    let b = listB
    let resultList
    if (a.element < b.element) {
        resultList = a
        a = a.next
    } else {
        resultList = b
        b = b.next
    }
    let currentNode = resultList
    while (a !== null && b !== null) {
        if (a.element < b.element) {
            currentNode.next = a
            a = a.next
        } else {
            currentNode.next = b
            b = b.next
        }
        currentNode = currentNode.next
    }

    if (a != null) {
        currentNode.next = a
    } else {
        currentNode.next = b
    }
    let res = new LinkedList()
    res.head.next = resultList
    return res
}

const sortedList1 = new LinkedList()
sortedList1.insert(9, 'head')
sortedList1.insert(8, 'head')
sortedList1.insert(7, 'head')
sortedList1.insert(6, 'head')

// sortedList1.display()

// sortedList1.reverseList()
// sortedList1.display()

// sortedList1.findByIndex(3).next = sortedList1.findByIndex(0)
// sortedList1.display()


// const sortedList2 = new LinkedList()
// sortedList2.insert(19, 'head')
// sortedList2.insert(18, 'head')
// sortedList2.insert(7, 'head')
// sortedList2.insert(5, 'head')

// let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
// sortedList.display()

// sortedList1.display()

// sortedList1.removeByIndexFromEnd(3)

sortedList1.display()

console.log(sortedList1.findMiddleNode())