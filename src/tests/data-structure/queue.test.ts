import { describe, expect, test } from "vitest";
import { Queue } from "../../data-structure/queue";

describe("Test for queue", () => {
  test("empty queue", () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.peek()).toBe(undefined);
  });

  test("queuing on queue", () => {
    const queue = new Queue<number>();

    expect(queue.size()).toBe(0);

    const queueList = [1, 2, 3, 4, 5, 6];
    for (const item of queueList) {
      queue.enqueue(item);
    }

    expect(queue.size()).toBe(6);
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(5);
  });

  test("dequeuing on number queue", () => {
    const queue = new Queue<number>();

    const queueList = [1, 2, 3, 4, 5, 6];
    for (const item of queueList) {
      queue.enqueue(item);
    }
    expect(queue.size()).toBe(6);

    for (const item of queueList) {
      expect(queue.dequeue()).toBe(item);
    }

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
  });

  test("queuing and dequeuing on number queue", () => {
    const queue = new Queue<number>();

    const queueList = [123,12,5178,12,59,12];
    for (const item of queueList) {
      queue.enqueue(item);
    }
    expect(queue.size()).toBe(6);

    for (const item of queueList) {
      expect(queue.dequeue()).toBe(item);
    }

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);

    for (const item of queueList) {
        queue.enqueue(item);
    }
    expect(queue.peek()).toBe(123);
    expect(queue.size()).toBe(6);
  });

  test("dequeuing on string queue", () => {
    const queue = new Queue<string>();

    const queueList = ["he", "she", "them", "they"];
    for (const item of queueList) {
      queue.enqueue(item);
    }
    expect(queue.size()).toBe(4);

    for (const item of queueList) {
      expect(queue.dequeue()).toBe(item);
    }

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);
  });

  test("queuing and dequeuing on queue", () => {
    const queue = new Queue<string>();

    const queueList = ["hello", "world"];
    for (const item of queueList) {
      queue.enqueue(item);
    }
    expect(queue.size()).toBe(2);

    for (const item of queueList) {
      expect(queue.dequeue()).toBe(item);
    }

    expect(queue.dequeue()).toBe(undefined);
    expect(queue.size()).toBe(0);

    for (const item of queueList) {
        queue.enqueue(item);
    }
    expect(queue.peek()).toBe("hello");
    expect(queue.size()).toBe(2);
  });
});
