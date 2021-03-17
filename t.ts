import os from "https://deno.land/x/dos@v0.1.2/mod.ts";

console.log(os.platform());
console.log(await os.arch());
console.log(os.tempDir());
console.log(os.homeDir());
