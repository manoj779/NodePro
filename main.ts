import { get } from "http";
import { CreteListNodes } from "./LeetCode_GeekForGeek/LinkedList/LC_83";
import { deleteDuplicates } from "./LeetCode_GeekForGeek/LinkedList/LC_83";
// import { ListNode } from "./LeetCode_GeekForGeek/LinkedList/LC_876";

const getNode = new CreteListNodes();
getNode.append(0);
getNode.append(0);
getNode.append(0);
getNode.append(0);
getNode.append(0);
getNode.append(0);
getNode.append(0);
getNode.append(0);

let head = deleteDuplicates(getNode.head);
getNode.getNode(head);
