var skinArray = [];
setTimeout(setSelectedSkins, 500);


function setSelectedSkins(){
    for(let i = 0; i < skinArray.length; i++){
        var exists = document.getElementById(skinArray[i]);
        if(exists){
            document.getElementById(skinArray[i]).style.opacity = 1;
            document.getElementById(skinArray[i]).style.border = "4px solid #4CAF50";
        }
    }    
}

function addSkin(id) {   
    var canAdd = new Boolean(false);
    var thisID = -1;
    for (let i = 0; i < skinArray.length; i++) {
        if (id !== skinArray[i]) {
            
        }
        else {
            canAdd = false;
            break;
        }  
        if(i === skinArray.length - 1){
            canAdd = true;        
        }     
    }
    for(let i = 0; i < skinArray.length; i++){
        if(id === skinArray[i]){
            document.getElementById(skinArray[i]).style.opacity = 0.6;
            document.getElementById(skinArray[i]).style.border = "4px solid black";
            const index = skinArray.indexOf(id);
            if (index > -1) {
                skinArray.splice(index, 1);
            }
            break;
        }
    }
    if (canAdd){
        document.getElementById(id).style.opacity = 1;
        document.getElementById(id).style.border = "4px solid #4CAF50";
        skinArray.push(id)
    }
    console.log(skinArray);
}
function save() {
    sessionStorage.setItem('skinArray', JSON.stringify(skinArray));
    window.location.href = "../champion.html";
}