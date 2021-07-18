const form = {
  box: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
};

// form.input.addEventListener('click', amountInput);
form.renderBtn.addEventListener('click', createBoxes);
form.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = form.input.value;
  const amountBoxes = [];
  const rdmColor = () => (Math.random() * 256) >> 0;
  const sizeValue = 30;

  for (let i = 0; i < amount; i++) {
    const cloneBox = document.createElement('div');
    cloneBox.style.backgroundColor = `rgb(${rdmColor()}, ${rdmColor()}, ${rdmColor()})`;
    cloneBox.style.width = `${sizeValue}px`;
    cloneBox.style.height = `${sizeValue}px`;
    if (i > 0) {
      console.log(i);
      cloneBox.style.width = `${sizeValue + 10}px`;
      cloneBox.style.height = `${sizeValue + 10}px`;
    }
    amountBoxes.push(cloneBox);
  }
  form.box.append(...amountBoxes);
}

function destroyBoxes() {
  //   document.querySelector('.box').remove();
  form.box.remove();
  location.reload();
}
