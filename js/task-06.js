const form = {
  input: document.querySelector('#validation-input'),
  inputDataLength: document.querySelector('input'),
};

form.input.addEventListener('change', checkLengthText);

function checkLengthText(event) {
  // console.log(Number.isFinite(event.currentTarget.value.length));
  // console.log(Number.isFinite(form.inputDataLength.dataset.length));

  if (
    Number(form.inputDataLength.dataset.length) ===
    event.currentTarget.value.length
  ) {
    form.input.classList.add('valid');
    form.input.classList.remove('invalid');
  } else {
    form.input.classList.add('invalid');
    form.input.classList.remove('valid');
  }
}
