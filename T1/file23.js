import ch from "chalk";
console.log(ch.red("LJU"));
console.log(ch.red.underline("University"));
console.log(ch.bgCyan("Good Morning"));
const log = console.log;
log(ch.blue.underline.bgYellow("Hello"));
const success = ch.green;
log(success("limited"));
