const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    const fib = [0, 1];
    for (let i = 0; i < n; i++) {
        fib.push(fib[1] + fib.shift());
    }
    return fib[0];
};

// Do not edit below this line
module.exports = fibonacci;
