// Const/Let;
const btnSubmitLogin = document.getElementById('btn-submit-login');
const inputEmailLogin = document.getElementById('input-email');
const inputPasswordLogin = document.getElementById('input-password');

// Function;
function emailValidation() {
  return inputEmailLogin === 'tryber@teste.com';
}

function passwordValidation() {
  return inputPasswordLogin === '123456';
}

function loginAlert(emailValid, passwordValid) {
  if (emailValid && passwordValid) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function onClickLoginAlert() {
  const emailValid = emailValidation();
  const passwordValid = passwordValidation();
  loginAlert(emailValid, passwordValid);
}

// Listeners;
btnSubmitLogin.addEventListener('click', onClickLoginAlert);
