var userInTeam = [];
function addUser() {
    userInTeam.push(document.getElementById('time').value);
    var str = '<div class="usersT" id="' + document.getElementById('time').value + '">' + document.getElementById('time').value + '</div>';
    document.getElementById("usersInTeam").insertAdjacentHTML('beforeend', str);
}
function deleteUser(id) {
    const index = userInTeam.indexOf(id);
    if (index > -1) {
        userInTeam.splice(index, 1);
    }
}
function match() {
    getUserSkins();
}