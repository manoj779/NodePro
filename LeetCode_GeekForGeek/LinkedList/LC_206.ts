/* 

206. Reverse Linked List
Easy
Topics
Companies
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: number): void {
    const newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  printList(head: ListNode | null): void {
    let current = head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let PrevNode: ListNode | null = null;
  let nextNode: ListNode | null = null;
  let curNode = head;

  while (curNode != null) {
    nextNode = curNode.next;
    curNode.next = PrevNode;
    PrevNode = curNode;
    curNode = nextNode;
  }
  head = PrevNode;
  return head;
}

/* 
main.ts
import { reverseList } from "./LeetCode_GeekForGeek/LinkedList/LC_206";
import { SinglyLinkedList } from "./LeetCode_GeekForGeek/LinkedList/LC_206";

const getNode = new SinglyLinkedList();

getNode.append(1);
getNode.append(2);
getNode.append(3);
getNode.append(4);

getNode.printList(reverseList(getNode.head));

*/
