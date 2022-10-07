
var addTwoNumbers = function(l1, l2) {
    let resNode = new ListNode(0);
    let res = resNode;
    let flag = 0;
    while(l1 || l2 || flag) {
        let val1 = l1?l1.val:0;
        let val2 = l2?l2.val:0;
        let sum = val1 + val2 + flag;
        flag = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        if(l1) {
            l1 = l1.next;
        }
        if(l2) {
            l2 = l2.next;
        }
        resNode.next = new ListNode(sum);
        resNode = resNode.next;
    }
    return res.next;
};