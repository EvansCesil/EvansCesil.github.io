/* open sidenav w/push content effect & opacity, reduce footer height */ 
function openNav() {
  document.getElementById("head").style.position ="relative";
  document.getElementById("mySidenav").style.width = "250px";
  if (screen.width >= 500) {
    /* only push content on wider screens */                   document.body.style.marginLeft = "250px";
  }
  document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
  document.getElementById("footer").style.height = "4%";
}

/* return to normal */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.marginLeft ="0px";
  document.body.style.backgroundColor = "white";
  document.getElementById("footer").style.height = "15%";
  document.getElementById("head").style.position = "fixed";
}