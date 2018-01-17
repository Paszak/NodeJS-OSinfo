var osinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
console.log('Dostępne komendy to /exit | /info | /getOSinfo');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
    		case '/exit':
    			process.stdout.write('Quitting app!\n');
    			process.exit();
    		break;
    		
    		case '/info':
    			console.log(process.versions);
    		break;

    		case '/getOSinfo':
    			osinfo.print();
    		break;

    		default:
    			process.stderr.write('Wrong instruction\n');
    	};
    }  
});


