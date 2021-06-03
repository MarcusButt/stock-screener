function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

// function toggleRotate(id) {
//   var elm = document.getElementById(id);
//   var className = elm.className;
//   if(className.indexOf('filter-btn-active') === -1) {
//       elm.className = elm.className + 'filter-btn-active';
//   } else {
//       elm.className = elm.className.replace('filter-btn-active', '');
//   }
// }

function search_ticker(){
  var x = document.getElementById("search_ticker_company").value;
  console.log(x)
}

