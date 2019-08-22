/* eslint-disable no-param-reassign */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
$(() => {
  let list = [];
  let index = 0;

  function render() {
    $('.list').empty();
    $('.list').append(list.map(item => `<li class="list-group-item "><label><input name="mission" type="radio" id ="${item.id}">${item.content}</label><span class="badge badge-pill ${item.done ? 'badge-danger' : ''}">${item.done ? 'Done!' : ''}</span></li>`));
  }

  function addTodo(todo) {
    list.push(todo);
    render();
  }

  function removeTodo(id) {
    list = list.filter(item => item.id != id);
    render();
  }

  function completedTodo(id) {
    list.forEach((item) => {
      if (id == item.id) {
        item.done = true;
      }
    });
    render();
  }
  $('.inputMission').on('keypress', (e) => {
    if (e.which == 13) {
      const todo = {
        id: index,
        content: $('.inputMission').val(),
        done: false,
      };
      addTodo(todo);
      index += 1;
    }
  });
  $('.completed').click(() => {
    const id = $('input:checked').attr('id');
    completedTodo(id);
  });
  $('.delete').click(() => {
    const id = $('input:checked').attr('id');
    removeTodo(id);
  });
});
