const fs = require('fs');
//console.log('Starting notes.js');

// module.exports.addNote = ()=>{
//   console.log('Add Note');
//   return 'Add note';
// }
//
// module.exports.add =(a,b)=>{
//   return  a+b ;
// }

var fetchNotes = ()=>{
  try{
    notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e){
      return [];
  }

}

var saveNotes =(notes)=>{
fs.writeFileSync('notes-data.json' , JSON.stringify(notes));
}



 var addNote =(title,body)=>{
   var notes = fetchNotes();
   var note = {
     title,
     body
   }

var duplicateNotes = notes.filter((note)=> note.title === title);

if(duplicateNotes.length === 0){
  notes.push(note);
  saveNotes(notes);
  return note;
} else {
  console.log('Duplicate title');
}
};

 var getAll = ()=>{
   console.log('Getting all the notes');
 }

 var getTitle =(title)=>{
   console.log('Getting the title ' , title);
 }

var removeTitle = (title)=>{
  // console.log('Removing the title ' , title);
var notes = fetchNotes();
var updatedNotes = notes.filter((note)=> note.title != title);
saveNotes(updatedNotes);
// console.log('Removed note with title: ',title)

if( notes.length != updatedNotes.length) {
  return `${title} note was removed successfully`;
} else {
  return  `${title} note could not be found , hence cannot be removed`;
}

}

module.exports={addNote,getAll,getTitle,removeTitle};
