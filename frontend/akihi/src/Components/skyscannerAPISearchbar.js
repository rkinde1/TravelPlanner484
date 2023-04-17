
/*https://developers.skyscanner.net/docs/category/getting-started*/
//In the process of doing other things
/*SkyScanner API Code for finding live flights
const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create',
  headers: {
    'content-type': 'application/json',

  },
  data: '{"query":{"market":"UK","locale":"en-GB","currency":"EUR","queryLegs":[{"originPlaceId":{"iata":"LHR"},"destinationPlaceId":{"iata":"DXB"},"date":{"year":2023,"month":9,"day":20}}],"cabinClass":"CABIN_CLASS_ECONOMY","adults":2,"childrenAges":[3,9]}}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
* */

/*SkyScanner API Code for finding live hotel prices
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://skyscanner-api.p.rapidapi.com/v3e/hotels/live/search/poll/1/%7BsessionToken%7D',
  headers: {

};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
* */