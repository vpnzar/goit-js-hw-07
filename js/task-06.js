const form = {
  input: document.querySelector('#validation-input'),
  inputDataLength: document.querySelector('input'),
};

form.input.addEventListener('blur', checkLengthText);
// form.input.addEventListener('change', checkInputText);

function checkLengthText(event) {
  console.log(isNaN(event.currentTarget.value.length));
  console.log(isNaN(form.inputDataLength.dataset.length));

  if (
    form.inputDataLength.dataset.length === event.currentTarget.value.length
  ) {
    console.log(false);
  } else {
    console.log(true);
  }
}

// console.log(form.input);

// function checkInputText(event) {
//   console.log(event.currentTarget.value.length);
// }
