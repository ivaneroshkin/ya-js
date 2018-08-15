'use strict';
function validateForm(obj) {
  const typeForm = obj.formId;
  const inputError = obj.inputErrorClass;
  const formValid = obj.formValidClass;
  const formInvalid = obj.formInvalidClass;

  const mainForm = document.querySelector(`#${typeForm}`);
  const profileName = document.querySelector('#profile-name');
  const profileAge = document.querySelector('#profile-age');
  const profilePhone = document.querySelector('#profile-phone');
  const profileNumber = document.querySelector('#profile-number');

  function onFieldFocus(event) {
    if (event.target.classList.contains(`${inputError}`)) {
      event.target.classList.remove(`${inputError}`);
    }

    if (event.target.dataset.hasOwnProperty('required')) {
      event.target.setAttribute('required', '');
    }
  }

  function onFieldBlur(event) {
    if (event.target.dataset.validator === 'letters') {
      if (/^[a-zA-Zа-яёА-ЯЁ]+$/i.test(event.target.value)) {
        return;
      }
      event.target.classList.add(`${inputError}`);
    }

    if (event.target.dataset.validator === 'number') {
      if (/\d+$/i.test(event.target.value)) {
        return;
      } else if (event.target.value === '') {
        return;
      }
      event.target.classList.add(`${inputError}`);
    }

    if (event.target.dataset.validator === 'regexp') {
      const pattern = event.target.dataset.validatorPattern;
      const re = new RegExp(pattern);
      if (re.test(event.target.value)) {
        return;
      }
      if (event.target.value === '') {
        return;
      }
      event.target.classList.add(`${inputError}`);
    }
  }

  function validateName() {
    if (/^[a-zA-Zа-яёА-ЯЁ]+$/i.test(profileName.value)) {
      return true;
    }
  }

  function validateAge() {
    if (/^\d+$/i.test(profileAge.value) || profileAge.value === '') {
      return true;
    }
  }

  function validatePhone() {
    const pattern = profilePhone.dataset.validatorPattern;
    const re = new RegExp(pattern);
    if (re.test(profilePhone.value) || profilePhone.value === '') {
      return true;
    }
  }

  function validateNumber() {
    if (/[0-9]/i.test(profileNumber.value) || profileNumber.value === '') {
      return true;
    }
  }

  function onFieldSubmit(event) {
    event.preventDefault();

    const nameIsValid = validateName();
    const ageIsValid = validateAge();
    const phoneIsValid = validatePhone();
    const numberIsValid = validateNumber();

    if (nameIsValid && ageIsValid && phoneIsValid && numberIsValid) {
      if (mainForm.classList.contains(`${formInvalid}`)) {
        mainForm.classList.remove(`${formInvalid}`);
      }
      mainForm.classList.add(`${formValid}`);
    } else {
      if (mainForm.classList.contains(`${formValid}`)) {
        mainForm.classList.remove(`${formValid}`);
      }
      mainForm.classList.add(`${formInvalid}`);
    }
  }

  profileName.addEventListener('focus', onFieldFocus);
  profileName.addEventListener('blur', onFieldBlur);

  profileAge.addEventListener('focus', onFieldFocus);
  profileAge.addEventListener('blur', onFieldBlur);

  profilePhone.addEventListener('focus', onFieldFocus);
  profilePhone.addEventListener('blur', onFieldBlur);

  profileNumber.addEventListener('focus', onFieldFocus);
  profileNumber.addEventListener('blur', onFieldBlur);

  mainForm.addEventListener('submit', onFieldSubmit);
}
