projectFunctions.fakturaerTable = projectFunctions.fakturaerTable || {};

projectFunctions.fakturaerTable.init = function() {
  let fakTable = document.querySelector('.fakturaer');
  if (fakTable) {
    this.initData();
  }
};

projectFunctions.fakturaerTable.initData = function() {
 
  let fakturaerTable = document.querySelector('.fak-table');
  if (fakturaerTable) {
    let tableFilter = document.querySelector('.fak-filter');
    tableFilter.addEventListener('click', function(e){
      projectFunctions.customSort.sortTable(1, e, 'fak-table');
    });
  }

  let fakturaerTablePboder = document.querySelector('.p-boder');
  if (fakturaerTablePboder) {
    let tableFilterPboder = document.querySelector('.p-boder-filter');
    tableFilterPboder.addEventListener('click', function(e){
      projectFunctions.customSort.sortTable(1, e, 'p-boder');
    });
  }

};