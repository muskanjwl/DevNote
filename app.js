const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string' 
        }
    },
    handler:(argv)=>note.addNote(argv.title,argv.body)
    
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=> note.removeNote(argv.title)
})
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler:()=>note.listNotes()
   
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>note.readNote(argv.title)
    
})

yargs.parse()