const fs = require('fs');
const notesUtils = require('./notes.js');
const yargs = require('yargs');

//FIRST CHALLENGE START

//Create file and overwrite it
// fs.writeFileSync('hi.txt', 'Hi,');
// fs.appendFileSync('hi.txt', '\nhello world');

//FIRST CHALLENGE END

//SECOND CHALLENGE START

//Create utils file and export from it function
// const {sum : add} = require('./utils');

// console.log(add(2, 5))

//SECOND CHALLENGE END


//THIRD CHALLENGE START

//Install chalk library v2.4 and use it ((npm i chalk@2.4.1))
// const chalk = require('chalk');
// const error = chalk.bold.inverse.red;
//
// console.log(chalk.yellow.bgBlue.bold(' Hello world! '), error(' FIRE!!! '));
//THIRD CHALLENGE END


// FOURTH CHALLENGE START

//node app --title=NodeApp
// if (yargs.argv.title) console.log(yargs.argv.title) //NodeApp

//create yargs command with additional script

//MY VERSION
// yargs.command(
//   'hello [name]',
//   'function to say hello',
//   (yargs) => {
//     yargs.positional('name', {
//       type: 'string',
//       default: 'YOUR NAME',
//       describe: 'The name to say hello to',
//     })
//   },
//   (argv) => {
//     console.log(`Hello ${argv?.name}`)
//   }
// ).argv

//TEACHER VERSION
//node app add --title="hello"  --body="bodies"  ===>  hello bodies
yargs.command({
  command: 'add',
  describe: 'add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, //Its make this option REQUIRED
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true, //Its make this option REQUIRED
      type: 'string'
    }
  },
  handler: (argv) => {
    notesUtils.addNote(argv.title, argv.body)
  }
}).parse();

// FOURTH CHALLENGE END

// FIFTH CHALLENGE START
// CHALLENGE END

// CHALLENGE START
// CHALLENGE END
