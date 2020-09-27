projectFunctions.pagination = projectFunctions.pagination || {};

projectFunctions.pagination.init = function() {
  this.initPagination();
};

projectFunctions.pagination.initPagination = function() {
  let pagination = document.querySelector('.pagination');
  if (pagination) {
    let pages = document.querySelectorAll('.page');
    pages.forEach((current)=> {
      current.addEventListener('click', function() {
        if (!this.classList.contains('current-page')){
          let currentPage = document.querySelector('.current-page');
          currentPage.classList.remove('current-page');
          this.classList.add('current-page');
        }
      });
    });


    let pageMove = document.querySelectorAll('.page-move');
    pageMove.forEach((current)=> {
      current.addEventListener('click', function() {
        let currentPage = document.querySelector('.current-page');
        if (this.classList.contains('previous')){
          if (currentPage.previousElementSibling && !currentPage.previousElementSibling.classList.contains('previous')) {
            currentPage.classList.remove('current-page');
            currentPage.previousElementSibling.classList.add('current-page');
          }
        }
        else if (this.classList.contains('next')){
          if (currentPage.nextElementSibling && !currentPage.nextElementSibling.classList.contains('incoming')) {
            currentPage.classList.remove('current-page');
            currentPage.nextElementSibling.classList.add('current-page');
          }
        }
      });
    });
  }
};