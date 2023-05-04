
var firebaseConfig =
 {
      apiKey: "AIzaSyC0aqwO7rZWWiWWMTxWStPqBBC_nyrUFLY",
      authDomain: "kwitter-330c5.firebaseapp.com",
      databaseURL: "https://kwitter-330c5-default-rtdb.firebaseio.com",
      projectId: "kwitter-330c5",
      storageBucket: "kwitter-330c5.appspot.com",
      messagingSenderId: "264397667371",
      appId: "1:264397667371:web:6fd2e0f0c3be801139be6e"
    };
firebase.initalizeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
