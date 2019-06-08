function loadData(origin, offset) {
  const request = new XMLHttpRequest();
  const container = document.querySelector(origin);
  const url = `https://api.twitch.tv/kraken/streams/?client_id=ry76htktupl8mlicd29yf9xhrc2opo&game=League%20of%20Legends&limit=20${offset}`;
  request.addEventListener('load', () => {
    container.classList.add('wrapper');
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const json = JSON.parse(response);
      const stream = [];
      json.streams.forEach((e) => { stream.push(e); });
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
      const updateButton = document.createElement('button');
      updateButton.classList.add('btn');
      updateButton.classList.add('updateButton');
      updateButton.textContent = 'show more';
      container.appendChild(updateButton);
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
loadData('.wrapper', '');
let parameter = loadData('.wrapper', '');;
var update = document.querySelector('.updateButton');

window.onload=function(){
  var update = document.querySelector('.updateButton');
  update.addEventListener('click',parameter);
}

