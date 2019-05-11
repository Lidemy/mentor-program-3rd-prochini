const request = require('request');
const process = require('process');

const name = process.argv[2].split(' ').join('+');
let gameId = '';
let cursor = '';

function gameName() {
  request.get({
    url: `https://api.twitch.tv/helix/games?name=${name}`,
    headers:
        { 'Client-ID': 'ry76htktupl8mlicd29yf9xhrc2opo' },
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const obj = JSON.parse(body);
      obj.data.forEach((e) => { gameId = e.id; });
    }
  });
}
gameName();

function req() {
  request.get({
    url: `https://api.twitch.tv/helix/streams?first=100&game_id=${gameId}&after=${cursor}`,
    headers:
      { 'Client-ID': 'ry76htktupl8mlicd29yf9xhrc2opo' },
  },
  (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const obj = JSON.parse(body);
      obj.data.forEach((e) => { console.log(`${e.id}  ${e.user_name}`); });
      cursor = obj.pagination.cursor;
      console.log(`本遊戲 ${process.argv[2]} 最受歡迎直播`);
    }
  });
}

setTimeout(() => { req(); }, 1000);
setTimeout(() => { req(); }, 2000);
