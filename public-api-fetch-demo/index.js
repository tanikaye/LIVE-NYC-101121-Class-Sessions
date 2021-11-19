// const fetch = require('node-fetch')
import fetch from "node-fetch"

fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
		"x-rapidapi-key": "3d001f9d8emshad8baf330954b72p18c7d7jsnd54d7284750d"
	}
})
.then(response => response.json())
.then(console.log)
.catch(err => {
	console.error(err);
});