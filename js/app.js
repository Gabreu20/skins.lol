import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, get, child, update, remove }
  from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
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
const db = getDatabase(app);

var nameInput = document.getElementById('nameInput');
var addButton = document.getElementById('addButton');
var findButton = document.getElementById('findButton');
var pdbn = document.getElementById('playerdatabasename');

function InsertData() {
  if (nameInput.value !== "") {
    const dbref = ref(db);
    get(child(dbref, "accounts/" + nameInput.value)).then((snapshot) => {
      if (!snapshot.exists()) {
        set(ref(db, "accounts/" + nameInput.value), {
          Nick: nameInput.value
        })
          .then(() => {
            alert("Sucesso");
          })
          .catch((error) => {
            alert("Não deu, erro" + error);
          });
      }
      else{
        alert("Nome de Usuário já selecionado, tente novamente!");
      }
    })
  }
  else {
    alert("O Nick não pode ser vazio");
  }
}

function SelectData() {
  const dbreff = ref(db);

  get(child(dbreff, "accounts/" + nameInput.value)).then((snapshot) => {
    if (snapshot.exists()) {
      pdbn.value = snapshot.val().Nick;
    }
    else {
      alert("Não encontramos esse jogador")
    }
  })
    .catch((error) => {
      alert("Não deu, erro" + error);
    });
}
findButton.addEventListener('click', SelectData);
addButton.addEventListener('click', InsertData);
