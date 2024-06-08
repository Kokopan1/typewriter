const sentence = "hello there from lighthouse labs";

const delay = function (sen) {
  let string = sen;
  let counter = 0;
  for (const char of string) {
    //process.stdout.write(char);
    
  setTimeout(() => {
    process.stdout.write(char);
  }, counter * 50); 
  counter++
  }
  
  setTimeout(() => {
    process.stdout.write('\n');
  }, counter * 50);
};



delay("hello there from lighthouse labs")
