export class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }

  push(value) {
    if (!this.head) {
      this.head = new LinkedNode(value, null);
      this.tail = this.head;
    } else {
      let newNode = new LinkedNode(value, this.tail);
      this.tail.link(newNode);
      this.tail = newNode;
    }
  }

  pop() {
    let tailValue = this.tail.value;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
    }
    return tailValue;
  }

  shift() {
    let headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }

  unshift(value) {
    if (!this.head) {
      this.head = new LinkedNode(value, null);
      this.tail = this.head;
    } else {
      let newNode = new LinkedNode(value, null);
      newNode.link(this.head);
      this.head = newNode;
    }
  }

  delete(value) {
    let node = this.getNode(this.head, value);
    // console.log(this.getNode(this.head, value));
    if (node === this.head) {
      this.head = node.next;
    }
    if (node === this.tail) {
      this.tail = node.prev;
    }
    if (node?.prev) {
      node.prev.link(node.next);
    }
    if (node?.next) {
      node.next.prev = node.prev;
    }
  }

  getNode(node, value) {
    if (!node) return;
    if (node.value === value) {
      return node;
    } else {
      return this.getNode(node.next, value);
    }
  }

  count() {
    if (!this.head) return 0;
    return this.getCount(this.head, 1);
  }

  getCount(node, count) {
    let newCount = count;
    if (node.next) {
      return this.getCount(node.next, (newCount += 1));
    }
    return newCount;
  }
}

class LinkedNode {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }

  link(next) {
    this.next = next;
  }
}
