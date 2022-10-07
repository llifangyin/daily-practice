function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var addTwoNumbers = function (l1, l2) {
    function newListNode(arr3){
        let node ;
        var i = arr3.length - 1
        while (i > -1) {
            // 对node初始化赋值
            if(i == arr3.length-1){
                 node = new ListNode(arr3[i])
            }else{
                let next = new ListNode(arr3[i])
                // 找到最后一个赋值
                let current = node
                while(current.next){
                    current = current.next
                }
                current.next = next
            }
            i--
        }
        return node
    }
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
    var arr3 = String(Number(arr1.join('')) + Number(arr2.join(''))).split('')
   return newListNode(arr3)
   
};
var l1 = newListNode([2, 4, 3])
var l2 = newListNode([5, 6, 4])


console.log(addTwoNumbers(l1, l2))