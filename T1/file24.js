import v from "validator";
let email = "test@gmail.com";
console.log(v.isEmail(email));
email = "test@";
console.log(v.isEmail(email));
