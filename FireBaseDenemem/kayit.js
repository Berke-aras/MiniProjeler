// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCvWi8tDBKS-Y5vV3BVDz8NrIeILG23Sg0",
    authDomain: "aricilik-90bc8.firebaseapp.com",
    databaseURL:
        "https://aricilik-90bc8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "aricilik-90bc8",
    storageBucket: "aricilik-90bc8.appspot.com",
    messagingSenderId: "799487412043",
    appId: "1:799487412043:web:c403e862bd919894014ace",
    measurementId: "G-0E67V7HFZY",
};
firebase.initializeApp(firebaseConfig);

// Create a new data
function createData() {
    const newData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        psw: document.getElementById("psw").value,
    };

    firebase.database().ref("users1/").push(newData);

    alert("Başarıyla Kayıt Edildi");
}
