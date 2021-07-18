const form = {
  box: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
};

console.log(form.box);

// form.input.addEventListener('click', amountInput);
form.renderBtn.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = form.input.value;
  console.log(form.input.value);
  const amountBoxes = [];

  console.log(amountBoxes);

  for (let i = 0; i < amount; i++) {
    const cloneBox = document.createElement('div');
    const rgbColor =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    cloneBox.style = 'background: rgbColor';
    cloneBox.classList.add('box');
    amountBoxes.push(cloneBox);
  }
  form.box.appendChild(...amountBoxes);
}

console.log(form.box);
