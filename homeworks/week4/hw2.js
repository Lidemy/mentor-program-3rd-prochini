const request = require('request');
const process = require('process');


if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const obj = JSON.parse(body);
      console.log(obj.name);
    },
  );
} else if (process.argv[2] === 'list') {
  request.get('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const obj = JSON.parse(body);
      for (let i = 0; i < 20; i += 1) {
        console.log(`${obj[i].id}  ${obj[i].name}`);
      }
    });
}
