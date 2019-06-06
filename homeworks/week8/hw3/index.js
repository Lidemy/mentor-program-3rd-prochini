const request = new XMLHttpRequest();
const container = document.querySelector('.wrapper');
request.addEventListener('load', () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    const stream = [];
    json.streams.forEach((e) => { stream.push(e); });

    for (let i = 0; i < stream.length; i += 1) {
      const div = document.createElement('div');
      div.classList.add('video');
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
  } else {
    console.log(request.status);
  }
});
request.onerror = () => {
  console.log('error');
};
request.open('GET', 'https://api.twitch.tv/kraken/streams/?client_id=ry76htktupl8mlicd29yf9xhrc2opo&game=League%20of%20Legends&limit=20', true);

request.send(null);
