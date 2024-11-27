/* 876. Middle of the Linked List
Solved
Easy
Topics
Companies
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100 */

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

  getLength(): number {
    return this.length;
  }
}

function getLengthList(head: ListNode | null): number {
  let length = 0;
  let curNode = head;
  while (curNode) {
    curNode = curNode.next;
    length++;
  }
  return length;
}

export function middleNode(head: ListNode | null): ListNode | null {
  let curNode = head;
  let middleKey = getLengthList(curNode) / 2;

  let traverserIndex = 0;
  while (curNode) {
    if (traverserIndex == Math.floor(middleKey)) {
      console.log(curNode.value);
    }
    curNode = curNode.next;
    traverserIndex++;
  }
  return curNode;
}

/* 
main.ts

import { SinglyLinkedList } from "./LeetCode_GeekForGeek/LinkedList/LC_876";
import { middleNode } from "./LeetCode_GeekForGeek/LinkedList/LC_876";
// import { ListNode } from "./LeetCode_GeekForGeek/LinkedList/LC_876";

const getNode = new SinglyLinkedList();
getNode.append(1);
getNode.append(2);
getNode.append(3);
getNode.append(4);
getNode.append(5);
getNode.append(6);

middleNode(getNode.head);

*/
