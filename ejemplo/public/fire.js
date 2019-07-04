

 var firebaseConfig = {
    apiKey: "AIzaSyA23ee74wm2b_r0BkPV50xZH5bcXwZWKy4",
    authDomain: "proyecto-firebase-5f7f8.firebaseapp.com",
    databaseURL: "https://proyecto-firebase-5f7f8.firebaseio.com",
    projectId: "proyecto-firebase-5f7f8",
    storageBucket: "proyecto-firebase-5f7f8.appspot.com",
    messagingSenderId: "494553707256",
    appId: "1:494553707256:web:180f772d4ada5643"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function VerificarDatos(){
    var usu = document.getElementById('usu').value;
    var pass = document.getElementById('pass').value;
    
    db.collection("usuarios").onSnapshot((querySnapshot) => {
    
    querySnapshot.forEach((doc) => {
        console.log(`${doc.data().usuario} `);
        console.log(`${doc.data().password} `);
        if(`${doc.data().usuario}`== usu && `${doc.data().password}`==pass){
            console.log("Entro");
            location.href ="http://www.epn.edu.ec";
        }else{
            console.log("Error Contraseña");
            location.href ="pagina2.html";
        }
        
        
        
    });
});
}




