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
    return this
  }

  prepend(value: T): this {

    return this
  }

  insertAt(value: T, index: number): this {
    return this
  }

  remove(value: T): number | undefined {
    return undefined;
  }

  removeAt(index: number): T | undefined {
    return undefined;
  }

  getContents(): T[] {
    return [];
  }

  getSize(): number {
    return this.length;
  }

  private getAt(index: number): Node<T> {
  }
}
