import { describe, expect, test } from "vitest";
import { Stack } from "../../data-structure/stack";

describe("Test for stack", () => {
  test("empty stack", () => {
    const stack = new Stack();

    expect(stack.pop()).toBe(undefined);
    expect(stack.peek()).toBe(undefined);
  });

  test("pushing on stack", () => {
    const stack = new Stack<number>();

    expect(stack.size()).toBe(0);

    const stackList = [1, 2, 3, 4, 5, 6];
    for (const item of stackList) {
      stack.push(item);
    }

    expect(stack.size()).toBe(6);
    expect(stack.peek()).toBe(6);
    expect(stack.pop()).toBe(6);
    expect(stack.size()).toBe(5);
  });

  test("popping on number stack", () => {
    const stack = new Stack<number>();

    const stackList = [1, 2, 3, 4, 5, 6];
    for (const item of stackList) {
      stack.push(item);
    }
    expect(stack.size()).toBe(6);

    for (let i = stackList.length - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(stackList[i]);
    }

    expect(stack.pop()).toBe(undefined);
    expect(stack.size()).toBe(0);
  });

  test("pushing and popping on number stack", () => {
    const stack = new Stack<number>();

    const stackList = [123,12,5178,12,59,12];
    for (const item of stackList) {
      stack.push(item);
    }
    expect(stack.size()).toBe(6);

    for (let i = stackList.length - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(stackList[i]);
    }

    expect(stack.pop()).toBe(undefined);
    expect(stack.size()).toBe(0);

    for (const item of stackList) {
        stack.push(item);
    }
    expect(stack.peek()).toBe(12);
    expect(stack.size()).toBe(6);
  });

  test("popping on string stack", () => {
    const stack = new Stack<string>();

    const stackList = ["he", "she", "them", "they"];
    for (const item of stackList) {
      stack.push(item);
    }
    expect(stack.size()).toBe(4);

    for (let i = stackList.length - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(stackList[i]);
    }

    expect(stack.pop()).toBe(undefined);
    expect(stack.size()).toBe(0);
  });

  test("pushing and popping on stack", () => {
    const stack = new Stack<string>();

    const stackList = ["hello", "world"];
    for (const item of stackList) {
      stack.push(item);
    }
    expect(stack.size()).toBe(2);

    for (let i = stackList.length - 1; i >= 0; i--) {
        expect(stack.pop()).toBe(stackList[i]);
    }

    expect(stack.pop()).toBe(undefined);
    expect(stack.size()).toBe(0);

    for (const item of stackList) {
        stack.push(item);
    }
    expect(stack.peek()).toBe("world");
    expect(stack.size()).toBe(2);
  });
});
