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
    // console.log(document.getElementById("yemek-katilim-evet").value);

    let gun1_check = " ",
        gun2_check = " ",
        yemekEvet = " ",
        yemekHayır = " ";

    if (document.querySelector(".gun1").checked) {
        gun1_check = document.getElementById("gun1").value;
    }

    if (document.querySelector(".gun2").checked) {
        gun2_check = document.getElementById("gun2").value;
    }

    if (document.querySelector(".yemekEvet").checked) {
        yemekEvet = document.getElementById("yemek-katilim-evet").value;
    }

    if (document.querySelector(".yemekhayır").checked) {
        yemekHayır = document.getElementById("yemek-katilim-hayir").value;
    }

    const newData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telno: document.getElementById("telno").value,
        merkezad: document.getElementById("merkezad").value,
        merkezozet: document.getElementById("merkezozet").value,
        unvan: document.getElementById("unvan").value,
        adres: document.getElementById("adres").value,
        gun1: gun1_check,
        gun2: gun2_check,
        yemekkatilimEvet: yemekEvet,
        yemekkatilimHayir: yemekHayır,
        diyet: document.getElementById("diyet").value,
        alerji: document.getElementById("alerji").value,
    };

    firebase.database().ref("users4/").push(newData);

    alert("Başarıyla Kayıt Edildi");

    setTimeout(function () {
        window.location.href = "../index.html";
    }, 6000);
}
