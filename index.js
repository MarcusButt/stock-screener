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

