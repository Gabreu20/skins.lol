var dbArray = [];
var matchedSkins = [];

//retorna um valor maior ou igual ao min e menos q max
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


function matchSkins(usuario) {
    for (let i = 0; i < skinArray.length; i++) {
        for (let j = 0; j < dbArray.length; j++) {
            if (skinArray[i] === dbArray[j]) {
                matchedSkins.push(dbArray[j]);
            }
        }
        if(i === skinArray.length - 1){
            matchedSkins.push("-1");
            console.log("Skins parecidas de " + usuario + " " + matchedSkins);
        }
    }
}