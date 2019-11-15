function findKthLargest(arr, k) {
    const len = arr.length
    if (k > len) {
        return -1
    }
    let start = 0
    let end = len - 1
    let p = parition(arr, start, end)

    while (p + 1 != k) {
        if (p + 1 > k) {
            end = p - 1
        } else {
            start = p + 1
        }
        p = parition(arr, start, end)
    }
    console.log(arr[p])
    return arr[p]
}

function parition(arr, i, end) {//start指向小于pivot数的末尾       
    let pivot = arr[end]
    for (let j = i; j < end; j++) {
        if (arr[j] > pivot) {       //从大->小
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, end)
    return i
}

function swap(arr, i, j) {
    if (i != j) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
}

const arr = [1, 8, 0, 2, 3, 9, 7, 4, 5, 6]

findKthLargest(arr, 1)
findKthLargest(arr, 2)
findKthLargest(arr, 3)
findKthLargest(arr, 4)
findKthLargest(arr, 5)