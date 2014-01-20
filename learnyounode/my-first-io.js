var fs = require('fs');
var path = process.argv[2];
var contents = fs.readFileSync(path).toString();
var contentArr = contents.split('\n');
console.log(contentArr.length-1);