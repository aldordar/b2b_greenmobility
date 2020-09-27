projectFunctions.adminPopup = projectFunctions.adminPopup || {};

projectFunctions.adminPopup.init = function() {
  let profile = document.querySelector('#profile');
  if (profile) {
    this.initData();
  }
};

projectFunctions.adminPopup.initData = function() {
  $('.bin').on('click', function() {
    let popup = document.getElementById('slet-admin');
    let popupContent = document.querySelector('.popup__content');
    let popupAdminUser = document.querySelector('.popup__content--box');
    popup.classList.add('show');
    popupContent.classList.add('content-show');
    let user = this.closest('tr').children[0].textContent;
    popupAdminUser.insertAdjacentHTML('afterbegin', `Du er ved at fjerne ${user}`);
  });

  let cancelDelete = document.querySelector('.popup__content--box-cancel');

  cancelDelete.addEventListener('click', function() {
    let popup = document.getElementById('slet-admin');
    let popupContent = document.querySelector('.popup__content');
    popupContent.classList.remove('content-show');
    popup.classList.remove('show');
    let popupAdminUser = document.querySelector('.popup__content--box');
    setTimeout(function(){
      popupAdminUser.removeChild(popupAdminUser.firstChild);
    }, 500);
  });
};