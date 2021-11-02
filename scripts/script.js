// Get the modal
var modal = document.getElementById("Modalone");

var modaltwo = document.getElementById("Modaltwo");

var modalthree = document.getElementById("Modalthree");

var modalfour = document.getElementById("Modalfour");

// Get the button that opens the modal
var btn = document.getElementById("Btnone");

var btntwo = document.getElementById("Btntwo");

var btnthree = document.getElementById("Btnthree");

var btnfour = document.getElementById("Btnfour");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

btntwo.onclick = function() {
    modaltwo.style.display = "block";
  };

btnthree.onclick = function() {
    modalthree.style.display = "block";
  };

btnfour.onclick = function() {
    modalfour.style.display = "block";
  };
  
// When the user clicks on <span> (x), close the modal
// Doing a forEach loop
span.forEach((span) => {
    span.addEventListener("click", () => {
      modal.style.display = "none";
      modaltwo.style.display = "none";
      modalthree.style.display = "none";
      modalfour.style.display = "none";
      
    });
  });
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal || event.target == modaltwo || event.target == modalthree || event.target == modalfour) {
      modal.style.display = "none";
      modaltwo.style.display = "none";
      modalthree.style.display = "none";
      modalfour.style.display = "none";
    }
  };


  //Animation on scroll
  var sections = document.querySelectorAll('sectiontwo');
  var container = document.querySelector('.scroll__container');
  container.addEventListener('scroll', function () {
  sections.forEach((e, i) => {
  var top = (e.getBoundingClientRect().top);
  if (top == 0) {
  e.classList.add('is-inview')
  } else {
  e.classList.remove('is-inview')
  }
  });
  })
  container.dispatchEvent(newCustomEvent('scroll'));