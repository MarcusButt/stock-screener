
function toggleDisplay(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "table";
    } else {
      x.style.display = "none";
    }
  }

function toggleRotate(id) {
  var icon = document.getElementById(id);
  if (icon.style.transform === "rotate(-90deg)") {
    icon.style.transform = "none";
  } else {
    icon.style.transform = "rotate(-90deg)";
  }

}