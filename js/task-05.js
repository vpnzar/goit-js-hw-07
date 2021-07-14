const refs = {
  linkInputField: document.querySelector('#name-input'),
  linkCurrentInputMeaning: document.querySelector('#name-output'),
};

refs.linkInputField.addEventListener('input', onInputChange);
function onInputChange(event) {
  event.currentTarget.value.trim() === ''
    ? (refs.linkCurrentInputMeaning.textContent = 'незнакомец')
    : (refs.linkCurrentInputMeaning.textContent = event.currentTarget.value);
}
