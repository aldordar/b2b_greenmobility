projectFunctions.historyTable = projectFunctions.historyTable || {};

projectFunctions.historyTable.init = function() {
  this.initData();
};

projectFunctions.historyTable.initData = function() {

  let historyTable = document.querySelector('.history__table');
  if (historyTable) {
    let tableFilter = document.querySelectorAll('.table__icons--filter');
    for (let i=0; i<tableFilter.length; i++) {
      tableFilter[i].addEventListener('click', function(e){
        projectFunctions.customSort.sortTable(i, e, 'history__table');
      });
    }
  }
};