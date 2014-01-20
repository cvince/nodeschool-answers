var concat = require('concat-stream');

var cc = concat(
	function(buf){
		var stringContents = buf.toString().split('').reverse().join('');
		console.log(stringContents);
	}
)

process.stdin.pipe(cc);