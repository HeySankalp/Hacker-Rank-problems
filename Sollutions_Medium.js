//  Q:- You will be given a 3 x 3 matrix s of integers in the inclusive range [1,9]. We can
//      convert any digit a to any other digit b in the range [1,9] at cost of |a-b|. Given 
//      s, convert it into a magic square at minimal cost. Print this cost on a new line.

function formingMagicSquare(s) {
    const possibleMagicSqure = [
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    ];

    let tempCost = 0;
    let cost = 99;

    for (let i = 0; i < possibleMagicSqure.length; i++) {
        for (let j = 0; j < possibleMagicSqure[i].length; j++) {
            for (let k = 0; k < possibleMagicSqure[i][j].length; k++) {
                if (possibleMagicSqure[i][j][k] === s[j][k]) {
                    continue;
                } else {
                    tempCost += Math.abs(possibleMagicSqure[i][j][k] - s[j][k])
                }
            }
        }
        if (cost > tempCost) {
            cost = tempCost;
        }
        tempCost = 0;
    }
    return cost;
}



// Q:- Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
    let sortedArray = a.sort((a, b) => a - b);
    let subArrayLengths = [];
    let subCount = 0
    let base = sortedArray[0];
    for (let i = 0; i < sortedArray.length; i++) {
        if (Math.abs(base - sortedArray[i]) === 0 || Math.abs(base - sortedArray[i]) === 1) {
            subCount += 1;
        } else {
            subArrayLengths.push(subCount);
            if (Math.abs(base - sortedArray[i]) > 1) {
                base = sortedArray[i]
                subCount = 1;
            } else {
                base = sortedArray[i - 1];
                subCount = 1 + sortedArray.filter((ele) => ele === base).length;
            }
        }
    }
    if (subArrayLengths.length === 0) {
        return a.length;
    } else {
        return Math.max(...subArrayLengths);
    }
}
