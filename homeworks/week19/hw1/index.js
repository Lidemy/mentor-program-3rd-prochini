/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
$(() => {
  const baseUrl = 'http://prochini.com/todolist/api.php';

  function render() {
    $.ajax({
      type: 'GET',
      url: baseUrl,
      success(data) {
        $('.inputMission').val('');
        $('.list').empty();
        const json = JSON.parse(data);
        if (json.length > 0) {
          $.each(json, (i, e) => {
            $('.list').append(`<li class="list-group-item" >${e.content}
            <span class="badge" data-status="${e.done}"></span>
            <button type="button" class="btn btn-info delete btn-warning"id ="${e.id}">Delete</button>
            <button type="button" class="btn btn-info completed btn-secondary" id ="${e.id}">Finish</button>
            </li>`);
            if (e.done === '1') {
              $('span[data-status="1"]').addClass('badge-danger');
              $('span[data-status="1"]').text('Done!');
            }
          });
        }
      },
      error() {
      },
    });
  }
  render();
  function insertPost() {
    const content = $('.inputMission').val();
    if (!content === '') {
      $.ajax({
        type: 'POST',
        url: baseUrl,
        dataType: 'text',
        data:
            {
              content,
              done: 0,
            },
        success() {
          render();
        },
        error() {
        },
      });
    } else alert('gimme something todo');
  }

  function removeTodo(id) {
    const url = `${baseUrl}?id=${id}`;
    $.ajax({
      type: 'DELETE',
      url,
      dataType: 'text',
      success() {
        render();
      },
      error() {
      },
    });
  }

  function completedTodo(id, status) {
    const url = `${baseUrl}?id=${id}&status=${status}`;

    $.ajax({
      type: 'PATCH',
      url,
      dataType: 'text',
      success() {
        render();
      },
      error() {
      },
    });
  }
  $('.inputMission').on('keypress', (e) => {
    if (e.which === 13) {
      insertPost();
    }
  });
  $('.container').click((e) => {
    const { id } = e.target;
    let status = $(event.target).prev().prev().data('status');
    if (event.target.classList.contains('completed')) {
      if (status === '1') {
        status = '0';
      } else {
        status = '1';
      }
      completedTodo(id, status);
    }
    if (event.target.classList.contains('delete')) {
      removeTodo(id);
    }
  });
});
