projectFunctions.customSort = projectFunctions.customSort || {};

projectFunctions.customSort.sortTable = function(n, e, table) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
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
  table = document.querySelector('.'+table);
  switching = true;
  dir = 'asc';
  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];

      if (Number.isInteger(parseInt(x.innerHTML.charAt(0)))){
        let dateX = x.innerHTML.split(' ');
        dateX[0] = dateX[0].split('/').reverse().join('-');
        dateX[1] = dateX[1]+':00Z';
        dateX = dateX.join('T');
        dateX = new Date(dateX).getTime();
        
        let dateY = y.innerHTML.split(' ');
        dateY[0] = dateY[0].split('/').reverse().join('-');
        dateY[1] = dateY[1]+':00Z';
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
      }
      else if (danishMonths[x.innerHTML.split(' ')[0].toLowerCase()]) {
        let dateX = x.innerHTML.split(' ').reverse();
        dateX[1] = danishMonths[dateX[1].toLowerCase()];
        dateX = dateX.join('-');
        dateX = new Date(dateX).getTime();

        let dateY = y.innerHTML.split(' ').reverse();
        dateY[1] = danishMonths[dateY[1].toLowerCase()];
        dateY = dateY.join('-');
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
      }
      else {
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
      switchcount ++;
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

  let filterButtons = document.querySelectorAll('.table__icons--filter');
  let fakturaerPage = document.querySelector('.fakturaer');  
  if(filterButtons && !fakturaerPage){
    for(let i=0; i<filterButtons.length; i++){
      filterButtons[i].firstElementChild.style.borderBottomColor = '#BFBFBF';
      filterButtons[i].lastElementChild.style.borderTopColor = '#BFBFBF';
    }
  }

  if (dir == 'asc') {
    if (e.target.classList.contains('table_icons--filter')){
      e.target.firstElementChild.style.borderBottomColor = '#263B80';
      e.target.lastElementChild.style.borderTopColor = '#BFBFBF';
    }
    else {
      e.target.parentNode.firstElementChild.style.borderBottomColor = '#263B80';
      e.target.parentNode.lastElementChild.style.borderTopColor = '#BFBFBF';
    }
  }
  else {
    if (e.target.classList.contains('table_icons--filter')){
      e.target.firstElementChild.style.borderBottomColor = '#BFBFBF';
      e.target.lastElementChild.style.borderTopColor = '#263B80';
    }
    else {
      e.target.parentNode.firstElementChild.style.borderBottomColor = '#BFBFBF';
      e.target.parentNode.lastElementChild.style.borderTopColor = '#263B80';
    }
  }
};