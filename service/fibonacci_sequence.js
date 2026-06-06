function Fibonacci(n) {
    this.n = n;
    this[Symbol.iterator] = function() {
        let counter = 0;
        let prev = 0;
        let current = 1;
        return {
            num: n,
            next: function() {
                if (this.num <= 0) return {value: undefined, done: true};
                if (counter < this.num) {
                    counter++;
                    [prev, current] = [current, prev + current];
                    return {value: prev, done: false};
                } else {
                    return {done: true}
                }
            }
        }
    }
}

export {Fibonacci};