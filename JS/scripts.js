'use strict';

const house = document.querySelector('#house');
let tool;

house.addEventListener('mouseover', (event) => {
  let target = event.target.closest('[data-tooltip]');

  tool = document.createElement('div');
  tool.className = 'tooltip';
  tool.innerHTML = target.dataset.tooltip;

  let coords = target.getBoundingClientRect();

  house.append(tool);

  let toolTop = coords.top - tool.offsetHeight;

  if (toolTop < 0) {
    tool.style.top = (coords.bottom + 3) + 'px';
  } else {
    tool.style.top = (coords.top - tool.offsetHeight - 3) + 'px';
  }

  tool.style.left = (coords.left + coords.width - tool.offsetWidth) / 2  + 'px';

  console.log(coords.top);
  console.log(coords.left);
  console.log(coords.width);
  console.log(tool.offsetWidth);
  console.log(toolTop);
});

house.addEventListener('mouseout', (event) => {
  if (tool) {
    tool.remove();
    tool = false;
  }
});
