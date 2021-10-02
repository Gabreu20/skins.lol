const champName = document.title;
jQuery.getJSON('https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion/' + champName + '.json', function(data) {
    var count = Object.keys(data.data[champName].skins).length;
    for (let i = 1; i <= count; i++) {
        const str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champName + '_' + data.data[champName].skins[i].num + 
        '.jpg" class="square-champ" id="'+ champName + '_' + data.data[champName].skins[i].num +'" onClick="addSkin(this.id)"/>';
        document.getElementById("Skins").insertAdjacentHTML('beforeend', str);        
        console.log(data.data[champName].skins[i]);
    }
});
