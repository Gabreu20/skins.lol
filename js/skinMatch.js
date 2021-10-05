var skinToCompare = [""];
var dbArray = [];
var matchedSkins = [];

var selected = 0;

//retorna um valor maior ou igual ao min e menos q max
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function SelectedSkinToCompare(id) {
    skinToCompare[0] = id;
    console.log(skinToCompare);
    console.log(document.getElementById(id).focus());
}

function matchSkins(usuario) {
    matchedSkins = [];
    //var skinPattern = getSkinData(skinToCompare[0]);
    var PROJETO = skinToCompare[0].indexOf("PROJETO") > -1;
    var VO = skinToCompare[0].indexOf("Velho Oeste") > -1;
    console.log(PROJETO);
    for (let j = 0; j < dbArray.length; j++) {
        //var skinPattern2 = getSkinData(dbArray[j]);
        var PROJETO2 = dbArray[j].indexOf("PROJETO") > -1;
        var VO2 = dbArray[j].indexOf("Velho Oeste") > -1;
        console.log(PROJETO2);
        if (PROJETO && PROJETO2 || VO && VO2) {
            matchedSkins.push(dbArray[j]);
        }
    }
    console.log(matchedSkins);
    ShowMatchedSkins(usuario);
}

function getSkinData(id) {
    var dataSTR = $.getJSON({ url: "../json/skinsThatMatch.json", async: false }).responseText;
    var data = JSON.parse(dataSTR);
    var count = Object.keys(data.data).length;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < data.data[i].length; j++) {
            if (id === data.data[i][j])
                return i;
        }
    }
}

function SetMySkins() {
    var a = sessionStorage.getItem('skinArray');
    var b = JSON.parse(a);
    console.log(b);

    for (let i = 0; i < b.length; i++) {
        var champStatsStr = b[i].split("|");
        var champStats = champStatsStr[1].split("_");
        console.log(champStats);

        var str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champStats[0] + '_' + champStats[1] +
            '.jpg" class="square-skin" id="' + b[i] + '" onClick="SelectedSkinToCompare(this.id)" "/>';
        document.getElementById("Skins").insertAdjacentHTML('beforeend', str);
    }
}

function ShowMatchedSkins(usuario) {
    var b = JSON.stringify(matchedSkins);
    var champStatsStr = b.split("|");
    var champStats = champStatsStr[1].split("_");
    var champs = champStats[1].split('"');
    console.log(champStats[0]);
    console.log(champs[0]);

    var str = '<input type="image" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + champStats[0] + '_' + 
        champs[0] +'.jpg" class="square-skin" id="teste" onClick="" "/>';
    document.getElementById("Matched").insertAdjacentHTML('beforeend', str);
    document.getElementById("pName").innerText = usuario;
}

function searchSkin() {
    var busca = document.getElementById("busca");
    var searchEles = document.getElementById("Skins").children;
    for (var i = 0; i < searchEles.length; i++) {
        if (searchEles[i].id.indexOf(busca.value) > -1) {
            searchEles[i].style.display = 'inline';
            console.log("achou");
        }
        else {
            searchEles[i].style.display = 'none';
        }
    }
}
$(document).ready(function () {
    $("#busca").on("input", function () {       
        searchSkin();
    });
});