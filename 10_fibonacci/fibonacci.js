const fibonacci = function(num) {
    const arr = [1,1]
    if (num === 1 || num === 2) {
        return 1;
    } 
    if (num <= 0) {
        return 'OOPS';
    } 
    for (let i = 3; i <= num; i ++) {
        let numberToAdd = arr[arr.length - 1] + arr[arr.length - 2]
        // console.log(numberToAdd)
        arr.push(numberToAdd)
        // console.log(arr)
    }
    return arr[arr.length - 1] 
};

// Do not edit below this line
module.exports = fibonacci;
