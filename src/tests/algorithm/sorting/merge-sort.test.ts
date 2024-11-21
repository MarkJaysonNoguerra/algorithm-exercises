import { describe, expect, test } from "vitest";
import { mergeSort } from "../../../algorithm/sorting/merge-sort";

describe("Test for merge sort", () => {
    const inputs = [
        [1, 234, 24,5,23,13,523,5],
        [123,51,51,63,63,14],
        [123,51,897,23,651,112,51],
        [5,4,3,2,1],
        [1,2,3,4,5]
    ];

    inputs.forEach((input) => {
        test(`test input ${JSON.stringify(input)}`, () => {
            const sorted = [...input];
            sorted.sort((a, b) => a - b);
            expect(mergeSort(input)).toStrictEqual(sorted);
        });
    })
})