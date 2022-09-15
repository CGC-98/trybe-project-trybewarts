// Const/Let;
const btnSubmitLogin = document.getElementById('btn-submit-login');
const inputEmailLogin = document.getElementById('input-email-login');
const inputPasswordLogin = document.getElementById('input-password-login');
const textareaComment = document.getElementById('textarea-comment');
const counterSpan = document.getElementById('counter');
const checkAgreement = document.getElementById('agreement');
const btnAgreement = document.getElementById('submit-btn');

// Function;
function emailValidation() {
  const inputEmailLoginValue = inputEmailLogin.value;
  return inputEmailLoginValue === 'tryber@teste.com';
}

function passwordValidation() {
  const inputPasswordLoginValue = inputPasswordLogin.value;
  return inputPasswordLoginValue === '123456';
}

function loginAlert(emailValid, passwordValid) {
  if (emailValid && passwordValid) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function onClickLoginAlert(event) {
  event.preventDefault();
  const emailValid = emailValidation();
  const passwordValid = passwordValidation();
  loginAlert(emailValid, passwordValid);
}

function onKeydownCounter() {
  const textLength = textareaComment.value.length;
  console.log(textLength);
  const counterDisplay = 500 - textLength;
  counterSpan.innerText = counterDisplay;
}

function enableBnt() {
  if (checkAgreement.checked) {
    btnAgreement.disabled = false;
  }
}

// Listeners;
btnSubmitLogin.addEventListener('click', onClickLoginAlert);
textareaComment.addEventListener('keyup', onKeydownCounter);
checkAgreement.addEventListener('click', enableBnt);
