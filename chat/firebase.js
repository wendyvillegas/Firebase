
firebase.initializeApp({
    apiKey: "AIzaSyBHNHEHlmb8-do-mpT_ARboE5hD54lbPhw",
    authDomain: "chat-77e6f.firebaseapp.com",
    databaseURL: "https://chat-77e6f.firebaseio.com",
    projectId: "chat-77e6f",
    storageBucket: "chat-77e6f.appspot.com",
    messagingSenderId: "117271161991",
    appId: "1:117271161991:web:6ec2c8090a27e175"
});

var db = firebase.firestore();

var msj = document.getElementById('msj');
var boton = document.getElementById('enviar');
var caja = document.getElementById('chat');

boton.addEventListener("click", function () {
    var texto = msj.value;
    var espacio = "<br>";
    chat.innerHTML += espacio + texto;
    //alert(texto);

    firebase.database().ref('chat').push({
        mensaje: texto
    });
    document.getElementById('msj').value='';
});