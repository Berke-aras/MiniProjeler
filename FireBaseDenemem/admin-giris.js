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

//login
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            alert("Giriş Yapıldı. Verileri Geti Butonuna Basınız");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            alert("Hatalı Giriş");
            location.reload();
        });
}

function refresh() {
    location.reload(true);
}

// Read data
firebase
    .database()
    .ref("users4/")
    .on("value", function (snapshot) {
        document.getElementById("showUsers").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            let addDiv = document.createElement("tr");
            addDiv.className = "ekle";
            addDiv.innerHTML =
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.name +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.email +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.telno +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.unvan +
                '  <td class="col-sm-1"     word-break: break-word;">' +
                childData.merkezad +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.merkezozet +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.adres +
                '  <td class="col-sm"     word-break: break-word;">' +
                childData.gun1 +
                '  <td class="col-sm"     word-break: break-word;">' +
                childData.gun2 +
                '  <td class="col-sm"     word-break: break-word;">' +
                childData.yemekkatilimEvet +
                '  <td class="col-sm"     word-break: break-word;">' +
                childData.yemekkatilimHayir +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.diyet +
                '  <td class="col-sm-2"     word-break: break-word;">' +
                childData.alerji;
            document.getElementById("showUsers").appendChild(addDiv);
        });
    });

//sign.out
function signOut() {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
            alert("Başarıyla Çıkış Yapıldı!");
            location.reload();
        })
        .catch((error) => {
            // An error happened.
            alert("Çıkış Yapılamadı!");
            location.reload();
        });
}
