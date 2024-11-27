/* 

160. Intersection of Two Linked Lists
Easy
Topics
Companies
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.

 

Example 1:


Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
Example 2:


Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
Example 3:


Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.
 

Constraints:

The number of nodes of listA is in the m.
The number of nodes of listB is in the n.
1 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
intersectVal is 0 if listA and listB do not intersect.
intersectVal == listA[skipA] == listB[skipB] if listA and listB intersect.
 

Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?

*/

export class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class CreateSinglyLinkedList {
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
}

function getLengthListNode(nodeLength: ListNode | null): number {
  let currentNode = nodeLength;
  let length = 0;
  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  return length;
}

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): number | null {
  if (!headA || !headB) {
    return null; // No intersection if either list is empty
  }
  let headALen = getLengthListNode(headA);
  let headBLen = getLengthListNode(headB);

  //Basically here we negate the leng of both list length until its come to equal compare to lesser one list
  // exaple listA has 8 and listB has 6 => 8-6 = 2
  // Higher list length: 8 - 2 so we jump to 3rd node of listA

  while (headALen > headBLen) {
    headALen--;
    headA = headA!.next;
  }

  while (headBLen > headALen) {
    headBLen--;
    headB = headB!.next;
    // console.log("Enterd..!", headB?.value);
  }

  while (headA !== headB) {
    headA = headA!.next;
    headB = headB!.next;
    // console.log("headA value: ", headA?.value);
    // console.log("headB value: ", headB?.value);
  }

  return headA ? headA.value : null;
}

/* 
main.ts
import { CreateSinglyLinkedList } from "./LeetCode_GeekForGeek/LinkedList/LC_160";
import { getIntersectionNode } from "./LeetCode_GeekForGeek/LinkedList/LC_160";
import { ListNode } from "./LeetCode_GeekForGeek/LinkedList/LC_160";

const getNodeA = new CreateSinglyLinkedList();
const commonNode = new ListNode(8);
commonNode.next = new ListNode(4);
commonNode.next.next = new ListNode(5);

getNodeA.append(4);
getNodeA.append(1);
getNodeA.append(8);
getNodeA.append(4);
getNodeA.append(5);
getNodeA.tail!.next = commonNode; */

/* getNodeA.append(1);
getNodeA.append(9);
getNodeA.append(1);
getNodeA.append(2);
getNodeA.append(4); */

/* const getNodeB = new CreateSinglyLinkedList();
getNodeB.append(5);
getNodeB.append(6);
getNodeB.append(1);
getNodeB.append(8);
getNodeB.append(4);
getNodeB.append(5);
getNodeB.tail!.next = commonNode; */

/* getNodeB.append(3);
getNodeB.append(2);
getNodeB.append(4); */

/*  console.log(getIntersectionNode(getNodeA.head, getNodeB.head)); */
