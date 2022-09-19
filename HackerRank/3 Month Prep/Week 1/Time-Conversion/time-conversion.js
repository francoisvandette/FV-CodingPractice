'use strict';

const fs = require('fs');

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let newtime = "";
    if(s.endsWith("AM")) {
        if (s.startsWith("12")){
            newtime = "00" + s.slice(2,8);
        } else {
            newtime = s.slice(0,8);
        } 
    } else if (s.endsWith("PM")) {
        let temp = parseInt(s.slice(0,2))
        if (temp == 12) {
            newtime = s.slice(0,8)
        } else {
            temp += 12;
            newtime = temp.toString() + s.slice(2,8);
        }
    }
    // console.log(newtime);
    return newtime;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
