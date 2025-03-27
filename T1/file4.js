const message = function () {
  console.log("After 3 seconds");
};
setTimeout(message, 3000);
setTimeout(function () {
  console.log("Direct Function");
}, 5000);
setTimeout(() => {
  console.log("Arrow Function");
}, 2000);
