'use strict';

const list = document.querySelector('.container__list'),
      listItems = document.querySelectorAll('.list__item'),
      btnSortUp = document.querySelector('.js-btn-sort-up'),
      btnSortDown = document.querySelector('.js-btn-sort-down');

btnSortUp.addEventListener('click', () => {
  let sorted  = [...listItems];

  sorted.sort((a, b) => a.innerHTML - b.innerHTML);
  list.innerHTML = '';

  for (let li of sorted) {
    list.append(li);
    console.log(li)
  }
});

btnSortDown.addEventListener('click', () => {
  let sorted = [...listItems].sort((b, a) => {
    return a.innerHTML - b.innerHTML;
  });

  list.innerHTML = '';

  for (let li of sorted) {
    list.append(li);
  }
});
