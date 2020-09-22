//take in args from CL and slice so we only have desired args in our array
const args = process.argv.slice(2);


// we will receive an array of the alarm times  
// we need to make the alarm ring based on each of the times provided

for (let time of args) {
  //convert element to number since they are default strings with process argv
  time = Number(time);
  if (time >= 0 || typeof time === Number) {
    setTimeout(() => {
      beep();
    }, time * 1000);
  }
};

const beep = function() {
  //beep won't work on my OS 
  process.stdout.write('. BEEP . \n');
}


