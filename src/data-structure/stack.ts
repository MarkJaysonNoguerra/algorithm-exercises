type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Stack<T> {
  constructor() {
  }

  push(value: T): void {
  }

  pop(): T | undefined {
    return undefined;
  }

  peek(): T | undefined {
    return undefined;
  }

  size(): number {
    return 0;
  }
}
