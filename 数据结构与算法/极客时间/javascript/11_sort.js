const test = [4, 5, 6, 3, 2, 1]

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

}

bubbleSort(test)
bubbleSort([])
bubbleSort([2])