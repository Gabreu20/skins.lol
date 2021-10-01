jQuery.getJSON('http://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json', function(data) {
    var count = Object.keys(data.data).length;
    var teste = Object.keys(data.data);
    for(let i = 0; i < count; i++){
        console.log(teste[i]);
        const str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/' + teste[i].toString() +'.png" class="square-champ" id="champID' + i +'"/>';
        document.getElementById("champions").insertAdjacentHTML('beforeend', str);
    }
});