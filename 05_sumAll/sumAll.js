
function sumAll(a,b) {
    total = 0;
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return 'ERROR'
    }
    else if (a < 0 || b < 0){
        return 'ERROR'
    }
    else if (Math.min(a,b) === a) {
        min = a
        max = b
    }
    else { 
        min = b
        max = a
    }
    for (i = min; i <= max; i++) {
        total += i
    }
    return total
}

// Do not edit below this line
module.exports = sumAll;

// function sumAll(a,b) {
//     total = 0;
//     for (i = a; i <= b; i++) {
//         total += i
//     }
//     return total
// }

