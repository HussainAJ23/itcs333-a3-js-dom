// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.
// TODO: your code here

  document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  const errorMsg = document.getElementById('error-msg');
  const counter = document.getElementById('counter');
  let filter = 'all';
 function update() {
    let left = 0;
 
    list.querySelectorAll('li').forEach(function (li) {
      const done = li.classList.contains('completed');
      if (!done) left++;
 
      if (filter === 'all' || (filter === 'active' && !done) || (filter === 'done' && done)) {
        li.classList.remove('hidden');
      } else {
        li.classList.add('hidden');
      }
    });
 
    counter.textContent = left + (left === 1 ? ' item left' : ' items left');
  }});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const text = input.value.trim();
 
    if (text === '') {
      errorMsg.classList.remove('hidden');
      return;
    }
    errorMsg.classList.add('hidden');
 
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = text;
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.className = 'delete-btn';
 
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
 
    input.value = '';
    update();
  });
 
  list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.remove();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.classList.toggle('completed');
    }
    update();
  });


