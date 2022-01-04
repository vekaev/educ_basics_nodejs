const yargs = require('yargs');

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

yargs.command({
	command: 'forecast',
	describe: 'Get temp by location',
	builder: {
		city: {
			describe: 'City',
			demandOption: true, //Its make this option REQUIRED
			type: 'string'
		},
	},
	handler: ({city}) => {
		geocode(city, (e, data) => {
			if (data) {
				forecast(data, (_, data) => console.log(data))
			}
		})
	}
}).parse();





