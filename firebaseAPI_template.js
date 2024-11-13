//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC8z_deQJHqhrNZSDBHmKH1w6LNDVpgWr4",
    authDomain: "dtc05-comp1800-demo.firebaseapp.com",
    projectId: "dtc05-comp1800-demo",
    storageBucket: "dtc05-comp1800-demo.firebasestorage.app",
    messagingSenderId: "120931225139",
    appId: "1:120931225139:web:b37942dd96f7fc5bec1d46"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
