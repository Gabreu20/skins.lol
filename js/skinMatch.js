var dbArray = [];
var matchedSkins = [];

//retorna um valor maior ou igual ao min e menos q max
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function matchSkins(usuario) {
    for (let i = 0; i < skinArray.length; i++) {       
        var skinPattern = getSkinData(skinArray[i]);   
        var PROJETO = skinArray[i].indexOf("PROJETO") > -1;
        var VO = skinArray[i].indexOf("Velho Oeste") > -1;     
        console.log(skinPattern);
        for (let j = 0; j < dbArray.length; j++) {
            var skinPattern2 = getSkinData(dbArray[j]);  
            var PROJETO2 = dbArray[j].indexOf("PROJETO") > -1;
            var VO2 = dbArray[j].indexOf("Velho Oeste") > -1;
            console.log(skinPattern2);   
            if(PROJETO && PROJETO2 || VO && VO2){
                matchedSkins.push(dbArray[j]);
            }
            /*       
            if(skinPattern === skinPattern2){
                matchedSkins.push(dbArray[j]);
            }           */                   
        }
        if(i === skinArray.length - 1){
            matchedSkins.push("-1");
            console.log("Skins parecidas de " + usuario + " " + matchedSkins);
        }
    }
}

/*
function getSkinData(champName, skinID) {
    var versionSTR = $.getJSON({ url: 'https://ddragon.leagueoflegends.com/api/versions.json', async: false }).responseText;
    var version = JSON.parse(versionSTR);
    var skinNameSTR = $.getJSON({ url: 'https://ddragon.leagueoflegends.com/cdn/' + version[0] + '/data/pt_BR/champion/' + champName + '.json', async: false }).responseText;
    var data = JSON.parse(skinNameSTR);
    for (let i = 1; i < data.data[champName].skins.length; i++) {
        if (data.data[champName].skins[i].num == skinID) {           
            return data.data[champName].skins[i].name;
        }
    }
}
*/

function getSkinData(id){
    var dataSTR = $.getJSON({url: "../json/skinsThatMatch.json", async: false }).responseText;
    var data = JSON.parse(dataSTR);
    var count = Object.keys(data.data).length;
    for(let i = 0; i < count; i++){
        for(let j = 0; j < data.data[i].length; j++){
            if(id === data.data[i][j])
                return i;
        }
    }  
}