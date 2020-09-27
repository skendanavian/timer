//enable stdin to listen for keypress data and trigger timer functions
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8')

process.stdout.write('Welcome to the timer App!\n Press b to trigger timer\n Press any number between 1-9 to set timer respectively!\n')

// Take in inputs and call functions accordingly
stdin.on('data', (key) => {
  //call timer function on any key press. Check the conditions of the key in timer. 
  timer(key);

  if (key === 'b') {
    beep();
  };
  //exit the program
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
})


// New Timer Function - takes in the time from the number keypress.
const timer = function(time) {
  let inputTime = Number(time);
  if (inputTime > 0 && inputTime < 10) {
    process.stdout.write(`Setting timer for ${inputTime} seconds...\n`)
    setTimeout(() => {
      beep();
    }, inputTime * 1000);
  }
};

const beep = function() {
  //beep won't work on my OS 
  process.stdout.write('. BEEP . \n');
}


