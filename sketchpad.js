const container = document.querySelector('.container');
let divs = document.querySelectorAll('.sketchblocks');
const body = document.querySelector('body');

function addListeners() {
  divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
      let opac = Number(div.getAttribute('opac'));
      div.style.setProperty("--opacity", opac + 0.2);
      div.setAttribute('opac', (opac + 0.2));
    });
  });
}

function setupSketchfield(resolution) {
  let totalBlocks = (resolution ** 2);
  for (let i = 0; i < totalBlocks; i++) {
    const div = document.createElement('div');
    div.classList.add('sketchblocks');
    let opac = Number(0); 
    div.setAttribute('opac', opac);
    div.setAttribute('style', 'background: black; opacity: var(--opacity)');
    div.style.setProperty("--opacity", opac);
    container.appendChild(div);
  }
  divs = document.querySelectorAll('.sketchblocks');
  addListeners();
};

setupSketchfield(16);



function reset() {
  let input = parseInt(prompt("Set resolution of next Etch-a-Sketch (1-100)"));
  if ((input > 100) || (input < 1) || (isNaN(input))) {
    alert("Please enter a number between 1 and 100");
    return;}
  else { 
    body.style.setProperty("--resolution", input);
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