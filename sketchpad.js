const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('sketchblocks'); 
  container.appendChild(div);
}

const divs = document.querySelectorAll('div');

divs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  });
});
