const fs = require('fs');


const data = JSON.parse(fs.readFileSync('hw-1-json.json').toString());

fs.writeFileSync(
	'hw-1-json.json',
	JSON.stringify({...data, age: 30}, null, 2)
)
