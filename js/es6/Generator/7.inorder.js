function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

// 下面生成二叉树
function make(array) {
    // 判断是否为叶节点
    if (array.length == 1) return new Tree(null, array[0], null);
    return new Tree(make(array[0]), array[1], make(array[2]));
}

let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);


function* inorder(t) {
    console.log(t)
    if (t) {
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

var result = [];
for (let node of inorder(tree)) {
    result.push(node);
}

console.log(result)