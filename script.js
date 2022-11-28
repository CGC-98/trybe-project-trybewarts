// Const/Let;
const btnSubmitLogin = document.getElementById('btn-submit-login');
const inputEmailLogin = document.getElementById('input-email-login');
const inputPasswordLogin = document.getElementById('input-password-login');
const textareaInput = document.getElementById('textarea');
const counterSpan = document.getElementById('counter');
const checkAgreement = document.getElementById('agreement');
const btnAgreement = document.getElementById('submit-btn');
const mainSection = document.querySelector('main');
const tryLogo = document.getElementById('trybewarts-forms-logo');
const nameInputForm = document.getElementById('input-name');
const lastnameInputForm = document.getElementById('input-lastname');
const emailInputForm = document.getElementById('input-email');
const houseForm = document.getElementById('house');
const labelFamily = document.querySelectorAll('input[name = "family"]');
const labelRate = document.querySelectorAll('input[name = "rate"]');
const labelContent = document.getElementsByClassName('subject');
const labelComment = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');

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

function onKeyupCounter() {
  const textLength = textareaInput.value.length;
  const counterDisplay = 500 - textLength;
  counterSpan.innerText = counterDisplay;
}

function enableBnt() {
  if (checkAgreement.checked) {
    btnAgreement.disabled = false;
  }
}

function describeSubmit() {
  const labelFamilyReturn = [...labelFamily].find((e) => e.checked);
  const labelRateReturn = [...labelRate].find((e) => e.checked);
  const labelContentReturn = [...labelContent].filter((e) => e.checked)
    .reduce((acc, curr, i, a) => (i < a.length - 1
      ? `${acc}${curr.value}, `
      : `${acc}${curr.value}`), '');
  return [
    `${nameInputForm.value} ${lastnameInputForm.value}`,
    emailInputForm.value,
    houseForm.value,
    labelFamilyReturn.value,
    labelContentReturn,
    labelRateReturn.value,
    labelComment.value,
  ];
}

function returnSubmit() {
  const newSection = document.createElement('section');
  newSection.id = 'form-data';
  const arrayBase = [
    'Nome',
    'Email',
    'Casa',
    'Família',
    'Matérias',
    'Avaliação',
    'Observações',
  ];
  const arrayDom = describeSubmit();
  arrayBase.forEach((e, i) => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = `${e}: ${arrayDom[i]}`;
    newSection.appendChild(newParagraph);
  });
  mainSection.insertBefore(newSection, tryLogo);
}

function onSubmitClick(event) {
  event.preventDefault();
  returnSubmit();
  evaluationForm.style.display = 'none';
}

// Listeners;
btnSubmitLogin.addEventListener('click', onClickLoginAlert);
textareaInput.addEventListener('keyup', onKeyupCounter);
checkAgreement.addEventListener('click', enableBnt);
btnAgreement.addEventListener('click', onSubmitClick);
