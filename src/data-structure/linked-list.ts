export class LinkedList {
  private head: Node | null = null;
  private size = 0;

  constructor() {}

  addNode(value: number): this {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let curretNode = this.head;
      while (curretNode.next != null) {
        curretNode = curretNode.next;
      }
      curretNode.next = newNode;
    }

    this.size++;
    return this;
  }

  findNode(value: number): number {
    let result = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return result;
      }

      currentNode = currentNode.next;
      result++;
    }
    return -1;
  }

  removeNode(value: number): number {
    let previousNode: Node | null = null;
    let curretNode = this.head;
    let result = 0;

    while (curretNode && curretNode?.value) {
        if (curretNode.value === value) {
            if (previousNode === null) {
                this.head = curretNode.next;
            } else {
                previousNode.next = curretNode.next;
            }

            return result;
        }

        previousNode = curretNode;
        curretNode = curretNode.next;
        result++;
    }

    return -1;
  }

  getContents(): number[] {
    const result = [];
    let currentNode = this.head;
    while (currentNode && currentNode.value !== null) {
      result.push(currentNode?.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  getSize(): number {
    return this.size;
  }
}

export class Node {
  public next: Node | null = null;

  constructor(public value: number) {}
}
