const form = {
  input: document.querySelector('#validation-input'),
  inputDataLength: document.querySelector('input'),
};

form.input.addEventListener('blur', checkLengthText);
// form.input.addEventListener('change', checkInputText);

function checkLengthText(event) {
  console.log(event.currentTarget.value.length);
  console.log(form.inputDataLength.dataset.length);

  const result =
    event.currentTarget.value.length === form.inputDataLength.dataset.length
      ? true
      : false;
  console.log(result);
}

// function checkInputText(event) {
//   console.log(event.currentTarget.value.length);
// }
