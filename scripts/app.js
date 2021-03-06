let weather = {
    "apiKey": "7025c693a8b25e37ff1ce82e9efbd331",
    fetchWeather:function(){
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=cancun&units=metric&appid=7025c693a8b25e37ff1ce82e9efbd331"
        )
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { sunrise, sunset } = data.sys;
    
        console.log(name,icon,description,humidity,sunrise,sunset);
        document.querySelector(".city").innerText = " " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " ° C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

    }
};
weather.fetchWeather("Cancún");

//time

const str = new Date().toLocaleString('en-US', { timeZone: 'America/Cancun',hour: '2-digit', minute:'2-digit'});
console.log(str);
document.getElementById("time").innerHTML = str;



//Gallery
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
 
}

//burgermenu
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
        
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();