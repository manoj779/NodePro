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
    let newNode = new ListNode(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else this.head = newNode;
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

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head; // Handle edge cases

  let odd = head; // Start of odd-indexed nodes
  let even: ListNode | null = head.next; // Start of even-indexed nodes
  let evenHead = even; // Keep a reference to the head of even-indexed nodes

  while (even && even.next) {
    odd.next = even.next; // Connect odd nodes
    odd = odd.next;

    even.next = odd.next; // Connect even nodes
    even = even.next;
  }

  odd.next = evenHead; // Attach even list after the odd list
  return head; // Return the head of the modified list
}
