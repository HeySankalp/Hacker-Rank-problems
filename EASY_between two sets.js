// Q-: There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.


// sollution 1
function getTotalX(a, b) { 
    let count = 0;
    let min_a = Math.min(...a);
    let max_b = Math.max(...b);
    for (let i = min_a; i<max_b; i+=min_a){
        if(b.every((item)=> item%i===0)){
            if(a.every((item)=> i%item===0)){
                count+=1;
            }
        }
    }
return count
}


