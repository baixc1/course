// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for (; ;) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }

// for (let n of fibonacci()) {
//     if (n > 1000) break;
//     console.log(n);
// }

let arr = [1, 1];

(
    () => {
        fun()
        function fun() {
            let len = arr.length
            let temp = arr[len - 2] + arr[len - 1]
            if (temp <= 1000) {
                arr.push(temp)
                fun()
            }
        }
        console.log(arr)
    }
)()