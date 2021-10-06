var userInTeam = [];
function addUser() {
    userInTeam.push(document.getElementById('time').value);
    var str = '<div onclick="deleteUser();" class="usersT" id="' + document.getElementById('time').value + '">' + document.getElementById('time').value + ' x ' + '</div>';
    document.getElementById("usersInTeam").insertAdjacentHTML('beforeend', str);
    console.log(userInTeam);
}
function deleteUser(id) {
    const index = userInTeam.indexOf(id);
    if (index > -1) {
        userInTeam.splice(index, 1);
    }
    console.log(userInTeam);
}
function match() {
    getUserSkins();
}