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
			callback(null, data);
		}
	})
}