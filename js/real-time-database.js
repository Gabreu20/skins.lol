var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var addButton = document.getElementById('addButton');

function InsertData(){
    set(ref(db, "accounts/"+ nameInput.value),{
        Nick: nameInput.value,
        age: ageInput.value
    });
}
addButton.addEventListener('click', InsertData);
