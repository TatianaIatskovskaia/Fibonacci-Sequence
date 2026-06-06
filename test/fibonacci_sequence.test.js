import {test, expect, describe} from "@jest/globals";
import {fibonacci} from "../service/fibonacci_sequence.js";

describe("Fibonacci Sequence", () => {
    test('should return the Fibonacci sequence', () => {
        expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        expect(fibonacci(0)).toEqual([]);
        expect(fibonacci(-1)).toEqual([]);
        expect(fibonacci(1)).toEqual([0]);
        expect(fibonacci(2)).toEqual([0, 1]);
    })
})
describe("The sum of Fibonacci numbers", () => {
    test("The sum of the first n Fibonacci numbers", () => {
        const n = 10;
        const result = fibonacci(n).reduce((a, b) => a + b);
        expect(result).toEqual(88);
    });
});
