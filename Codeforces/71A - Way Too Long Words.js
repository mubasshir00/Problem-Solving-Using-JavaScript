'use strict';

// template begin
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', data => { inputString += data; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => { return string.trim(); });
    main();
});

var readline = () => { return inputString[currentLine++]; }
// template ends


// ********** Code Start **********

function main() {
    var n = parseInt(readline());
    while (n--) {
        var str = readline();
        var len = str.length;

        if (str.length > 10) {
            console.log(`${str[0]}${len - 2}${str[len - 1]}`)
        }
        else {
            console.log(str);
        }
    }
}
