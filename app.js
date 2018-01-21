 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCNBxDN0cmCJmHQQJd1b1s2w6Y938tOwWU",
    authDomain: "inicio-de-sesion-a973a.firebaseapp.com",
    databaseURL: "https://inicio-de-sesion-a973a.firebaseio.com",
    projectId: "inicio-de-sesion-a973a",
    storageBucket: "inicio-de-sesion-a973a.appspot.com",
    messagingSenderId: "609242905824"
  };
  firebase.initializeApp(config);

  $('#accesoGoogle').click(function() {
    authGoogle();
  })

  function authGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    autenticacion(provider);
  }

  function autenticacion(provider) {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
      }).catch(function(error) {
          console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email)
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);
        // ...
      });
  }

  var $title = $('#title')

  var database = firebase.datebase().ref().child('titulo')

  database.on('value', function(snapshot) {
    $title.text(snapshot.val());
  });