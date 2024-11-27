/* 1290. Convert Binary Number in a Linked List to Integer


Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
 

Constraints:

The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1.

 */

class ListNode {
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

  append(value: number) {
    const newNode = new ListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.length++;
  }
}

export function getDecimalValue(head: ListNode | null): number {
  let current = head;
  let total = 0;
  while (current) {
    total = total * 2 + current.value;
    current = current.next;
  }

  return total;
}

/* 

main.ts =>

import { CreateLinkedList } from "./LeetCode_GeekForGeek/LinkedList/LC_1290";
import { getDecimalValue } from "./LeetCode_GeekForGeek/LinkedList/LC_1290";

const getNode = new CreateLinkedList();

getNode.append(1);
getNode.append(0);
getNode.append(1);
getNode.append(1);

console.log(getDecimalValue(getNode.head));


*/
