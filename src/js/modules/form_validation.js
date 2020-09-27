projectFunctions.formValidation = projectFunctions.formValidation || {};

projectFunctions.formValidation.init = function() {
  let isForm = document.querySelector('.gm-form');
  if (isForm) {
    this.myValidation();
  }
};

projectFunctions.formValidation.myValidation = function() {
  const userForm = document.querySelector('.user-form');
  const loginForm = document.querySelector('.login-form');

  //FORM FUNCTIONS
  function myFormats(input, myVar) {
    switch (input.type) {
      case 'text':
        //Accept symbols @, ø, æ, etc..
        myVar = /^([^0-9]*)$/;
        break;
      case 'email':
        myVar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        break;
      default:
        myVar = /.*/;
    }
    return myVar;
  }

  function addErrorText(input, mess) {
    input.classList.add('novalid');
    if(!input.nextElementSibling || !input.nextElementSibling.classList.contains('error')) {
      input.parentNode.insertAdjacentHTML('beforeend', mess);
    }
  }


  function validateEmpty(inputs, errorMess) {
    inputs.forEach(el => {
      if (el) {
        addErrorText(el, errorMess);
      }
    });
  }

  function removeErrorsOnFocus(inputs) {
    inputs.forEach(el => {
      if (el) {
        let inputParent = el.parentNode;
        el.addEventListener('focus', () => {
          if (el.nextElementSibling && el.nextElementSibling.classList.contains('error')) {
            el.classList.remove('novalid');
            inputParent.removeChild(el.nextElementSibling);
          }
        });
      }
    });
  }

  function checkFormatOnTyping(inputs){
    let regex;
    inputs.forEach(el => {
      if (el) {
        el.addEventListener('input', () => {
          regex = myFormats(el, regex);
          let chars = regex.test(el.value);
          let isEmpty = el.value;
          if (chars) { el.classList.add('valid'); }
          else { 
            el.classList.remove('valid')
            el.classList.add('novalid'); 
          }
          if (!isEmpty) { 
            el.classList.remove('valid')
            el.classList.add('novalid'); 
          }
        });
      }
    });
  }

  function checkFormatOnSubmit(inputs, form) {
    let regex;
    inputs.forEach(el => {
      if (el) {
        regex = myFormats(el, regex);
        if (!regex.test(el.value) && el.value != '') {
          form.preventDefault();
          if (el.type == 'email') addErrorText(el, errorMessEmail);
          else addErrorText(el, errorFormat);
        }
      }
    });
  }

  function checkFormat(inputs) {
    let regex;
    inputs.forEach(el => {
      if (el) {
        regex = myFormats(el, regex);
        if(regex.test(el.value) && el.value != '') {
          el.classList.add('valid');
        }
      }
    });
  }

  //FORM VARIABLES
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let department = document.getElementById('field');
  let paymentMethod = document.getElementById('paymentMethod');
  let loginEmail = document.getElementById('login-email');
  let loginPassword = document.getElementById('lg-password');
  let errorMessEmpty = '<div class="error d-flex flex-column align-items-center"><p class="error-text">This field is required</p><div class="error-down"></div><img class="error-warning" src="img/warning.svg"></div>';
  let errorMessEmail = '<div class="error d-flex flex-column align-items-center"><p class="error-text">Indtast en gyldig e-mail</p><div class="error-down"></div><img class="error-warning" src="img/warning.svg"></div>';
  let errorFormat = '<div class="error d-flex flex-column align-items-center"><p class="error-text">Enter a valid format</p><div class="error-down"></div><img class="error-warning" src="img/warning.svg"></div>';
  let inputsGroup = [name, email, department, loginEmail, loginPassword];

  checkFormat(inputsGroup);
  checkFormatOnTyping(inputsGroup);
  removeErrorsOnFocus(inputsGroup);
  let emptyInputs = [];
  let inputWithValue = [];

  if (userForm) {
    userForm.addEventListener('submit', (e) => {
      ((name.value === '' || name.value == null) && (!emptyInputs.includes(name))) ? emptyInputs.push(name) : name;
      ((email.value === '' || email.value == null) && (!emptyInputs.includes(email))) ? emptyInputs.push(email) : email;
      ((department.value === '' || department.value == null) && (!emptyInputs.includes(department))) ? emptyInputs.push(department) : department;
  
      ((name.value != '' || name.value != null) && (!inputWithValue.includes(name))) ? inputWithValue.push(name) : name;
      ((email.value != '' || email.value != null) && (!inputWithValue.includes(email))) ? inputWithValue.push(email) : email;
      ((department.value != '' || department.value != null) && (!inputWithValue.includes(department))) ? inputWithValue.push(department) : department;
  
      if (emptyInputs.length > 0) {
        e.preventDefault();
        validateEmpty(emptyInputs, errorMessEmpty);
        emptyInputs = [];
      }
      if (inputWithValue.length > 0) {
        checkFormatOnSubmit(inputWithValue, e);
        inputWithValue = [];
      }
    });
  }

  if (loginForm){
    console.log(loginEmail);
    loginForm.addEventListener('submit', (e) => {
      ((loginEmail.value === '' || loginEmail.value == null) && (!emptyInputs.includes(loginEmail))) ? emptyInputs.push(loginEmail) : loginEmail;
      ((loginPassword.value === '' || loginPassword.value == null) && (!emptyInputs.includes(loginPassword))) ? emptyInputs.push(loginPassword) : loginPassword;

      ((loginEmail.value != '' || loginEmail.value != null) && (!inputWithValue.includes(loginEmail))) ? inputWithValue.push(loginEmail) : loginEmail;
      ((loginPassword.value != '' || loginPassword.value != null) && (!inputWithValue.includes(loginPassword))) ? inputWithValue.push(loginPassword) : loginPassword;
 
      if (emptyInputs.length > 0) {
        e.preventDefault();
        validateEmpty(emptyInputs, errorMessEmpty);
        emptyInputs = [];
      }
      if (inputWithValue.length > 0) {
        checkFormatOnSubmit(inputWithValue, e);
        inputWithValue = [];
      }
    });
  }

};