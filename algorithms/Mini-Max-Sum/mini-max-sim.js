'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let temparr = [];
    let min = 0;
    let max = 0;
    
    temparr = arr.sort(function(a, b){return a - b});
    
    for(let i = 0; i < temparr.length -1; i ++) {
        min += temparr[i];
    }
    for(let i = 1; i < temparr.length; i++) {
        max += temparr[i];
    }
    
    console.log(min + " " + max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
