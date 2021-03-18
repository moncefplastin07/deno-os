# DenoOs

**Environnement information**

### Import the module in your deno app

```js
import os from "https://deno.land/x/dos@v0.11.0/mod.ts";
```

#### Usage:

##### get Os platform (windows, linux, darwin on mac):

Added in: `v0.1.0`

```js
os.platform() // return the os platform for eg: windows, linux, darwin on mac ..
```

##### get Os name (x86, x64):

Added in: `v0.1.0`

```js
await os.arch() // return the os architecture x86 Or x64
```

##### get system user home directory pthe:

Added in: `v0.1.0` **Required permissions:**

- `--allow-env`

```js
os.homeDir() // return the system home directory
```

##### get Os temp directory path:

Added in: `v0.1.0` **Required permissions:**

- `--allow-env`

```js
os.tempDir() // return the system temp directory.
;
```

##### get operating system end-of-line:
get operating system `end-of-line` marker, e.g: `\n` in Linux and Mac, `\r\n` in Windows.

Added in: `v0.11.0` 
```js
os.EOL() // return the operating system end-of-line marker
```

##### get operating system hostname:
get operating system `hostname`. unstable API (Require --unstable flag)

Added in: `v0.11.0` 
```js
os.hostname() // return the operating system operating system hostname.
```
## Contribute with us from [`here`](https://github.com/moncefplastin07/deno-os)
