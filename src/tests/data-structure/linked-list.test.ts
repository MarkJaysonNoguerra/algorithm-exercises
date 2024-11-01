import { Console } from "console";
import { LinkedList } from "../../data-structure/linked-list";
import { describe, expect, test } from "vitest";

describe("Test for linked list", () => {
  test("empty link test", () => {
    const linkedList = new LinkedList();

    expect(linkedList.getSize()).toBe(0);
  });

  test("5 item link test", () => {
    const linkedList = new LinkedList();
    linkedList.addNode(1).addNode(2).addNode(3).addNode(1323).addNode(9);

    expect(linkedList.getSize()).toBe(5);
  });

  test("10 item linked list", () => {
    const linkedList = new LinkedList();
    linkedList
      .addNode(123)
      .addNode(1)
      .addNode(233)
      .addNode(1323)
      .addNode(9)
      .addNode(2)
      .addNode(3)
      .addNode(4)
      .addNode(65)
      .addNode(13);

    expect(linkedList.getSize()).toBe(10);
  });


  test("findNode should return -1", () => {
    const linkedList = new LinkedList();

    expect(linkedList.findNode(23)).toBe(-1);
  });

  test("findNode should return 3", () => {
    const linkedList = new LinkedList();
    linkedList.addNode(1).addNode(2).addNode(3).addNode(1323).addNode(9);

    expect(linkedList.findNode(1323)).toBe(3);
  });

  test("findNode should return 9", () => {
    const linkedList = new LinkedList();
    linkedList
      .addNode(123)
      .addNode(1)
      .addNode(233)
      .addNode(1323)
      .addNode(9)
      .addNode(2)
      .addNode(3)
      .addNode(4)
      .addNode(65)
      .addNode(13);

    expect(linkedList.findNode(13)).toBe(9);
  });


  test("removeNode should return -1", () => {
    const linkedList = new LinkedList();

    expect(linkedList.removeNode(23)).toBe(-1);
    expect(linkedList.getContents()).toStrictEqual([]);
  });

  test("removeNode should return 3", () => {
    const linkedList = new LinkedList();
    linkedList.addNode(1).addNode(2).addNode(3).addNode(1323).addNode(9);

    expect(linkedList.removeNode(1323)).toBe(3);
    expect(linkedList.getContents()).toStrictEqual([1,2,3,9]);
  });

  test("removeNode should return 9", () => {
    const linkedList = new LinkedList();
    linkedList
      .addNode(123)
      .addNode(1)
      .addNode(233)
      .addNode(1323)
      .addNode(9)
      .addNode(2)
      .addNode(3)
      .addNode(4)
      .addNode(65)
      .addNode(13);

    expect(linkedList.removeNode(13)).toBe(9);
    expect(linkedList.getContents()).toStrictEqual([123,1,233,1323,9,2,3,4,65]);
  });

  test("test to empty the listlist", () => {
    const linkedList = new LinkedList();
    linkedList
      .addNode(123)
      .addNode(1)
      .addNode(13);

    expect(linkedList.removeNode(13)).toBe(2);
    expect(linkedList.removeNode(1)).toBe(1);
    expect(linkedList.removeNode(123)).toBe(0);
    expect(linkedList.removeNode(999)).toBe(-1);
    expect(linkedList.getContents()).toStrictEqual([]);
  });

});
