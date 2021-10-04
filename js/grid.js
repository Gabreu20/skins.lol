jQuery.getJSON('https://ddragon.leagueoflegends.com/api/versions.json', function (version) {
    jQuery.getJSON('https://ddragon.leagueoflegends.com/cdn/' + version[0] + '/data/pt_BR/champion.json', function (data) {
        var count = Object.keys(data.data).length;
        const champData = Object.keys(data.data);
        for (let i = 0; i < count; i++) {
            const str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/' + version[0] + '/img/champion/' + champData[i].toString() +
                '.png" class="square-champ" id="' + champData[i].toString() + '" onClick="champPage(this.id)" />';
            document.getElementById("champions").insertAdjacentHTML('beforeend', str);
        }
    });
});
$.getJSON('../json/skinsThatMatch.json', function(teste){
    console.log(teste.data);
});
function champPage(id) {
    window.location.href = './champPages/' + id + '.html';
    const newDoc = document.implementation.createHTMLDocument(id);
}