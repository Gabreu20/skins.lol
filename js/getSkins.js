const champName = document.title;
window.setTimeout(setBackgroundImage, 100);
jQuery.getJSON('https://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion/' + champName + '.json', function(data) {
    document.getElementById("name").innerText = document.title;
    document.getElementById("desc").innerText = data.data[champName].title;
    var count = Object.keys(data.data[champName].skins).length;
    for (let i = 1; i <= count; i++) {
        const str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champName + '_' + data.data[champName].skins[i].num + 
        '.jpg" class="square-champ" id="'+ champName + '_' + data.data[champName].skins[i].num +'" onClick="addSkin(this.id)" style="opacity: 0.6; border: 4px solid black;"/>';
        document.getElementById("Skins").insertAdjacentHTML('beforeend', str);        
        console.log(data.data[champName].skins[i]);
    }
});
function setBackgroundImage(){
    document.getElementById("header").style.backgroundImage = "url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champName +"_0.jpg')";
}

