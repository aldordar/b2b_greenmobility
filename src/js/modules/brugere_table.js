projectFunctions.brugereTable = projectFunctions.brugereTable || {};

projectFunctions.brugereTable.init = function() {
  this.initData();
};

projectFunctions.brugereTable.initData = function() {
    function initOption(user, email, depar, pay, element){
      let userOptions = `
      <div class="popup" id="slet">
        <div class="popup__content">
          <div class="popup__content--box">
            Du er ved at fjerne ${user} 
            <span>Ønsker du at fortætte?</span>
            <hr>
              <div class="d-flex justify-content-between">
                <a href="#brugere"><button class="popup__content--box-cancel">Annuller</button></a>
                <button class="popup__content--box-delete">Slet bruger</button>
              </div>
            </div>
        </div>
      </div>
      
      <form class="brugere__user-form" action="rediger-bruger.php" method="post" novalidate>
        <input name="name" value="${user}">
        <input name="email" value="${email}">
        <input name="department" value="${depar}">
        <input name="payment-method" value="${pay}">
      
        <div class="brugere__user-options d-flex">
          <div class="brugere__user-options--box">
            <button type="submit"><span style="text-align: left">Rediger bruger</span></button>
            <span>Gør til administrator</span>
            <a href="#slet"><span>Slet bruger</span></a>
          </div>
          <div class="brugere__user-options--arrow"></div>
        </div>

      </form>`;
      element.parentNode.insertAdjacentHTML('afterbegin', userOptions);
    }


    $('.dot_option').on('click', function(e) {
      e.stopPropagation();
      let target;
      (e.target.classList.contains('dot_option')) ? target = e.target : target = e.target.closest('.dot_option');

      let userName = target.closest('tr').children[0].textContent;
      let userEmail = target.closest('tr').children[1].textContent;
      let userDepart = target.closest('tr').children[2].textContent;
      let userPayMethod = target.closest('tr').children[3].textContent;

      let optionDisplayed = document.querySelectorAll('.popup');
      let isOpen = target.parentNode.firstElementChild.classList.contains('popup');
      if (isOpen) {
        let customTarget = target.parentNode;
        while (!customTarget.firstElementChild.classList.contains('dot_option')){
          customTarget.removeChild(customTarget.firstElementChild);
        }
      }
      else {
        if (optionDisplayed) {
          for (let i=0; i<optionDisplayed.length; i++) {
            let container = optionDisplayed[i].parentNode;
            while (!container.firstElementChild.classList.contains('dot_option')){
              container.removeChild(container.firstElementChild);
            }
          }
        }
        initOption(userName, userEmail, userDepart, userPayMethod, target);
      }
    });


    let brugereTable = document.querySelector('.brugere__table');
    if (brugereTable) {
      let tableFilter = document.querySelectorAll('.table__icons--filter');
      for (let i=0; i<tableFilter.length; i++) {
        let aux;
        tableFilter[i].addEventListener('click', function(e){
          (i == 0) ? aux = 0 : aux = 2;
          projectFunctions.customSort.sortTable(aux, e, 'brugere__table');
        });
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