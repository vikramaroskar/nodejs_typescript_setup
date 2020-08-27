# nodejs_typescript_setup

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)


nodejs_typescript_setup

### Install typescript

`sudo npm install -g typescript`

After install, we can check

`C:\dev\github>tsc --version Version 3.8.3`

Create file app.ts

`C:\dev\github\nodejs_typescript_setup>tsc app.ts`

This generates app.js file in the same folder

TO constantly watch the file.
`C:\dev\github\nodejs_typescript_setup>tsc app.ts -w`

Not to do this, ideally, generate a config.
So do a `tsc --init`
THis will generate a tsconfig.json

In this file,
enable outdir, rootdir for output js and source ts files respectively.

Most importantly, need to enable,

<pre>
"moduleResolution": "node", /_ Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). _/

</pre>

Now, to compile, just do
`tsc`
no file name etc required, as it will pickup config file.

---

### Node setup

`npm init`

Install regular express

`npm install express --save`

Rest install dev dependencies

`nodejs_typescript_setup>npm i -D typescript ts-node nodemon @types/node @types/express`

These are specific node and express based types.

Create scripts in <b>package.json</p>

`"scripts" {"start": "node dist/app.js", "dev": "nodemon src/app.ts", "build": "tsc -p ."}`

---

Code setup

in app.ts,

##### we can import because of typescript instead of require etc

`import express from "express";`

Write code with endpoints etc

`npm run dev`

<pre>
C:\dev\github\nodejs_typescript_setup>npm run dev

> nodejs_typescript_setup@1.0.0 dev C:\dev\github\nodejs_typescript_setup
> nodemon src/app.ts

[nodemon] 2.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): _._
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/app.ts`
Server running...
`

</pre>

ANd `http://127.0.0.1:5000/` this will return hello

Also, when dev is done, to actually build

<pre>
C:\dev\github\nodejs_typescript_setup>npm run build

> nodejs_typescript_setup@1.0.0 build C:\dev\github\nodejs_typescript_setup
> tsc -p .

</pre>

This will create js in dist folder.
It will use arrow function etc depending on es5 or es6 as target etc.

To, run the normal js as start

<pre>
C:\dev\github\nodejs_typescript_setup>npm start

> nodejs_typescript_setup@1.0.0 start C:\dev\github\nodejs_typescript_setup
> node dist/app.js

Server running...
3


</pre>
