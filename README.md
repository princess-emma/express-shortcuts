# express-shortcuts
A very simple [Node.JS](https://nodejs.org/) library intended to speed up the coding time and reduce the file length (and therefore ending up with more readable code) in simple express projects.<br>
I don't see any reason not to use this on larger projects too if you like the simplicity, but it is designed with simple projects in mind.
## Installation
The package is aviable in the [npm registry](https://npmjs.com/package/express-shortcuts). You can install it on the command line using the following command:
```
npm i express-shortcuts
```
## Examples
There are two ways to use the library.
### Import what you need
Import only the functions needed on each file.
```js
const { send } = require('express-shortcuts');

app.get('/', send('Hello!'));
```
### Save the functions on the global variable
Import once at the start and use the functions everywhere.
```js
// index.js
require('express-shortcuts')._inject();

// hi.js
app.get('/hi', send('hi'));

// bye.js
app.get('/bye', render('bye_page'));
```
