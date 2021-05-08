const container = document.querySelector('.container');
let resolution = 16;
let totalBlocks = (resolution ** 2);

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('sketchblocks'); 
  container.appendChild(div);
}

const divs = document.querySelectorAll('.sketchblocks');

divs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  });
});

function reset() {
  divs.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
  let input = parseInt(prompt("Set resolution of next Etch-a-Sketch (1-100)"));
  if ((input > 100) || (input < 1) || (isNaN(input))) {
    alert("Please enter a number between 1 and 100");
    return;
  
  }
}
