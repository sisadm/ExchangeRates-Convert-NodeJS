const http = require('http');
const prompt = require('prompt-sync')({sigint: true});

// functions 

// starting message 

function startingMsg() {
	console.log(`Hello There!`);
	let num = prompt(`Enter your value in Euro to convert to whatever you want: `);
	
}