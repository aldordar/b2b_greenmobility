// This closure function makes the $-sign an alias for jQuery (noConflict)
(function($) {

// Defining a global object for the javascript functions
// By defining all our functions to this global object, we can access all functions in any function or file.
    window.projectFunctions = window.projectFunctions || {};

    'use strict';

$(document).ready(function () {
    projectFunctions.generalFunctions.init();
    projectFunctions.brugereTable.init();
    projectFunctions.historyTable.init();
    projectFunctions.pagination.init();
    projectFunctions.customSelect.init();
    projectFunctions.formValidation.init();
    projectFunctions.fakturaerTable.init();
    projectFunctions.adminPopup.init();
});

$(window).on('load', function () {});
'use strict';

projectFunctions.adminPopup = projectFunctions.adminPopup || {};

projectFunctions.adminPopup.init = function () {
  var profile = document.querySelector('#profile');
  if (profile) {
    this.initData();
  }
};

projectFunctions.adminPopup.initData = function () {
  $('.bin').on('click', function () {
    var popup = document.getElementById('slet-admin');
    var popupContent = document.querySelector('.popup__content');
    var popupAdminUser = document.querySelector('.popup__content--box');
    popup.classList.add('show');
    popupContent.classList.add('content-show');
    var user = this.closest('tr').children[0].textContent;
    popupAdminUser.insertAdjacentHTML('afterbegin', 'Du er ved at fjerne ' + user);
  });

  var cancelDelete = document.querySelector('.popup__content--box-cancel');

  cancelDelete.addEventListener('click', function () {
    var popup = document.getElementById('slet-admin');
    var popupContent = document.querySelector('.popup__content');
    popupContent.classList.remove('content-show');
    popup.classList.remove('show');
    var popupAdminUser = document.querySelector('.popup__content--box');
    setTimeout(function () {
      popupAdminUser.removeChild(popupAdminUser.firstChild);
    }, 500);
  });
};
'use strict';

projectFunctions.brugereTable = projectFunctions.brugereTable || {};

projectFunctions.brugereTable.init = function () {
  this.initData();
};

projectFunctions.brugereTable.initData = function () {
  function initOption(user, email, depar, pay, element) {
    var userOptions = '\n      <div class="popup" id="slet">\n        <div class="popup__content">\n          <div class="popup__content--box">\n            Du er ved at fjerne ' + user + ' \n            <span>\xD8nsker du at fort\xE6tte?</span>\n            <hr>\n              <div class="d-flex justify-content-between">\n                <a href="#brugere"><button class="popup__content--box-cancel">Annuller</button></a>\n                <button class="popup__content--box-delete">Slet bruger</button>\n              </div>\n            </div>\n        </div>\n      </div>\n      \n      <form class="brugere__user-form" action="rediger-bruger.php" method="post" novalidate>\n        <input name="name" value="' + user + '">\n        <input name="email" value="' + email + '">\n        <input name="department" value="' + depar + '">\n        <input name="payment-method" value="' + pay + '">\n      \n        <div class="brugere__user-options d-flex">\n          <div class="brugere__user-options--box">\n            <button type="submit"><span style="text-align: left">Rediger bruger</span></button>\n            <span>G\xF8r til administrator</span>\n            <a href="#slet"><span>Slet bruger</span></a>\n          </div>\n          <div class="brugere__user-options--arrow"></div>\n        </div>\n\n      </form>';
    element.parentNode.insertAdjacentHTML('afterbegin', userOptions);
  }

  $('.dot_option').on('click', function (e) {
    e.stopPropagation();
    var target = void 0;
    e.target.classList.contains('dot_option') ? target = e.target : target = e.target.closest('.dot_option');

    var userName = target.closest('tr').children[0].textContent;
    var userEmail = target.closest('tr').children[1].textContent;
    var userDepart = target.closest('tr').children[2].textContent;
    var userPayMethod = target.closest('tr').children[3].textContent;

    var optionDisplayed = document.querySelectorAll('.popup');
    var isOpen = target.parentNode.firstElementChild.classList.contains('popup');
    if (isOpen) {
      var customTarget = target.parentNode;
      while (!customTarget.firstElementChild.classList.contains('dot_option')) {
        customTarget.removeChild(customTarget.firstElementChild);
      }
    } else {
      if (optionDisplayed) {
        for (var i = 0; i < optionDisplayed.length; i++) {
          var container = optionDisplayed[i].parentNode;
          while (!container.firstElementChild.classList.contains('dot_option')) {
            container.removeChild(container.firstElementChild);
          }
        }
      }
      initOption(userName, userEmail, userDepart, userPayMethod, target);
    }
  });

  var brugereTable = document.querySelector('.brugere__table');
  if (brugereTable) {
    var tableFilter = document.querySelectorAll('.table__icons--filter');

    var _loop = function _loop(i) {
      var aux = void 0;
      tableFilter[i].addEventListener('click', function (e) {
        i == 0 ? aux = 0 : aux = 2;
        projectFunctions.customSort.sortTable(aux, e, 'brugere__table');
      });
    };

    for (var i = 0; i < tableFilter.length; i++) {
      _loop(i);
    }
  }

  // document.addEventListener('click', function(e){
  //   let openedOptions = document.querySelectorAll('.popup');
  //   if (openedOptions) {
  //     for (let i=0; i<openedOptions.length; i++) {
  //       let container = openedOptions[i].parentNode;
  //       while (!container.firstElementChild.classList.contains('dot_option')){
  //         container.removeChild(container.firstElementChild);
  //       }
  //     }
  //   }
  // });
};
'use strict';

projectFunctions.customSelect = projectFunctions.customSelect || {};

projectFunctions.customSelect.init = function () {
  var cuSelect = document.querySelector('.custom-select');
  if (cuSelect) {
    this.mySelect();
  }
};

projectFunctions.customSelect.mySelect = function () {
  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName('custom-select');

  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0];
    a = document.createElement('div');
    a.setAttribute('class', 'select-selected');
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement('div');
    b.setAttribute('class', 'select-items select-hide');
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement('div');
      c.innerHTML = selElmnt.options[j].innerHTML;

      c.addEventListener('click', function (e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName('select')[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName('same-as-selected');
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute('class');
            }
            this.setAttribute('class', 'same-as-selected');
            break;
          }
        }
        h.click();
      });

      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
    });
  }

  function closeAllSelect(elmnt) {
    var x,
        y,
        i,
        arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('select-hide');
      }
    }
  }

  document.addEventListener('click', closeAllSelect);
};
'use strict';

projectFunctions.fakturaerTable = projectFunctions.fakturaerTable || {};

projectFunctions.fakturaerTable.init = function () {
  var fakTable = document.querySelector('.fakturaer');
  if (fakTable) {
    this.initData();
  }
};

projectFunctions.fakturaerTable.initData = function () {

  var fakturaerTable = document.querySelector('.fak-table');
  if (fakturaerTable) {
    var tableFilter = document.querySelector('.fak-filter');
    tableFilter.addEventListener('click', function (e) {
      projectFunctions.customSort.sortTable(1, e, 'fak-table');
    });
  }

  var fakturaerTablePboder = document.querySelector('.p-boder');
  if (fakturaerTablePboder) {
    var tableFilterPboder = document.querySelector('.p-boder-filter');
    tableFilterPboder.addEventListener('click', function (e) {
      projectFunctions.customSort.sortTable(1, e, 'p-boder');
    });
  }
};
'use strict';

projectFunctions.formValidation = projectFunctions.formValidation || {};

projectFunctions.formValidation.init = function () {
  var isForm = document.querySelector('.gm-form');
  if (isForm) {
    this.myValidation();
  }
};

projectFunctions.formValidation.myValidation = function () {
  var userForm = document.querySelector('.user-form');
  var loginForm = document.querySelector('.login-form');

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
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('error')) {
      input.parentNode.insertAdjacentHTML('beforeend', mess);
    }
  }

  function validateEmpty(inputs, errorMess) {
    inputs.forEach(function (el) {
      if (el) {
        addErrorText(el, errorMess);
      }
    });
  }

  function removeErrorsOnFocus(inputs) {
    inputs.forEach(function (el) {
      if (el) {
        var inputParent = el.parentNode;
        el.addEventListener('focus', function () {
          if (el.nextElementSibling && el.nextElementSibling.classList.contains('error')) {
            el.classList.remove('novalid');
            inputParent.removeChild(el.nextElementSibling);
          }
        });
      }
    });
  }

  function checkFormatOnTyping(inputs) {
    var regex = void 0;
    inputs.forEach(function (el) {
      if (el) {
        el.addEventListener('input', function () {
          regex = myFormats(el, regex);
          var chars = regex.test(el.value);
          var isEmpty = el.value;
          if (chars) {
            el.classList.add('valid');
          } else {
            el.classList.remove('valid');
            el.classList.add('novalid');
          }
          if (!isEmpty) {
            el.classList.remove('valid');
            el.classList.add('novalid');
          }
        });
      }
    });
  }

  function checkFormatOnSubmit(inputs, form) {
    var regex = void 0;
    inputs.forEach(function (el) {
      if (el) {
        regex = myFormats(el, regex);
        if (!regex.test(el.value) && el.value != '') {
          form.preventDefault();
          if (el.type == 'email') addErrorText(el, errorMessEmail);else addErrorText(el, errorFormat);
        }
      }
    });
  }

  function checkFormat(inputs) {
    var regex = void 0;
    inputs.forEach(function (el) {
      if (el) {
        regex = myFormats(el, regex);
        if (regex.test(el.value) && el.value != '') {
          el.classList.add('valid');
        }
      }
    });
  }

  //FORM VARIABLES
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var department = document.getElementById('field');
  var paymentMethod = document.getElementById('paymentMethod');
  var loginEmail = document.getElementById('login-email');
  var loginPassword = document.getElementById('lg-password');
  var errorMessEmpty = '<div class="error d-flex flex-column align-items-center"><p class="error-text">This field is required</p><div class="error-down"></div><img class="error-warning" src="img/warning.svg"></div>';
  var errorMessEmail = '<div class="error d-flex flex-column align-items-center"><p class="error-text">Indtast en gyldig e-mail</p><div class="error-down"></div><img class="error-warning" src="img/warning.svg"></div>';
  var errorFormat = '<div class="error d-flex flex-column align-items-center"><p class="error-text">Enter a valid format</p><div class="error-down"></div><img class="error-warning" src="img/warning.svg"></div>';
  var inputsGroup = [name, email, department, loginEmail, loginPassword];

  checkFormat(inputsGroup);
  checkFormatOnTyping(inputsGroup);
  removeErrorsOnFocus(inputsGroup);
  var emptyInputs = [];
  var inputWithValue = [];

  if (userForm) {
    userForm.addEventListener('submit', function (e) {
      (name.value === '' || name.value == null) && !emptyInputs.includes(name) ? emptyInputs.push(name) : name;
      (email.value === '' || email.value == null) && !emptyInputs.includes(email) ? emptyInputs.push(email) : email;
      (department.value === '' || department.value == null) && !emptyInputs.includes(department) ? emptyInputs.push(department) : department;

      (name.value != '' || name.value != null) && !inputWithValue.includes(name) ? inputWithValue.push(name) : name;
      (email.value != '' || email.value != null) && !inputWithValue.includes(email) ? inputWithValue.push(email) : email;
      (department.value != '' || department.value != null) && !inputWithValue.includes(department) ? inputWithValue.push(department) : department;

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

  if (loginForm) {
    console.log(loginEmail);
    loginForm.addEventListener('submit', function (e) {
      (loginEmail.value === '' || loginEmail.value == null) && !emptyInputs.includes(loginEmail) ? emptyInputs.push(loginEmail) : loginEmail;
      (loginPassword.value === '' || loginPassword.value == null) && !emptyInputs.includes(loginPassword) ? emptyInputs.push(loginPassword) : loginPassword;

      (loginEmail.value != '' || loginEmail.value != null) && !inputWithValue.includes(loginEmail) ? inputWithValue.push(loginEmail) : loginEmail;
      (loginPassword.value != '' || loginPassword.value != null) && !inputWithValue.includes(loginPassword) ? inputWithValue.push(loginPassword) : loginPassword;

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
"use strict";

projectFunctions.generalFunctions = projectFunctions.generalFunctions || {};

projectFunctions.generalFunctions.init = function () {
    this.checkDevice();
};

projectFunctions.generalFunctions.checkDevice = function () {

    var isMobile = false; //initiate as false
    // Device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    return isMobile;
};
'use strict';

projectFunctions.historyTable = projectFunctions.historyTable || {};

projectFunctions.historyTable.init = function () {
  this.initData();
};

projectFunctions.historyTable.initData = function () {

  var historyTable = document.querySelector('.history__table');
  if (historyTable) {
    var tableFilter = document.querySelectorAll('.table__icons--filter');

    var _loop = function _loop(i) {
      tableFilter[i].addEventListener('click', function (e) {
        projectFunctions.customSort.sortTable(i, e, 'history__table');
      });
    };

    for (var i = 0; i < tableFilter.length; i++) {
      _loop(i);
    }
  }
};
'use strict';

projectFunctions.pagination = projectFunctions.pagination || {};

projectFunctions.pagination.init = function () {
  this.initPagination();
};

projectFunctions.pagination.initPagination = function () {
  var pagination = document.querySelector('.pagination');
  if (pagination) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (current) {
      current.addEventListener('click', function () {
        if (!this.classList.contains('current-page')) {
          var currentPage = document.querySelector('.current-page');
          currentPage.classList.remove('current-page');
          this.classList.add('current-page');
        }
      });
    });

    var pageMove = document.querySelectorAll('.page-move');
    pageMove.forEach(function (current) {
      current.addEventListener('click', function () {
        var currentPage = document.querySelector('.current-page');
        if (this.classList.contains('previous')) {
          if (currentPage.previousElementSibling && !currentPage.previousElementSibling.classList.contains('previous')) {
            currentPage.classList.remove('current-page');
            currentPage.previousElementSibling.classList.add('current-page');
          }
        } else if (this.classList.contains('next')) {
          if (currentPage.nextElementSibling && !currentPage.nextElementSibling.classList.contains('incoming')) {
            currentPage.classList.remove('current-page');
            currentPage.nextElementSibling.classList.add('current-page');
          }
        }
      });
    });
  }
};
'use strict';

projectFunctions.customSort = projectFunctions.customSort || {};

projectFunctions.customSort.sortTable = function (n, e, table) {
  var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
  var danishMonths = {
    januar: '01',
    februar: '02',
    marts: '03',
    april: '04',
    maj: '05',
    juni: '06',
    juli: '07',
    august: '08',
    september: '09',
    oktober: '10',
    november: '11',
    december: '12'
  };
  table = document.querySelector('.' + table);
  switching = true;
  dir = 'asc';
  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];

      if (Number.isInteger(parseInt(x.innerHTML.charAt(0)))) {
        var dateX = x.innerHTML.split(' ');
        dateX[0] = dateX[0].split('/').reverse().join('-');
        dateX[1] = dateX[1] + ':00Z';
        dateX = dateX.join('T');
        dateX = new Date(dateX).getTime();

        var dateY = y.innerHTML.split(' ');
        dateY[0] = dateY[0].split('/').reverse().join('-');
        dateY[1] = dateY[1] + ':00Z';
        dateY = dateY.join('T');
        dateY = new Date(dateY).getTime();

        if (dir == 'asc') {
          if (dateX > dateY) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == 'desc') {
          if (dateX < dateY) {
            shouldSwitch = true;
            break;
          }
        }
      } else if (danishMonths[x.innerHTML.split(' ')[0].toLowerCase()]) {
        var _dateX = x.innerHTML.split(' ').reverse();
        _dateX[1] = danishMonths[_dateX[1].toLowerCase()];
        _dateX = _dateX.join('-');
        _dateX = new Date(_dateX).getTime();

        var _dateY = y.innerHTML.split(' ').reverse();
        _dateY[1] = danishMonths[_dateY[1].toLowerCase()];
        _dateY = _dateY.join('-');
        _dateY = new Date(_dateY).getTime();

        if (dir == 'asc') {
          if (_dateX > _dateY) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == 'desc') {
          if (_dateX < _dateY) {
            shouldSwitch = true;
            break;
          }
        }
      } else {
        if (dir == 'asc') {

          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == 'asc') {
        dir = 'desc';
        switching = true;
      }
    }
  }
  //------------------------------------------------------
  //THIS IS MY MODIFICATION
  //------------------------------------------------------

  var filterButtons = document.querySelectorAll('.table__icons--filter');
  var fakturaerPage = document.querySelector('.fakturaer');
  if (filterButtons && !fakturaerPage) {
    for (var _i = 0; _i < filterButtons.length; _i++) {
      filterButtons[_i].firstElementChild.style.borderBottomColor = '#BFBFBF';
      filterButtons[_i].lastElementChild.style.borderTopColor = '#BFBFBF';
    }
  }

  if (dir == 'asc') {
    if (e.target.classList.contains('table_icons--filter')) {
      e.target.firstElementChild.style.borderBottomColor = '#263B80';
      e.target.lastElementChild.style.borderTopColor = '#BFBFBF';
    } else {
      e.target.parentNode.firstElementChild.style.borderBottomColor = '#263B80';
      e.target.parentNode.lastElementChild.style.borderTopColor = '#BFBFBF';
    }
  } else {
    if (e.target.classList.contains('table_icons--filter')) {
      e.target.firstElementChild.style.borderBottomColor = '#BFBFBF';
      e.target.lastElementChild.style.borderTopColor = '#263B80';
    } else {
      e.target.parentNode.firstElementChild.style.borderBottomColor = '#BFBFBF';
      e.target.parentNode.lastElementChild.style.borderTopColor = '#263B80';
    }
  }
};

})(jQuery);