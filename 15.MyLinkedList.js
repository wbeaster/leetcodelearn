/*
Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

    get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
    addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
    addAtTail(val) : Append a node of value val to the last element of the linked list.
    addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
    deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.

 

Example:

Input:
["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[1],[1]]
Output:
[null,null,null,null,2,null,3]

Explanation:
MyLinkedList linkedList = new MyLinkedList(); // Initialize empty LinkedList
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3

 

Constraints:

    0 <= index,val <= 1000
    Please do not use the built-in LinkedList library.
    At most 2000 calls will be made to get, addAtHead, addAtTail,  addAtIndex and deleteAtIndex.
*/
/**
 * Initialize your data structure here.
 */

class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

 class MyLinkedList 
{
    constructor(head = null) 
    {
        this.head = head;

        this.length = 0;
        if (head != null) this.length = 1;
    }

    /**
     * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) 
    {
        if (index < 0) return -1;
        if (index > this.length-1) return -1;

        let a = this.head;
        for (let i = 0; i < index; i++)
            a = a.next;

        return a.val;        
    }

    /**
     * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) 
    {
        let a = new Node(val);
        a.next = this.head;
        this.head = a;
        this.length++;
    }

    /**
     * Append a node of value val to the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) 
    {
        let a = this.head;
        let b = new Node(val);

        while (a.next != null)
            a = a.next;

        a.next = b;
        this.length++;
    }

    /**
     * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) 
    {
        if (index > this.length) return;
        
        if (index == 0)
        {
            this.addAtHead(val);
            return;
        } 

        if (index == this.length)
        {
            this.addAtTail(val);
            return;
        }
                
        let newNode = new Node(val);
        let a = this.head;

        for (let i = 0; i < index; i++)
        {
            a = a.next;
        }

        newNode.next = a.next;
        a.next = newNode;
        this.length++;        
    }

    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) 
    {
        if (index < 0) return;
        if (index > this.length-1) return;
        
        if (index == 0)
        {
            let b = this.head.next;
            this.head = b;
            this.length--;
            return;
            
        }

        let a = this.head;
        
        for (let i = 0; i < index-1; i++)
            a = a.next;

        let b = a.next;
        let c = b.next;

        a.next = c;
        this.length--;
    }

    vals()
    {
        if (this.length == 0) return;

        let a = this.head;
        
        let string;

        while (a.next != null)
        {
            string = string + ", " + a.val;
            a = a.next;
        }

        string = string + ", " + a.val;

        return string;
    }
}

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */


/*
obj.addAtHead(1)
//console.log('Add ');
console.log(obj);

obj.addAtTail(3);
//console.log('Add at tail ');
console.log(obj);

obj.addAtIndex(1,2)
//console.log('Add at index ');
console.log(obj);

var param_1 = obj.get(1)
//console.log('param_1 ');
console.log(obj);

obj.deleteAtIndex(1)
//console.log('Delete at index ');
console.log(obj);

console.log(obj.get(2));
*/

/*
obj.addAtHead(0);
obj.addAtTail(1);
obj.addAtTail(2);
obj.addAtTail(3);
obj.addAtTail(4);
obj.deleteAtIndex(0);
console.log(JSON.stringify(obj, null, 4));
*/

/*

Input: ["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]

            [[], [7], [2], [1],[3,0], [2], [6], [4],[4], [4],[5,0],[6]]
Output:   [null,null,null,null, null,null,null,null, -1,null, null,null]
Expected: [null,null,null,null, null,null,null,null,  4,null, null,null]
*/

/*
console.log(obj.addAtHead(7));
console.log(obj.addAtHead(2));
console.log(obj.addAtHead(1));
console.log(obj.addAtIndex(3,0)); //<-- here's the problem
console.log(obj.deleteAtIndex(2));
console.log(obj.addAtHead(6));
console.log(obj.addAtTail(4));
console.log(obj.get(4));
console.log(obj.addAtHead(4));
console.log(obj.addAtIndex(5,0));
console.log(obj.addAtHead(6));
*/


let funcs = ["MyLinkedList","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","addAtTail","addAtTail","deleteAtIndex","addAtHead","addAtHead","get","addAtTail","addAtHead","get","addAtTail","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","get","addAtIndex","addAtHead","get","addAtHead","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtIndex","addAtTail","addAtHead","get","addAtTail","deleteAtIndex","addAtIndex","deleteAtIndex","addAtHead","addAtTail","addAtHead","addAtHead","addAtTail","addAtTail","get","get","addAtHead","addAtTail","addAtTail","addAtTail","addAtIndex","get","addAtHead","addAtIndex","addAtHead","addAtTail","addAtTail","addAtIndex","deleteAtIndex","addAtIndex","addAtHead","addAtHead","deleteAtIndex","addAtTail","deleteAtIndex","addAtIndex","addAtTail","addAtHead","get","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","deleteAtIndex","get","get","addAtHead","get","addAtTail","addAtTail","addAtIndex","addAtIndex","addAtHead","addAtTail","addAtTail","get","addAtIndex","addAtHead","deleteAtIndex","addAtTail","get","addAtHead","get","addAtHead","deleteAtIndex","get","addAtTail","addAtTail"]

let vars = [[],[38],[66],[61],[76],[26],[37],[8],[5],[4],[45],[4],[85],[37],[5],[93],[10,23],[21],[52],[15],[47],[12],[6,24],[64],[4],[31],[6],[40],[17],[15],[19,2],[11],[86],[17],[55],[15],[14,95],[22],[66],[95],[8],[47],[23],[39],[30],[27],[0],[99],[45],[4],[9,11],[6],[81],[18,32],[20],[13],[42],[37,91],[36],[10,37],[96],[57],[20],[89],[18],[41,5],[23],[75],[7],[25,51],[48],[46],[29],[85],[82],[6],[38],[14],[1],[12],[42],[42],[83],[13],[14,20],[17,34],[36],[58],[2],[38],[33,59],[37],[15],[64],[56],[0],[40],[92],[63],[35],[62],[32]]

/*
[null,null,null,null,null,null,null,null,null,null,null,61,null,null,61,null,null,null,null,null,null,8,null,null,52,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,-1,95,null,null,null,null,null,95,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,81,null,null,null,null,null,null,null,null,null,6,37,null,55,null,null,null,null,null,null,null,26,null,null,null,null,48,null,26,null,null,23,null,null]
*/

let expected = [null,null,null,null,null,null,null,null,null,null,null,61,null,null,61,null,null,null,null,null,null,85,null,null,37,null,null,null,null,null,null,null,null,23,null,null,null,null,null,null,null,null,null,null,-1,95,null,null,null,null,null,31,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,6,47,null,23,null,null,null,null,null,null,null,93,null,null,null,null,48,null,93,null,null,59,null,null]


var obj = new MyLinkedList();
let output;

for (let i = 0; i < funcs.length; i++)
{
    switch (funcs[i])
    {
        case "MyLinkedList":
            break;
        case "addAtHead":
            output = obj.addAtHead(vars[i]);
            break;
        case "addAtTail":
            output = obj.addAtTail(vars[i]);
            break;
        case "deleteAtIndex":
            output = obj.deleteAtIndex(vars[i]);
            break;
        case "get":
            output = obj.get(vars[i]);
            break;
        case "addAtIndex":
            output = obj.addAtIndex(vars[i][0], vars[i][1]);
            break;
    }

    console.log(`i: ${i}       expected: ${expected[i]} :: ${output} :output`);
    //console.log(obj.vals());

}
