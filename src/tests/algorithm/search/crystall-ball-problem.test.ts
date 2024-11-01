import { describe, expect, test } from "vitest";
import { crystalBallProblem } from "../../../algorithm/search/crystal-ball-problem";

describe("Test for crystabl problem", () => {
    test("This should return 3", () => {
        const input = [false, false, false, true, true, true, true];
        expect(crystalBallProblem(input)).toBe(3);
    });

    test("This should return 10", () => {
        const input = [false, false, false, false, false, false, false, false, false, false, true, true, true, true];
        expect(crystalBallProblem(input)).toBe(10);
    });

    test("This should return 1", () => {
        const input = [false, true, true, true, true];
        expect(crystalBallProblem(input)).toBe(1);
    });

    test("This should return 3", () => {
        const input = [false, false, false, true];
        expect(crystalBallProblem(input)).toBe(3);
    });

    test("This should return 0", () => {
        const input = [true, true, true, true];
        expect(crystalBallProblem(input)).toBe(0);
    });

    test("This should return -1", () => {
        const input = [false, false, false, false];
        expect(crystalBallProblem(input)).toBe(-1);
    });
});
