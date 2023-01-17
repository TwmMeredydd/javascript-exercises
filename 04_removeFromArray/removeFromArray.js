const removeFromArray = function(original, ...toRemove) {
    return original.filter(i => !toRemove.includes(i));
};

// Do not edit below this line
module.exports = removeFromArray;
