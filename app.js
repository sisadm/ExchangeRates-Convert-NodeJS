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

// calculating 

function calc(inputVal, currencyCode, CurrencyValue) {
	return console.log(`Your ${inputVal}EUR is worth${Number(inputVal * CurrencyValue)}${currencyCode}`);
};


// get API request

function getExchange(currencyCode, number) {
	const request = http.get('http://api.exchangeratesapi.io/v1/latest?access_key=7195c5da9b3d875607f73a4e06068b51', response => {
		let body = '';
		currencyCode = currencyCode.toUpperCase();

		response.on('data', data=> {
			body += data.toString();
		})

		response.on('end', () => {
			const exch = JSON.parse(body);
			
		})
	})
}