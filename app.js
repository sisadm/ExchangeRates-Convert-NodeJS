const http = require('http');
const prompt = require('prompt-sync')({sigint: true});

// functions 

// starting message 

function startingMsg() {
	console.log(`Hello There!`);
	let num = prompt(`Enter your value in Euro to convert to whatever you want: `);
	let convertTo = prompt(`Please use tree-letter currency code: `);

	if(/(.*[a-z]){3}/i.test(convertTo)) {

	} else {
		console.error(`Please use only three letters, for example USD/GBP`);
	}
}