import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;

const localStorageKey = 'feedback-form-state';
const storageData = JSON.parse(localStorage.getItem(localStorageKey));

if (storageData) {
  (email.value = storageData.email), (message.value = storageData.message);
}

form.addEventListener(
  'input',
  throttle(e => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        email: email.value,
        message: message.value,
      })
    );
  }, 500)
);
form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Please fill all fields');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(localStorageKey)));
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
