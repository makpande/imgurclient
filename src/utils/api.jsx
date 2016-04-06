var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '17c506fefed04db';


module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl, url {
      headers: {

          //'authorization': 'Client-ID ' + apiKey
        }
    })

    .then(function(response) {
      return response.json();
    });
  }
};
