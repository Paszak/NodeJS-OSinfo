var os = require('os');
var time = require('../modules/Time');
var colors = require('colors'); 

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
		
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
		
	console.log(colors.grey('System:'), type);
	console.log(colors.red('Release:'), release);
	console.log(colors.magenta('CPU model:'), cpu);
	console.log(colors.green('Uptime: ~'), time.workingTime(uptime));
	console.log(colors.yellow('User name:'), userInfo.username);
	console.log(colors.rainbow('Home dir:'), userInfo.homedir);
}

exports.print = getOSinfo;