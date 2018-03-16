var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
	alert(11111);
    exec(success, error, 'TestPL', 'coolMethod', [arg0]);
};
