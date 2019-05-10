const request = require('request');
const process = require('process');

if (process.argv[2] === 'read') {
  request.get(
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
} else if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,

  );
  console.log(`成功刪除 id 為 ${process.argv[3]} 的書籍`);
} else if (process.argv[2] === 'create') {
  request.post(
    'https://lidemy-book-store.herokuapp.com/books', {
      form: {
        name: process.argv[3],

      },
    },
    console.log(`成功新增一本名為 ${process.argv[3]} 的書`),
  );
} else if (process.argv[2] === 'update') {
  request.patch(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, {
      form: {
        name: process.argv[4],
      },
    },
    console.log(`成功更新 id 為 ${process.argv[3]} 的書名為 ${process.argv[4]}`),
  );
}
