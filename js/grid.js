jQuery.getJSON('http://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json', function (data) {
    var count = Object.keys(data.data).length;
    const champData = Object.keys(data.data);
    for (let i = 0; i < count; i++) {
        const str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/11.19.1/img/champion/' + champData[i].toString() +
            '.png" class="square-champ" id="' + champData[i].toString() + '" onClick="champPage(this.id)" />';
        document.getElementById("champions").insertAdjacentHTML('beforeend', str);
    }
});
function champPage(id) {
    window.location.href = './champPages/' + id + '.html';
    const newDoc = document.implementation.createHTMLDocument(id);
}