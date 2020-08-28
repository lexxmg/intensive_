'use strict';

const house = document.querySelector('#house');
let tool;

house.addEventListener('mouseover', (event) => {
  let target = event.target.closest('[data-tooltip]');

  tool = document.createElement('div');
  tool.className = 'tooltip';
  tool.innerHTML = target.dataset.tooltip;

  let top = target.getBoundingClientRect().top;
  let bottom = target.getBoundingClientRect().bottom;
  let left = target.getBoundingClientRect().left;
  let width = target.getBoundingClientRect().width;

  house.append(tool);

  let toolWidth = tool.offsetWidth;
  let toolHheight = tool.offsetHeight;
  let toolTop = top - toolHheight;

  if (toolTop < 0) {
    tool.style.top = (bottom + 3) + 'px';
  } else {
    tool.style.top = (top - toolHheight - 3) + 'px';
  }

  tool.style.left = (left + width - toolWidth) / 2  + 'px';

  console.log(top);
  console.log(left);
  console.log(width);
  console.log(toolWidth);
  console.log(toolTop);
});

house.addEventListener('mouseout', (event) => {
  if (tool) {
    tool.remove();
    tool = false;
  }
});

function createTool() {

}
