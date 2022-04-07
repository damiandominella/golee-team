var elements = document.querySelectorAll(".work-card");
console.log(elements);
console.log(elements.length);
var none = "none";
var block = "block";

for (var i = 0; i < elements.length; i++) {
  (function (i) {
    elements[i].addEventListener(
      "click",
      function (event) {
        myFunction(i);
      },
      false
    );
  })(i);
}

function myFunction(i) {
  var el = document.getElementsByClassName("description")[i];
  var currentStyle = window.getComputedStyle(el, null).display;

  console.log(el);
  console.log(currentStyle);
  if (currentStyle === none) {
    document.getElementsByClassName("description")[i].style.display = block;
  } else {
    document.getElementsByClassName("description")[i].style.display = none;
  }
}
