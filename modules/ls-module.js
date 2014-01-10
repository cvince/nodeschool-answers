// function bar (callback){
// 	function (err, data){
// 		if (err) return callback(err);
// 		callback(null, data);
// 	}
// }

var fs = require('fs');
var path = require('path');

module.exports = function (fpath, ftype, callback) {

	fs.readdir(fpath, function(err, data){
		if ( err ){
		    return callback( err );
		}else {
			var list = [];
				for (var i=0; i<data.length; i++){
					if (path.extname(data[i]) == '.'+ftype){
						list.push(data[i]);
					}		
				}
			callback(null, list);
		}
	})
}