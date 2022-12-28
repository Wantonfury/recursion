function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(8)); // Should log 21

function merge_sort(arr) {
    if (arr.length <= 1) return arr;
    
    let left = [];
    let right = [];
    
    arr.forEach((x, i) => {
        if (i < arr.length / 2) left.push(x);
        else right.push(x);
    });
    
    left = merge_sort(left);
    right = merge_sort(right);
    
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) result.push(left.shift());
        else result.push(right.shift());
    }
    
    while (left.length > 0) result.push(left.shift());
    while (right.length > 0) result.push(right.shift());
    
    return result;
}

let arr = [8, 1, 9, -5, 10, 0, 3, -4];
console.log(merge_sort(arr)); // Should be in order