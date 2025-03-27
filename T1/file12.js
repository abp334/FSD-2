let fs = require("fs");
let os = require("os");

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.freemem()); // In Byter available memory

//write node js to create a folder name os in temp folder also create file named temp.txt inside os folder now check if available physical memory
// of the system is greater than 1 gb then write sufficient memory in the file else write insufficient memory in file

fs.mkdirSync(os.tmpdir() + "/OS");

let memo = () => {
  let mem = os.freemem();
  if (mem / 1024 / 1024 / 1024 >= 1) {
    return "Sufficient memory";
  }
  return "Insufficient memory";
};

fs.writeFileSync(os.tmpdir() + "/OS/temp.txt", memo());

//Write nodejs script to create folder name platform at temp folder also create file name  find.txt inside platform folder if platform is win32 then write then write you are working in win32 bit else print on console you are not worling on 32 bit
