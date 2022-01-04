// const request = require("request");
const http = require('https');

const MAP_API_KEY = 'pk.eyJ1IjoidmVrYWV2IiwiYSI6ImNrdmdmdjY3cDFjajIycHE1MDBpNW5iaWkifQ.kTN6r_V2YawKERuQKnrLVA';


const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${MAP_API_KEY}`;

	// request({url, json: true}, (error, res) => {
	// 	try {
	// 		if (error) throw new Error(error);
	//
	// 		const [city] = res.body.features || [];
	//
	// 		if (!city) throw new Error('This address does not exist');
	//
	// 		const [lat, long] = city.geometry.coordinates;
	//
	// 		callback(null, {lat, long, name: city.place_name})
	// 	}	catch (e) {
	// 		callback(e.message, null)
	// 	}
	// });


	const request = http.request(url, res => {
		let data = '';

		res.on('data', chunk => {
			data += chunk.toString();
		});

		res.on('end', () => {
			const [city] = JSON.parse(data).features || [];

			if (!city) throw new Error('This address does not exist');

			const [lat, long] = city.geometry.coordinates;

			callback(null, {lat, long, name: city.place_name})
		});
	})

	request.on('error', error => {
		console.log(error)
		callback(error.message, null)
	})

	request.end()
}

module.exports = geocode;
