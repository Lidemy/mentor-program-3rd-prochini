const request = new XMLHttpRequest();
request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);

request.responseType = 'text';

request.onload = function load() {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    const { prize } = json;
    console.log(json);
    if (json.error) {
      alert('系統不穩定，請再試一次');
    }
    switch (prize) {
      case 'FIRST':
        document.querySelector('body').style.background = 'skyblue';
        document.querySelector('.first').style.display = 'block';
        break;
      case 'SECOND':
        document.querySelector('.second').style.display = 'block';
        break;
      case 'THIRD':
        document.querySelector('.third').style.display = 'block';
        break;
      case 'NONE':
        document.querySelector('body').style.background = 'black';
        document.querySelector('.none').style.display = 'block';
        break;
      case 'undefined':
        alert('系統不穩定，請再試一次');
        break;
      default:
        // do nothing
    }
  } else {
    alert('系統不穩定，請再試一次');
  }
};
request.onerror = () => {
  console.log('error');
};

request.send(null);
