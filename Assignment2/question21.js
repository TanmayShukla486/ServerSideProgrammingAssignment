class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (!this.head) this.head = new Node(val);
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(val);
    }
  }

  isEmpty() {
    return this.head == null;
  }

  display() {
    let current = this.head;
    if (this.isEmpty()) {
      console.log('Empty Linked List');
    } else {
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
}

function main() {
  list = new LinkedList();
  console.log(list.isEmpty());
  list.display();
  list.append(5);
  list.append(6);
  list.append(2);
  console.log(list.isEmpty());
  list.display();
}

main();
