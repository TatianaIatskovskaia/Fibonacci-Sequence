const fibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const result = [0, 1];
    while (n > 2) {
        result.push(result[result.length - 1] + result[result.length - 2]);
        n--;
    }
    return result;
};

export {fibonacci};