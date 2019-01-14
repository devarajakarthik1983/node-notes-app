// // var obj = {
// //   id:1,
// //   name:'Karthik'
// // }
// //
// // var stringCov = JSON.stringify(obj);
// // console.log(stringCov);
//
// var newString = '{"name":"karthik","age":25}';
// var backToObject = JSON.parse(newString);
// console.log(backToObject);

const fs = require('fs');
//
// var OriginalText ={
//   name:'karthik',
//   age:35
// }
//
// var newText = JSON.stringify(OriginalText);
//
// fs.writeFileSync('notes.json' , newText);

var readText = JSON.parse(fs.readFileSync('notes.json'));

console.log(readText.name);
