console.log("fb is live");


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA4UNNQaWkma98KRgWIspFqYpKa3SgH0dg",
    authDomain: "prsg-dd5dd.firebaseapp.com",
    databaseURL: "https://prsg-dd5dd.firebaseio.com",
    projectId: "prsg-dd5dd",
    storageBucket: "",
    messagingSenderId: "737997352054",
    appId: "1:737997352054:web:09e24f3e994b0d75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Add database
  var database = firebase.database();

   var ref = database.ref('games/game1');


   var data = {
     name: "Johnny",
     score: 0,
     result: null
   }

   ref.push(data);

   console.log(ref);
