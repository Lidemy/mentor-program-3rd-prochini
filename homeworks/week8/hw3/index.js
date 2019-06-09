function loadData(gameName, offset) {
  const request = new XMLHttpRequest();
  const container = document.querySelector('.wrapper');
  const url = `https://api.twitch.tv/kraken/streams/?client_id=ry76htktupl8mlicd29yf9xhrc2opo&game=${gameName}&limit=20&${offset}`;
  console.log(url);
  request.addEventListener('load', () => {
    container.classList.add('wrapper');
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const json = JSON.parse(response);
      const stream = [];
      json.streams.forEach((e) => { stream.push(e); });
      if (stream.length === 0) { return false; }
      for (let i = 0; i < stream.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.innerHTML = `            
        <div class="box" style="cursor:pointer;"onclick="location.href='${stream[i].channel.url}';">
        <img class="preview" src="${stream[i].preview.large}" alt="">
        <div class="info">
            <img class="avatar" src="${stream[i].channel.logo}" alt="">
            <div class="title">
            <h1 class="display_name">${stream[i].channel.status}</h1>
            <h2 class="name">${stream[i].channel.display_name}</h2>
            </div>
        </div>
        </div>
          `;
        container.appendChild(div);
      }
      if (stream.length === 20) {
        const updateButton = document.createElement('button');
        updateButton.classList.add('btn');
        updateButton.classList.add('updateButton');
        updateButton.textContent = 'show more';
        container.appendChild(updateButton);
      }
    } else {
      console.log(request.status);
    }
  });
  request.onerror = () => {
    console.log('error');
  };
  request.open('GET', url, true);

  request.send(null);
}

function getGameName() {
  const gameName = [];
  const gameList = [];
  const getName = new XMLHttpRequest();
  getName.open('GET', 'https://api.twitch.tv/kraken/games/top/?client_id=ry76htktupl8mlicd29yf9xhrc2opo&limit=100', true);
  getName.send(null);
  getName.onload = () => {
    if (getName.status >= 200 && getName.status < 400) {
      const data = JSON.parse(getName.responseText);
      data.top.forEach((e) => { gameName.push(e); });
      for (let i = 0; i < gameName.length; i += 1) {
        gameList.push(gameName[i].game.name);
        const checkname = document.querySelector('#games');
        const option = document.createElement('option');
        option.setAttribute('value', `${gameList[i]}`);
        checkname.appendChild(option);
      }
    } else console.log('getGameName failed');
  };
}
getGameName();

let currentGame = 'League+of+Legends';
let inputName = '';
document.querySelector('.search').addEventListener('click', () => {
  inputName = document.querySelector('#checkname').value;
  currentGame = encodeURIComponent(inputName);
  document.querySelector('.wrapper').innerHTML = '';
  document.querySelector('.gameName').textContent = inputName;
  loadData(currentGame, '');
});
// 第一波
loadData('League+of+Legends', '');

// 滾輪更新
let offset = 0;
window.addEventListener('scroll', () => {
  const html = document.documentElement;
  if ((window.innerHeight + html.scrollTop) >= html.scrollHeight - 20) {
    offset += 20;
    loadData(currentGame, `offset=${offset}`);
  }
});
