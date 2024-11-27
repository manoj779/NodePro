/* 
83. Remove Duplicates from Sorted List
Easy
Topics
Companies
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class CreteListNodes {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: number): void {
    let newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else this.head = newNode;
    this.tail = newNode;
    this.length++;
  }

  getNode(head: ListNode | null) {
    let curNode = head;
    while (curNode) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  head = sortLinkedList(head);
  let curNode = head;
  while (curNode !== null && curNode.next !== null) {
    if (curNode.value === curNode.next.value) {
      curNode.next = curNode.next.next;
    } else curNode = curNode.next;
  }
  return head;
}

function sortLinkedList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }

  let sorted = false;

  while (!sorted) {
    sorted = true;
    let current = head;

    while (current !== null && current.next !== null) {
      if (current.value > current.next.value) {
        // Swap the values
        const temp = current.value;
        current.value = current.next.value;
        current.next.value = temp;
        sorted = false;
      }
      current = current.next;
    }
  }

  return head;
}

/* 

main.js
import { get } from "http";
import { CreteListNodes } from "./LeetCode_GeekForGeek/LinkedList/LC_83";
import { deleteDuplicates } from "./LeetCode_GeekForGeek/LinkedList/LC_83";
// import { ListNode } from "./LeetCode_GeekForGeek/LinkedList/LC_876";

const getNode = new CreteListNodes();
getNode.append(6);
getNode.append(5);
getNode.append(3);
getNode.append(4);
getNode.append(4);
getNode.append(1);
getNode.append(2);
getNode.append(2);

let head = deleteDuplicates(getNode.head);
getNode.getNode(head);

*/
