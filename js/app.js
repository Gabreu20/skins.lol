import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove }
  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut }
  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCVmtg7glsXN17i6L8OcTQn8N9B3ivrwCo",
  authDomain: "skins-lol.firebaseapp.com",
  projectId: "skins-lol",
  storageBucket: "skins-lol.appspot.com",
  messagingSenderId: "193823999190",
  appId: "1:193823999190:web:20fa84e046d1631a95f577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

var currentuser = sessionStorage.getItem('currentUser');
if (currentuser !== null) {
  document.getElementById("userName").innerText = currentuser;
  var myDiv = document.getElementById("loginPanel");
  myDiv.parentNode.removeChild(myDiv);
  var str = '<button id="ENCERRAR SESSÃO">Sair</button>';
  document.getElementById("accountPanel").insertAdjacentHTML('beforeend', str);
}
else {

}
console.log(currentuser);

var nameInput = document.getElementById('user');
var addButton = document.getElementById('signup');
var loginBtn = document.getElementById('login');
var testeBTN = document.getElementById('match');
if(document.getElementById('sair') !== null)
  var sairBTN = document.getElementById('sair');


//fazer login na conta
function login() {
  const emaill = document.getElementById("emaillogin").value;
  const passwordl = document.getElementById("passlogin").value;

  signInWithEmailAndPassword(auth, emaill, passwordl)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const currentUser = user.displayName;
      sessionStorage.setItem("currentUser", currentUser);
      console.log(currentUser);
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
}

function logOut(){
  selectedSkins = [];
  logged = false;
  signOut(auth)
    .then(() =>{
      sessionStorage.removeItem("currentUser");
      sessionStorage.removeItem("skinArray");
      document.location.reload(true);
    })
}

//salvar dados na DB
function InsertData() {
  if (nameInput.value !== "" && !nameInput.value.includes("|") && !nameInput.value.includes("adm")) {
    const dbref = ref(db);
    get(child(dbref, "accounts/" + nameInput.value)).then((snapshot) => {
      if (!snapshot.exists()) {
        set(ref(db, "accounts/" + nameInput.value), {
          //Nick: nameInput.value
          //Skins: selectedSkins
        })
          .then(() => {
            //criar conta
            const email = document.getElementById("email").value;
            const password = document.getElementById("pass").value;
            const userlogin = document.getElementById("user").value;


            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                updateProfile(auth.currentUser, {
                  displayName: userlogin
                })
                alert("Sucesso");
                set(ref(db, "accounts/" + nameInput.value), {
                  Nick: nameInput.value
                  //Skins: selectedSkins
                })
                const user = userCredential.user;
                console.log("Criou");
                console.log(user);
                setTimeout(goToLoginPage, 300);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage);
              });
          })
          .catch((error) => {
            alert("Não deu, erro" + error);
          });
      }
      else {
        alert("Nome de Usuário já selecionado, tente novamente!");
      }
    })
  }
  else {
    alert("O Nick não pode ser vazio");
  }
}

var logged = "";
var loggedVerify = sessionStorage.getItem('logged');
var loggedVerified = JSON.parse(loggedVerify);
logged = loggedVerified;
console.log(logged);
//Carregar dados da DB
if (currentuser !== null && !logged) {
  const dbreff = ref(db);

  get(child(dbreff, "accounts/" + currentuser)).then((snapshot) => {
    if (snapshot.exists()) {
      skinArray = snapshot.val().Skins;
      logged = true;
      sessionStorage.setItem("logged", logged);
      sessionStorage.setItem('skinArray', JSON.stringify(skinArray));
      console.log(skinArray);
    }
    else {
      alert("Não encontramos esse jogador");
    }
  })
    .catch((error) => {

    });
}

function getUserSkins() {
  for (let i = 0; i < userInTeam.length; i++) {
    //Carregar dados da DB
    const dbreff = ref(db);

    get(child(dbreff, "accounts/" + userInTeam[i])).then((snapshot) => {
      if (snapshot.exists()) {
        var usuario = userInTeam[i];
        dbArray = snapshot.val().Skins;
        var sessionString = sessionStorage.getItem('skinArray');
        var selectedSkins = JSON.parse(sessionString);
        if (selectedSkins === null) {
          selectedSkins = [];
        }
        skinArray = selectedSkins;
        console.log(skinArray + " Minhas Skins");
        console.log(dbArray + " Skins de " + userInTeam[i]);
        console.log(skinArray.length);
        matchSkins(usuario);
      }
      else {
        alert("Não encontramos esse jogador");
      }
    })
      .catch((error) => {

      });
  }
}

//Atualizar dados da DB
function UpdateData() {
}

if(document.URL.includes("index.html")){
  if(logged){
    update(ref(db, "accounts/" + currentuser), {
      Skins: selectedSkins
    })
      .then(() => {
        //alert("Salvo!")
      })
      .catch((error) => {
        //alert("Erro" + error);
      });
  }
}

function goToLoginPage(){
  window.location.href = './login.html';
}

//listener dos botoes
//findButton.addEventListener('click', SelectData);
if (loginBtn !== null) {
  loginBtn.addEventListener('click', login);
}
if (addButton !== null) {
  addButton.addEventListener('click', InsertData);
}
if (testeBTN !== null) {
  testeBTN.addEventListener('click', getUserSkins);
}
if (sairBTN !== null) {
  sairBTN.addEventListener('click', logOut);
}