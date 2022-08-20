// Javascript for loop console print in one line
// Link: https://stackoverflow.com/questions/33089739/javascript-for-loop-console-print-in-one-line

for(var i = 1; i < 11; i += 1) {
    console.log(i);
}

/*

// output

1
2
3
4
5
6
7
8
9
10

*/


// Golden Trick
console.log("\n")
console.log("=============================== good solution ===============================")

console.log(Array.apply(null, {length: 10}).map(function(el, index){
    return index;
 }).join(' '));

// output
// 0 1 2 3 4 5 6 7 8 9




// Golden Trick
console.log("\n")
console.log("=============================== good solution ===============================")

// 1 to n
const nn = 10;

// create new array with numbers 0 to n
// remove skip first element (0) using splice
// join all the numbers (separated by space)
const stringOfNumbers = [...Array(nn+1).keys()].splice(1).join(' ');

// output the result
console.log(stringOfNumbers);



// none good solution
console.log("\n")
console.log("=============================== none good solution ===============================")

let s = "";
for(let i = 1; i < 11; i++) {
  s += i + " ";
}
console.log(s);

// output
// 1 2 3 4 5 6 7 8 9 10 


console.log("=============================== why ? ===============================")

// why ?

console.log("\n")

let n = '8';

for ( l = 1; l <= 10; l++) {
      n += " " + l;
}

console.log("not work with string: ", n)
    
let num = 8;

for ( ll = 1; ll <= 10; ll++) {
      num += " " + ll;
}
    
console.log("not work with number: ", num);




// console.log("\n")

// var result  = 8;
// for(var i = 1; i < 11; i += 1) {
//   result = result + i + " ";
// }
// console.log(result)

// // output
// // 9 2 3 4 5 6 7 8 9 10





// // Golden Trick
// console.log("\n")

// console.log(Array.apply(null, {length: 10}).map(function(el, index){
//     return index;
//  }).join(' '));

// // output
// // 0 1 2 3 4 5 6 7 8 9



// console.log("\n")

// let str = '', ii = 1;
// while(ii <= 10){
//     str += ii + ' ';
//     ii += 1;
//     // ii++;
// }

// console.log(str);

// // output
// // 1 2 3 4 5 6 7 8 9 10 





// // Golden Trick
// console.log("\n")

// // 1 to n
// const nn = 10;

// // create new array with numbers 0 to n
// // remove skip first element (0) using splice
// // join all the numbers (separated by space)
// const stringOfNumbers = [...Array(nn+1).keys()].splice(1).join(' ');

// // output the result
// console.log(stringOfNumbers);




// console.log("\n")

// for (let j = 0; j < 5; j++){
//     console.log('*'.repeat(j))    
// }


// for (var i = 1; i < 11; i += 1) {
//     process.stdout.write(i + " ");
// }







console.log("====================================================================================")


