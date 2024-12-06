type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T> {
  constructor() {
  }

  enqueue(value: T): void {
  }

  dequeue(): T | undefined {
    return undefined;
  }

  peek(): T | undefined {
    return undefined;
  }

  size(): number {
    return 0;
  }
}
