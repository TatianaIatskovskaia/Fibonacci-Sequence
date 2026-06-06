import {test, expect, describe} from "@jest/globals";
import {Fibonacci} from "../service/fibonacci_sequence.js";

describe("Fibonacci Sequence", () => {
    test('should return the Fibonacci sequence', () => {
        expect([...new Fibonacci(5)]).toEqual([1, 1, 2, 3, 5]);
        expect([...new Fibonacci(10)]).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        expect([...new Fibonacci(0)]).toEqual([]);
        expect([...new Fibonacci(-1)]).toEqual([]);
        expect([...new Fibonacci(1)]).toEqual([1]);
        expect([...new Fibonacci(2)]).toEqual([1, 1]);
    })
})
describe("The sum of Fibonacci numbers", () => {
    test("The sum of the first n Fibonacci numbers", () => {
        const n = 10;
        const result = ([...new Fibonacci(n)]).reduce((a, b) => a + b, 0);
        expect(result).toEqual(143);
    });
});
