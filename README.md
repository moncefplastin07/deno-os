# DenoOs
**Environnement information**
### Import the module in your deno app
```js
import os from 'https://deno.land/x/dos@v0.1.2/mod.ts'
```
#### Usage:
##### get Os platform (windows, linux, darwin on mac):
Added in: ``v0.1.0``
```js
os.paltform() // return the os platform for eg: windows, linux, darwin on mac ..
```

##### get Os name (x86, x64):
Added in: ``v0.1.0``
```js
await os.arch() // return the os architecture x86 Or x64
```
##### get system user home directory pthe:
Added in: ``v0.1.0``
**Required permissions:** 
- ``--allow-env``

```js
os.homeDir() // return the system home directory 
```
##### get Os temp directory path:
Added in: ``v0.1.0``
**Required permissions:** 
- ``--allow-env``

```js
os.tempDir() // return the system temp directory
```

## Contribute with us from [``here``](https://github.com/moncefplastin07/deno-os)
