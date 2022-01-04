const request = require("request");

const WHEATHER_API_KEY = '0efce61a11342b9bab62222ec238aaa4';

const forecast = (location, callback) => {
	const query = `${location.long},${location.lat}`;
	const url = `http://api.weatherstack.com/current?access_key=${WHEATHER_API_KEY}&query=${query}`;

	request({ url, json: true }, (error, res) => {
		try {
			if (error) throw new Error(error);

			const { current } = res.body;
			const { temperature } = current;

			callback(null, `${location.name}: ${temperature}°`)
		} catch (error) {
			callback(error.message, null)
		}
	})
}

module.exports = forecast;
