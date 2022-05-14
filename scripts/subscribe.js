 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCx480FLCnu5oFOjCSIuqxK2C_SECJY5P0",
  authDomain: "subscription-1fc70.firebaseapp.com",
  databaseURL: "https://subscription-1fc70-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "subscription-1fc70",
  storageBucket: "subscription-1fc70.appspot.com",
  messagingSenderId: "173796466580",
  appId: "1:173796466580:web:80ff03c9cd4beab0feb981",
  measurementId: "G-8MYWCW067C"
 };
 
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
    import { getDatabase, ref, set, push }
     from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
 
    const db = getDatabase();

 
    //Get values
     const email = document.getElementById('email');
     const submitBtn = document.getElementById('submitBtn');
     
     function InsertData(e){
       e.preventDefault();

       const db = getDatabase();
       const postListRef = ref(db, 'emails');
       const newPostRef = push(postListRef);
        set(newPostRef, {
          Email: email.value
          
       });

       document.getElementById("email").value = '';
      }

     document.getElementById('submitBtn').addEventListener('click', InsertData);

     
 
  