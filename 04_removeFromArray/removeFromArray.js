

function removeFromArray(arr, ...args) {
    return arr.filter(function(arrItem) {
        return !args.includes(arrItem)
    })
}

// Do not edit below this line
module.exports = removeFromArray;


// function removeFromArray(arr, n) {
//     const index = arr.indexOf(n)
//     if (index > -1) {
//         arr.splice(index,1);
//     }
//     return arr
// }


// function removeFromArray(arr, ...args) {
//     return arr.filter(function(arrItem) {
//         return !args.includes(arrItem)
//     })
// }

// const removeFromArray = (arr, ...args) => arr.filter((item) => !args.includes(item))
