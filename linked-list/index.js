class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(100)
// console.log(n1)

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)  // this.head gets pushed and becomes the next value
    this.size++
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make the head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++
  }

  // insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) { // for when index doesn't exist, out of range
      return;
    }
    if (index === 0) { // if it's the first index
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    // set current to first
    current = this.head
    let count = 0

    while (count < index) {
      previous = current // node before index
      count++;
      current = current.next // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data)
      }
      count++;
      current = current.next
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) { // when index out of range
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // remove first index
    if (index === 0) {
      this.head = current.next // head as next value
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  // return tail
  tail() {
    let current = this.head
    // if list is empty
    if (current === null) {
      return null;
    }
    while (current.next !== null) { // Traverse the list until the end
      current = current.next;
    }
    return current
  }


  // return head
  getHead() {
    return this.head
  }

  // returns total number of nodes in the list
  getSize() {
    return this.size
  }


  // remove last element from list
  pop() {
    if (this.size === null) { // if the list is empty
      return;
    }
    if (!this.head.next) {
      this.head = null; // if there's only one node, removing it leaves the list empty
      return;
    }

    let current = this.head;
    let previous = null;
    while (current.next) {
        previous = current;
        current = current.next;
    }
    // At the end of the loop, 'current' is the last node and 'previous' is the second to last
    previous.next = null; // Remove the last node
  }

  printListData() {
    let current = this.head;


    while(current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100)
linkedList.insertFirst(200)
linkedList.insertFirst(300)
linkedList.insertLast(400)
linkedList.insertLast(500)

// linkedList.insertAt(500, 2)
// linkedList.removeAt(0)
// console.log(linkedList.tail())
// console.log(linkedList.getHead())
console.log(linkedList.getSize())


linkedList.printListData()
