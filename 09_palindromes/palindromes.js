const palindromes = function (string) {
    let bare = string.toLowerCase().replace(/[,.!\s]/g, "");
    return bare.split("").reduceRight((acc, next) => acc + next, "") == bare;
};

// Do not edit below this line
module.exports = palindromes;
