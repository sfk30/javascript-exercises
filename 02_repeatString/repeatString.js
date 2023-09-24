const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    } else {
    empty = ''
    for (i = 0; i < num; i++) {
        empty += string
    }
    return empty
    }
};

// Do not edit below this line
module.exports = repeatString;
