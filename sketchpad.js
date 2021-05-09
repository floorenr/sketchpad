const container = document.querySelector('.container');
let divs = document.querySelectorAll('.sketchblocks');

function addListeners() {
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'black';
    });
  });
}

function setupSketchfield(resolution) {
  let totalBlocks = (resolution ** 2);
  for (let i = 0; i < totalBlocks; i++) {
    const div = document.createElement('div');
    div.classList.add('sketchblocks'); 
    container.appendChild(div);
    divs = document.querySelectorAll('.sketchblocks');
    addListeners();
  }
};

setupSketchfield(16);



function reset() {
  divs.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
  let input = parseInt(prompt("Set resolution of next Etch-a-Sketch (1-100)"));
  if ((input > 100) || (input < 1) || (isNaN(input))) {
    alert("Please enter a number between 1 and 100");
    return;}
  else { 
    removeSketchblocks();
    setupSketchfield(input);
  }
}

function removeSketchblocks() {
  divs = document.querySelectorAll('.sketchblocks');
  for (let i = 0; i < divs.length; i++) {
    container.removeChild(divs[i]);
  }
}