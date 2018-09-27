const readline = require('readline');
var re = /\([^)]*\)|\[[^\]]*\]/g;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please type some text? ', (answer) => {
    // TODO: Log the answer in a database
    if(answer.match(re)){
        console.log("HACE MATCH");
    } else {
        console.log("NO HACE MATCH");
    }

    rl.close();
});