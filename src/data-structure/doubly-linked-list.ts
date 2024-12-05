type Node<T> = {
  previous?: Node<T>;
  next?: Node<T>;
  value: T
}

export class DoublyLinkedList<T> {

  private head?: Node<T>

  private tail?: Node<T>;

  private length = 0;


  append(value: T): this {
    const node = {
      value,
    } as Node<T>

    this.length++;
    if (!this.head || !this.tail) {
      this.tail = this.head = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    return this
  }

  prepend(value: T): this {
    const node = {
      value
    } as Node<T>;

    this.length++;
    if (!this.head || !this.tail) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }

    return this
  }

  insertAt(value: T, index: number): this {
    if ((index > 0 && index > this.length - 1) || index < 0) {
      throw Error("out of range index");
    }

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length - 1) {
      this.append(value);
    } else {
      const currentNode = this.getAt(index);
      const newNode = {
        value
      } as Node<T>

      newNode.next = currentNode;
      newNode.previous = currentNode.previous;
      currentNode.previous = newNode;

      newNode.previous!.next = newNode;
      this.length++;
    }

    return this
  }

  remove(value: T): number | undefined {
    if (this.head?.value === value) {
      if (this.head.next) {
        this.head = this.head.next;
        this.head.previous = undefined;
      } else {
        this.head = this.tail = undefined;
      }

      this.length--;
      return 0;
    }

    if (this.tail?.value === value) {
      if (this.tail.previous) {
        this.tail = this.tail.previous;
        this.tail.next = undefined;
      } else {
        this.head = this.tail = undefined;
      }

      this.length--;
      return this.length;
    }
    
    let currentNode = this.head;
    let currentIndex = 0;
    while(currentNode?.value) {
      if (currentNode.value === value) {
        this.length--;

        const left = currentNode.previous;
        if (left) {
          left.next = currentNode.next;
        }

        const right = currentNode.next;
        if (right) {
          right.previous = currentNode.previous;
        }

        return currentIndex;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }
    
    return undefined;
  }

  removeAt(index: number): this {
    return this
  }

  private getAt(index: number): Node<T> {

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode?.value) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }


    throw Error("out of range index");
  }

  getContents(): T[] {

    let current = this.head;
    const result = [];

    while (current?.value) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  getSize(): number {
    return this.length;
  }
}
