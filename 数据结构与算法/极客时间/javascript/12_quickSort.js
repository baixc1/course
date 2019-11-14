const arr = [8, 10, 2, 3, 6, 1, 5]
const arr1 = [8, 1, 2, 3, 6, 1, 11, 5]
const arr2 = [8, 4, 2, 3, 6, 1, 5, 0]
const arr3 = [8, 9, 2, 3, 16, 1, 25]

function quick_sort(arr) {
    quick_sort_c(arr, 0, arr.length - 1)
    console.log(arr)
}

function quick_sort_c(arr, p, r) {
    if (p >= r) return
    let q = partition(arr, p, r)
    // console.log(p, q, r)
    quick_sort_c(arr, p, q - 1)
    quick_sort_c(arr, q + 1, r)
}

function partition(arr, p, r) {
    let pivot = arr[r]
    let i = p
    let temp
    for (let j = p; j < r; j++) {
        if (arr[j] < pivot) {
            temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i++
        }
    }
    temp = arr[i]
    arr[i] = arr[r]
    arr[r] = temp
    // console.log(i, arr)
    return i
}

quick_sort(arr)
quick_sort(arr1)
quick_sort(arr2)
quick_sort(arr3)