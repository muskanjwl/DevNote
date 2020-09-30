const fs= require('fs')
const chalk=require('chalk')
const getNotes=()=>{
    try{
        const dataBuffer= fs.readFileSync('notes.JSON')
        const dataJSON= dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const saveNotes=(notes)=>{
    const dataJSON= JSON.stringify(notes);
    fs.writeFileSync('notes.JSON',dataJSON)
}

const addNote=(title,body)=>{
    const notes=getNotes()
    const duplicateNotes= notes.filter((note)=>note.title==title)
    if(duplicateNotes.length==0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.underline('New Note Added'))
    }
    else{
        console.log(chalk.red.bold.underline('note title taken try another'))
    }  
}
const removeNote=(title)=>{
    const notes= getNotes()
    const newNotes= notes.filter((note)=>note.title!=title)
    if(newNotes.length==notes.length-1){
        saveNotes(newNotes)
        console.log(chalk.green.bold.underline('Note removed sucessfully'))
    }
    else{
        console.log(chalk.red.bold.underline('No note found!'))
    }
}
const listNotes=()=>{
    const notes=getNotes()
    notes.forEach(note => {
        console.log(chalk.magenta.bold(note.title))
        console.log(chalk.blue.italic(note.body))
    });

}

const readNote=(title)=>{
    const notes=getNotes()
    const targetNote= notes.filter((note)=>note.title==title)

    if(targetNote.length==0){
        console.log(chalk.red.bold.underline('No note found!'))
    }else{
        console.log(chalk.magenta.bold(targetNote[0].title))
        console.log(chalk.blue.italic(targetNote[0].body))
    }

}
module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}