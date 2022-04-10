let weather = {
    "apiKey": "7025c693a8b25e37ff1ce82e9efbd331",
    fetchWeather:function(){
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=åre&units=metric&appid=7025c693a8b25e37ff1ce82e9efbd331"
        )
        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name,icon,description,humidity);
        document.querySelector(".city").innerText = " " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + " ° C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";


    }
};
weather.fetchWeather("Åre");

//Time

const str = new Date().toLocaleString('en-US', { timeZone: 'Europe/Stockholm',hour: '2-digit', minute:'2-digit'});
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