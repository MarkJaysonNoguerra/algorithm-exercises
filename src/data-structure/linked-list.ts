type Node<T> = {
  next?: Node<T>;
  value: T
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length = 0;

  constructor() {}

  addNode(value: T): this {
    return this;
  }

  findNode(value: number): number {
    return -1;
  }

  removeNode(value: number): number {
    return -1;
  }

  getContents(): number[] {
    return [];
  }

  getSize(): number {
    return this.length;
  }
}