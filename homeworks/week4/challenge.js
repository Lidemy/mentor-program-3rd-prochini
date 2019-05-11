const request = require('request');

let cursor = '';

function req() {
  request.get({
    url: `https://api.twitch.tv/helix/streams?first=100&game_id=21779&after=${cursor}`,
    headers:
      { 'Client-ID': 'ry76htktupl8mlicd29yf9xhrc2opo' },
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const obj = JSON.parse(body);
      obj.data.forEach((e) => { console.log(`${e.id}  ${e.user_name}`); });
      cursor = obj.pagination.cursor;
    }
  });
}
req();
setTimeout(() => { req(); }, 500);
