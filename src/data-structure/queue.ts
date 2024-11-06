type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T> {
  private head?: Node<T>;
  private tail?: Node<T>;
  private length: number;

  constructor() {
    this.head = undefined;
    this.tail = undefined;

    this.length = 0;
  }

  enqueue(value: T): void {
    this.length++;
    const node = {
      value: value,
    } as Node<T>;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    this.tail!.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;

    const head = this.head;
    this.head = head.next;
    // free (memory for non js)
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
