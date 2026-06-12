export function Fibonacci(n) {
    this[Symbol.iterator] = function* () {
        let prev = 1;
        let current = 1;
        for (let i = 0; i < n; i++) {
            yield prev;
            [prev, current] = [current, prev + current];
        }
    }
}



// function Fibonacci(n) {
//     this.n = n;
//     this[Symbol.iterator] = function() {
//         let counter = 0;
//         let prev = 0;
//         let current = 1;
//         return {
//             num: n,
//             next: function() {
//                 if (this.num <= 0) return {value: undefined, done: true};
//                 if (counter < this.num) {
//                     counter++;
//                     [prev, current] = [current, prev + current];
//                     return {value: prev, done: false};
//                 } else {
//                     return {done: true}
//                 }
//             }
//         }
//     }
// }
//
// export {Fibonacci};