const test = [4, 5, 6, 3, 2, 1]
// const test = [1, 2]

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let hasChange = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] += arr[j + 1]
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]
                hasChange = true
            }
        }
        if (!hasChange) break
    }
    console.log(arr)
}

const insertSort = arr => {
    if (arr.length <= 1) return;
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        //从后往前找
        for (; j >= 0; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
            } else {
                break;
            }
        }
        arr[j + 1] = temp        //插入数据
    }
    console.log(arr)
}

function selectionSort(arr) {
    if (arr.length < 1) return;
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log(arr)
}

// bubbleSort(test)
// insertSort(test)
selectionSort(test)