
function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "table";
    } else {
      x.style.display = "none";
    }
  }

  els = document.getElementsByClassName('button-box')
  var icon = document.getElementById('filter-btn1');
  var active = false;

  for(var i=0; i<els.length; ++i){
    div.addEventListener('click', function(){
      if(active){
      icon.className = 'filter-group-btn';  
      } else {
      icon.className = 'filter-btn active';
      }

      active = !active;
  });

  }