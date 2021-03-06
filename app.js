// console.log('Starting app');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes')

const argv = yargs.argv;
var command = process.argv[2];
// console.log(argv);
if (command === 'add'){
var note =  notes.addNote(argv.title,argv.body);

if(note) {
  console.log('Note added successfully' ,note.title,note.body);
} else {
  console.log('Unable to save the note');
}

} else if(command === 'list') {
  var allNotes = notes.getAll();
  console.log('Following are  the notes: \n');
  allNotes.forEach((note)=>{

    console.log(`Note Title: ${note.title} and Body: ${note.body} \n `);
  })

} else if(command === 'read'){
 var printItem = notes.getTitle(argv.title);
 if(printItem.length>0){
   console.log(`Notes: with Title: ${printItem[0].title} and Body: ${printItem[0].body}`);
 }else {
   console.log('Unable to fetch notes');
 }

} else if (command === 'remove'){
  var message = notes.removeTitle(argv.title);
  console.log(message);
} else {
  console.log('Bad argument');
}




// // var user = os.userInfo();
// // console.log(user);
// //
// //
// // fs.appendFile('message.txt',`Hello World! ${user.username}`, function (err){
// //   if (err){
// //     console.log('file has not been appended dude to an error');
// //   }
// //
// //   console.log('File has been appended successfully!!!');
// // });
//
// // var res = notes.add(2,3);
// // console.log(res);
// //
// // console.log(_.isString('Andrew'));
// //
// // var filteredArray =  _.uniq([1,2,3,1,4,5,5]);
// //
// // console.log(filteredArray);
// // console.log('test');
//
// console.log(process.argv[2]);
