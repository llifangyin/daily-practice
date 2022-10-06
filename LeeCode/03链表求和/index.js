function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    var arr1 = []
    while (l1.next) {
        arr1.push(l1.val)
        l1 = l1.next
    }
    arr1.push(l1.val)
    var arr2 = []
    while (l2.next) {
        arr2.push(l2.val)
        l2 = l2.next
    }
    arr2.push(l2.val)
    console.log(arr1, arr2)
    var arr3 = String(Number(arr1.reverse().join('')) + Number(arr2.reverse().join(''))).split('')
    console.log(arr3) // 807 //708 nodelist
    let node = new ListNode();
    var i = arr3.length - 1
    while (i == 0) {
        if (i == arr3.length - 1) {
            node.val = arr3[i]
            node.next = null
        } else {
            node = node.next
            node.val = arr3[i]
            node.next = null
        }
        i--
    }

    return node
};

var l1 = [2, 4, 3]
var l2 = [5, 6, 4]
addTwoNumbers(l1, l2)