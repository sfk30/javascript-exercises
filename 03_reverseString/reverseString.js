const reverseString = function(string) {
    stringToArray = Array.from(string);
    revStringToArray = stringToArray.reverse()
    revStringToArrayJoined = revStringToArray.join('')
    return revStringToArrayJoined
};

// Do not edit below this line
module.exports = reverseString;
