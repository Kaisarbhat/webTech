const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btn-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
const form = document.querySelector('myForm');
const name = document.forms["myForm"]["name"].value;
const email = document.forms["myForm"]["email"].value;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!isValidEmail(emailField.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPassword(passwordField.value)) {
    alert('Please enter a valid password.');
    return;
  }


  form.submit();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password) {
  return password.length >= 8;
}
