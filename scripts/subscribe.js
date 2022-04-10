import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";


 
//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit Form
function submitForm(e){
  e.preventDefault();

//Get values
var email = getInputVal('email');

//Save Message
saveMessage(email);

}

//function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Get a reference to the database service
const database = getDatabase(app);
var emailRef = ref(database, 'emails'); 

//Save message to Firebase
import { push, set } from "firebase/database";
//Subscribe to Firebase
function saveMessage(Email,){
  var newEmailRef = push(emailRef);
  set(newEmailRef, {
    Email:Email
  });
}   
     