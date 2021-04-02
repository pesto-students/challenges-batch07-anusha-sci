import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
    this.listLength = 0;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.listLength += 1;
  }

  append(value) {
    const node = new LinkListNode(value);
    if (!this.head) {
      this.head = node;
      this.listLength += 1;
      return;
    }
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = node;
    this.listLength += 1;
  }

  delete(value) {
    let tempNode = this.head;
    if (tempNode && tempNode.value === value) {
      this.head = null;
      this.listLength -= 1;
      return true;
    }
    while (tempNode.next && tempNode.next.value !== value) {
      tempNode = tempNode.next;
    }
    if (tempNode.next) {
      tempNode.next = tempNode.next.next;
      this.listLength -= 1;
      return true;
    }
    return false;
  }

  traverse() {
    let tempNode = this.head;
    while (tempNode) {
      tempNode = tempNode.next;
    }
  }

  contains(value) {
    let tempNode = this.head;
    while (tempNode) {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  }

  length() {
    return this.listLength;
  }
}
