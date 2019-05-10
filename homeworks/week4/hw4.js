
const request = require('request');

const options = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'client-id': 'ry76htktupl8mlicd29yf9xhrc2opo',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    console.log(info.data);
    info.data.forEach((item) => {
      console.log(`${item.id}  ${item.name}`);
    });
  }
}

request(options, callback);
