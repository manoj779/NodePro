/* 
25. Reverse Nodes in k-Group
Solved
Hard
Topics
Companies
Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 

Follow-up: Can you solve the problem in O(1) extra memory space?

*/

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class CreateLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addNode(value: number): void {
    const newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
  getList(head: ListNode | null) {
    let curNode = head;
    while (curNode) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}

export function reverseList(head: ListNode | null, k: number): ListNode | null {
  let PrevNode: ListNode | null = null;
  let nextNode: ListNode | null = null;
  let curNode = head;
  let kthNode = k;
  if (head == null) {
    return null;
  }
  while (curNode && kthNode > 0) {
    nextNode = curNode.next;
    curNode.next = PrevNode;
    PrevNode = curNode;
    curNode = nextNode;
    kthNode--;
  }
  if (curNode == null && kthNode > 0) {
    curNode = PrevNode;
    nextNode = null;
    PrevNode = null;
    while (curNode && kthNode > 0) {
      nextNode = curNode.next;
      curNode.next = PrevNode;
      PrevNode = curNode;
      curNode = nextNode;
    }
  }
  if (kthNode > 0) {
    return PrevNode;
  } else head!.next = reverseList(curNode, k);
  return PrevNode;
}

/* 
import { ListNode } from "./LeetCode_GeekForGeek/LinkedList/LC_25";
import { CreateLinkedList } from "./LeetCode_GeekForGeek/LinkedList/LC_25";
import { reverseList } from "./LeetCode_GeekForGeek/LinkedList/LC_25";

const listNode = new CreateLinkedList();
listNode.addNode(1);
listNode.addNode(2);
listNode.addNode(3);
listNode.addNode(4);
listNode.addNode(5);

//listNode.getList(listNode.head);

let revList = reverseList(listNode.head, 3);

listNode.getList(revList);

*/
