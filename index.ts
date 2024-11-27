import { SinglyLinkedList } from "./LeetCode_GeekForGeek/LinkedList/singlyLinkedList";

const list = new SinglyLinkedList<number>();

list.append(5);
list.append(7);
list.append(10);

list.printList();
console.log("Length of the List: ", list.getLength());
