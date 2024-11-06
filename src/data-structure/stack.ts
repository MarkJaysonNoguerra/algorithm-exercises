type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Stack<T> {
  private head?: Node<T>;

  private length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(value: T): void {
    this.length++;

    const node = { value } as Node<T>;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) {
        return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = head.next;
    // free memory (for non js)
    head.next = undefined;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  size(): number {
    return this.length;
  }
}
