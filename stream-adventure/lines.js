var split = require('split');
var through = require('through');

var lineCount = 0;

var tr = through(
	function(buf){
		var line = buf.toString();
		if(lineCount%2===0){
			this.queue(line.toLowerCase()+'\n');
		}else{
			this.queue(line.toUpperCase()+'\n');
		}
		lineCount++;
	})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);