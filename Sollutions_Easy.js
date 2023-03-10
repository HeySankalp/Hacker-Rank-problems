// Q-: There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


// sollution 1
function getTotalX(a, b) {
    let count = 0;
    let min_a = Math.min(...a);
    let max_b = Math.max(...b);
    for (let i = min_a; i <= max_b; i += min_a) {
        if (b.every((item) => item % i === 0)) {
            if (a.every((item) => i % item === 0)) {
                count += 1;
            }
        }
    }
    return count
}


// Q-:  Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// sollution 1
function breakingRecords(scores) {
    let lowestScore = scores[0];
    let highestScore = scores[0];
    let breakLowest = 0;
    let breakHighest = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highestScore) {
            highestScore = scores[i];
            breakHighest += 1;
        } else if (scores[i] < lowestScore) {
            lowestScore = scores[i];
            breakLowest += 1;
        } else {
            continue;
        }
    }
    return [breakHighest, breakLowest]
}


//Q -:    Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    let start = 0;
    let end = m;
    let subarray = [];
    let noOfSegments = 0;

    if (!s.length || s.length < m) {
        return 0;
    }

    if (s.length === m) {
        if (s.reduce((sum, currentValue) => sum + currentValue) === d) {
            return 1;
        }
        return 0;
    }

    while (end <= s.length) {
        subarray = [];
        for (let i = start; i < end; i++) {
            subarray.push(s[i]);
        }
        if (subarray.reduce((sum, currentValue) => sum + currentValue) === d) {
            noOfSegments++;
        }
        start++;
        end++
    }
    return noOfSegments;
}


//Q:-  Given an array of integers and a positive integer k , determine the number
//  of (i,j)  pairs where  i<j and  ar[i] + ar[j]  is divisible by k .

function divisibleSumPairs(n, k, ar) {
    let pairCount = 0
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairCount += 1;
            }
        }
    }
    return pairCount;
}


// Q:- Given an array of bird sightings where every element represents a bird type id, 
// determine the id of the most frequently sighted type. If more than 1 type has been
//  spotted that maximum amount, return the smallest of their ids.

function migratoryBirds(arr) {
    let max = [];
    let temp = [];
    const sorted = arr.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        temp.push(sorted[i]);
        if (sorted[i] !== sorted[i + 1]) {
            if (temp.length > max.length) {
                max = [...temp];
            }
            temp = [];
        }
    }
    return max[0];
}

// Q:- Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

function dayOfProgrammer(year) {
    if (year < 1918) {
        if (year % 4 === 0) {
            return "12.09." + year
        } else {
            return "13.09." + year
        }
    } else if (year > 1918) {
        if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
            return "12.09." + year
        } else {
            return "13.09." + year
        }
    } else {
        return "29.09." + year
    }

}


// Q :- Complete the bonAppetit function in the editor below.It should print Bon Appetit if the bill 
// is fairly split.Otherwise, it should print the integer amount of money that Brian owes Anna.


function split(bill, k, b) {
    let remove = bill[k]
    let annaToPay = (bill.reduce((sum, currentValue) => sum + currentValue) - remove) / 2;
    if (b > annaToPay) {
        console.log(b - annaToPay);
    }
    if (b === annaToPay) {
        console.log('Bon Appetit')
    }
}


// Q:- There is a large pile of socks that must be paired by color. Given an array of integers representing
//  the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    let count = 0;
    let tempAr = [];
    let looped = []
    for (let i = 0; i < n; i++) {
        if (looped.includes(ar[i])) {
            continue;
        } else {
            looped.push(ar[i]);
            tempAr = ar.filter((ele) => ele === ar[i])
            count += Math.floor(tempAr.length / 2);
            tempAr = [];
        }
    }
    return count;
}



//Q:- Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p .

function pageCount(n, p) {
    let pageTurn = 0;
    if (n - p <= p - 1) {
        pageTurn = n % 2 == 0
            ? Math.ceil((n - p) / 2)
            : Math.floor((n - p) / 2)
    } else {
        pageTurn = Math.floor(p / 2);
    }
    return pageTurn;
}


//Q:- Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

function countingValleys(steps, path) {
    let movement = 0;
    let valleyCount = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] == 'D') {
            movement -= 1
        } else {
            movement += 1
        }
        console.log(movement)
        if (movement === 0 && path[i] === 'U') {
            valleyCount += 1;
        }
    }
    return valleyCount
}


// Q:- A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give
//  budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not 
//  possible to buy both items, return -1.

function getMoneySpent(keyboards, drives, b) {
    let maxPurchase = 0;

    if (b < (Math.min(...keyboards) + Math.min(...drives))) {
        return -1;
    }

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b && keyboards[i] + drives[j] > maxPurchase) {
                maxPurchase = keyboards[i] + drives[j]
            }
        }
    }
    return maxPurchase;
}


// Q :- Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine
//  which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive
//   at the same time, the mouse will be allowed to move and it will escape while they fight.

function catAndMouse(x, y, z) {
    if(Math.abs(z-x)<Math.abs(z-y)){
            return 'Cat A'
        }else if(Math.abs(z-x)>Math.abs(z-y)){
            return 'Cat B'
        }else{
            return 'Mouse C'
        }
    }