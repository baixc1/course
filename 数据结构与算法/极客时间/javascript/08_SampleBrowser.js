const stack = require('./08_StackBasedOnLinkedList')

class SampleBrowser {
    constructor() {
        this.normalStack = new stack.StackBasedLinkedList()
        this.backStack = new stack.StackBasedLinkedList()
    }
    // 正常浏览页面
    pushNormal(name) {
        this.normalStack.push(name)
        this.backStack.clear()
        // this.displayAllStack()
    }
    // 后退
    back() {
        const value = this.normalStack.pop()
        if (value !== -1) {
            this.backStack.push(value)
            // this.displayAllStack()
        } else {
            console.log('无法后退')
        }
    }
    // 前进
    front() {
        const value = this.backStack.pop()
        if (value !== -1) {
            this.normalStack.push(value)
            // this.displayAllStack()
        } else {
            console.log('无法前进')
        }
    }
    // 打印栈内数据
    displayAllStack() {
        console.log('---后退页面---')
        this.backStack.display()
        console.log('---浏览页面---')
        this.normalStack.display()
    }
}

const browser = new SampleBrowser()

browser.pushNormal('A')
browser.pushNormal('B')
browser.pushNormal('C')
browser.pushNormal('D')
browser.pushNormal('E')

browser.back()
browser.back()
browser.back()
browser.back()
browser.pushNormal('F')

browser.front()


browser.back()

browser.displayAllStack()