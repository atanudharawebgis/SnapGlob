//setting 
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbGnxLHcjjtrZCPc8t_CAXnLGY6bnhdyM",
    authDomain: "photoapp-c26f6.firebaseapp.com",
    projectId: "photoapp-c26f6",
    storageBucket: "photoapp-c26f6.appspot.com",
    messagingSenderId: "182172651984",
    appId: "1:182172651984:web:309bf4dc4ce16cee15e9d5"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

var currentUseremail
// on auth
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        currentUseremail = user.email;
        var email = user.email;
        // ...
        document.getElementById('logoutBtn').style.display = 'block'
        document.getElementById('not_logged_in').style.display = 'none'
        document.getElementById('logged_in').style.display = 'block'
        mapint()
        installalert()
    } else {
        document.getElementById('logoutBtn').style.display = 'none'
        document.getElementById('not_logged_in').style.display = 'block'
        document.getElementById('logged_in').style.display = 'none'
        // User is signed out
        // ...
    }
});

// let's code 
var datab = firebase.database().ref('data');

function UserRegister() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

    }).catch(function (error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });
}
const Auth = firebase.auth();
function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.msg));
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email: getId('eemail'),
        password: getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});

function getId(id) {
    return document.getElementById(id).value;
}

function logoutUser() {
    firebase.auth().signOut()
}



function installalert() {
    if (defeffedPromt) {
        deferredPrompt.prompt()


        deferredPrompt = null
    }
}



