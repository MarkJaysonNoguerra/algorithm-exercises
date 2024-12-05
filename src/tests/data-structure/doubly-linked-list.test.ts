import { DoublyLinkedList } from "../../data-structure/doubly-linked-list";
import { describe, expect, test } from "vitest";

describe("Test for doubly linked list", () => {
  test("empty link test", () => {
    const linkedList = new DoublyLinkedList<number>();

    expect(linkedList.getSize()).toBe(0);
  });

  test("append method", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList.append(1).append(2).append(3).append(1323).append(9);

    expect(linkedList.getSize()).toBe(5);
    expect(linkedList.getContents()).toStrictEqual([1, 2, 3, 1323, 9]);
  });

  test("prepend method", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65)
      .prepend(13);

    expect(linkedList.getSize()).toBe(10);
    expect(linkedList.getContents()).toStrictEqual([
      13, 65, 4, 3, 2, 9, 1323, 233, 1, 123,
    ]);
  });

  test("insertAt method", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65)
      .insertAt(50, 3);

    expect(linkedList.getSize()).toBe(10);
    expect(linkedList.getContents()).toStrictEqual([
      65, 4, 3, 50, 2, 9, 1323, 233, 1, 123,
    ]);
  });

  test("insertAt method at first", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65)
      .insertAt(50, 0);

    expect(linkedList.getSize()).toBe(10);
    expect(linkedList.getContents()).toStrictEqual([
      50, 65, 4, 3, 2, 9, 1323, 233, 1, 123,
    ]);
  });


  test("insertAt method at the end", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65)
      .insertAt(50, 8);

    expect(linkedList.getSize()).toBe(10);
    expect(linkedList.getContents()).toStrictEqual([
      65, 4, 3, 2, 9, 1323, 233, 1, 123, 50
    ]);
  });

  test("insert method first", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .insertAt(50, 0);

    expect(linkedList.getSize()).toBe(1);
    expect(linkedList.getContents()).toStrictEqual([50]);
  });

  test("insert method out of range", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .insertAt(50, 0);

    expect(() => linkedList.insertAt(51, 2)).toThrow("out of range index");
  });

  test("remove method", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65);

    expect(linkedList.remove(1)).toBe(7);
    expect(linkedList.getSize()).toBe(8);
    expect(linkedList.getContents()).toStrictEqual([
      65, 4, 3, 2, 9, 1323, 233, 123,
    ]);
  });

  test("remove last item using remove method", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65);

    expect(linkedList.remove(123)).toBe(8);
    expect(linkedList.getSize()).toBe(8);
    expect(linkedList.getContents()).toStrictEqual([
      65, 4, 3, 2, 9, 1323, 233, 1,
    ]);
  });

  test("remove method the last", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123)
      .prepend(1)
      .prepend(233)
      .prepend(1323)
      .prepend(9)
      .prepend(2)
      .prepend(3)
      .prepend(4)
      .prepend(65);

    expect(linkedList.remove(1)).toBe(7);
    expect(linkedList.getSize()).toBe(8);
    expect(linkedList.getContents()).toStrictEqual([
      65, 4, 3, 2, 9, 1323, 233, 123,
    ]);
  });

  test("remove method for only 1 item", () => {
    const linkedList = new DoublyLinkedList<number>();
    linkedList
      .prepend(123);

    expect(linkedList.remove(123)).toBe(0);
    expect(linkedList.getSize()).toBe(0);
    expect(linkedList.getContents()).toStrictEqual([]);
  });


  // test("removeAt method", () => {
  //   const linkedList = new DoublyLinkedList<number>();
  //   linkedList.append(1).append(2).append(3).append(1323).append(9).removeAt(3);

  //   expect(linkedList.getSize()).toBe(4);
  //   expect(linkedList.getContents()).toStrictEqual([1, 2, 3, 9]);
  // });

  // test("get method", () => {
  //   const linkedList = new DoublyLinkedList<number>();
  //   linkedList.prepend(1).prepend(2).prepend(3).prepend(1323).prepend(9);

  //   expect(linkedList.get(2)).toBe(3);
  //   expect(linkedList.getContents()).toStrictEqual([9, 1323, 3, 2, 1]);
  // });
});
