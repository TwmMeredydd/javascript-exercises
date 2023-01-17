const sumAll = function(n1, n2) {
    if (n1<0 || n2<0 || !Number.isInteger(n1) || !Number.isInteger(n2)) {
        return "ERROR";
    }

    numbers = [n1, n2].sort((a, b) => a-b);
    sum = 0;
    for (let i = numbers[0]; i < numbers[1]+1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
