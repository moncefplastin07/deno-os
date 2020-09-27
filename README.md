# DenoOs
**Required permissions:** 
- ``--allow-env``
- ``--allow-read``
### import the module in your deno app
```js
import os from 'https://deno.land/x/dos@v0.1.0/mod.ts'
```
#### Usage:
##### get Os platform (windows, linux, darwin on mac ..):
Added in: ``v0.1.0``
```js
os.paltform() // return the os platform for eg: windows, linux, darwin on mac ..
```

##### get Os name (x86, x64):
Added in: ``v0.1.0``
```js
os.arch() // return the os architecture x86 Or x64
```
##### get system user home directory pthe:
Added in: ``v0.1.0``
```js
os.homeDir() // return the system home directory 
```
##### get Os temp directory pthe:
Added in: ``v0.1.0``
```js
os.tempDir() // return the system temp directory
```

## Contribute with us from [``her``](https://github.com/moncefplastin07/deno-os)