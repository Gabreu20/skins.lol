var userInTeam = [];
function addUser() {
    userInTeam.push(document.getElementById('time').value);
    var str = '<div onclick="deleteUser(this.id);" class="usersT" id="' + '' + document.getElementById('time').value + 'user">' + document.getElementById('time').value + ' x ' + '</div>';
    document.getElementById("usersInTeam").insertAdjacentHTML('beforeend', str);
    console.log(userInTeam);
}
function deleteUser(id) {
    var user = id.split("u");
    var del = user[0];
    console.log(user);
    if (document.getElementById(id) !== null) {
        var myDiv = document.getElementById(id);
        myDiv.parentNode.removeChild(myDiv);
    }
    const index = userInTeam.indexOf(del);
    if (index > -1) {
        userInTeam.splice(index, 1);
    }
    console.log(userInTeam);
}
function match() {
    getUserSkins();
}