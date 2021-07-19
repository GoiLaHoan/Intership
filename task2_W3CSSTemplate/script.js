var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("lds-roller").style.display = "none";
  document.getElementById("main").style.display = "block";
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "white"
}

// var slider = document.getElementById("myRange");
// var output = document.getElementById("danhgia");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value+"*";
// }

var header = document.getElementById('header');
// console.log(header.offsetHeight);

var mbmenu = document.getElementById('mobile-menu');


var heightheader = header.offsetHeight;

mbmenu.onclick = function() {
  // console.log(header.offsetHeight);
  // console.log(heightheader);
  var isClosed = header.clientHeight === 46;
  if(isClosed) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// console.log(menuItems);
for (var i=0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  menuItem.onclick = function() {
    header.style.height = null;
  }
}
