// const palindromes = function(string) {
//     const reverseString = Array.from(string).reverse().join('').replace(/[^a-z0-9]/g, '');
//     if (reverseString === string) {
//         return true;
//     } else {
//         return false;
//     }
// }; doesnt work as for e.g. string ='racecar!' but reverseString = 'racecar' 


const palindromes = function(string) {
    const checkString = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    // console.log(checkString)
    const reverseString = Array.from(checkString).reverse().join('')
    // console.log(Array.from(checkString))
    // console.log(Array.from(checkString).reverse())
    // console.log(reverseString)
    if ( reverseString === checkString) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
