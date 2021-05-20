import React from 'react';
import ReactDOM from 'react-dom';

function toggleDisplay() {
    var x = document.getElementById("filter-group-body");
    if (x.style.display === "none") {
      x.style.display = "table";
    } else {
      x.style.display = "none";
    }
  }

function toggleRotate(el) {
  el.classList.toggle('active');
}

(function(document){
  var div = document.getElementById('button-box');
  var icon = document.getElementById('filter-btn');
  var active = false;

  div.addEventListener('click', function(){
      if(active){
      icon.className = 'filter-group-btn';  
      } else{
      icon.className = 'filter-btn active';
      }

      active = !active;
  });
  })(document);