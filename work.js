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
        toggleVisibility(elements[i]);
      },
      false
    );
  })(i);
}

function toggleVisibility(el) {
  var currentStyle = window.getComputedStyle(el, null).display;

  if (currentStyle === none) {
    el.style.display = block;
  } else {
    el.style.display = none;
  }
}
