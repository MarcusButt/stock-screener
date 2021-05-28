import React from 'react';
import ReactDOM from 'react-dom';

function toggleDisplay() {
  var x = document.getElementById("filter-group-body1");
  if (x.style.display === "none") {
    x.style.display = "table";
  } else {
    x.style.display = "none";
  }
}

(function toggleRotate(document){

   x = document.getElementsByClassName("button-box");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";

      var icon = document.getElementById('filter-btn1');
      var active = false;

      x[i].addEventListener('click', function(){
        if(active){
        icon.className = 'filter-group-btn';  
        } else{
        icon.className = 'filter-btn active';
        }
  
        active = !active;
    });
   }
    // document.getElementById(tabName).style.display = "block";

  // var div = document.querySelector('#button-box');
  // var icon = document.getElementById('filter-btn1');
  // var active = false;

  // div.addEventListener('click', function(){
  //     if(active){
  //     icon.className = 'filter-group-btn';  
  //     } else{
  //     icon.className = 'filter-btn active';
  //     }

  //     active = !active;
  // });
  })(document);
