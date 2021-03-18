import os from "./mod.ts";

console.log(os.platform());
console.log(await os.arch());
console.log(os.tempDir());
console.log(os.homeDir());
console.log(os.EOL());
console.log(os.hostname());
