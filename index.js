var args = process.argv.slice(2);
var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('', proxy(args[1]+':'+args[2]));
app.listen(args[0]);
