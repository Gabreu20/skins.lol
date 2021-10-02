var skinArray = [];
setTimeout(setSelectedSkins, 100);


function setSelectedSkins(){
    for(let i = 0; i < skinArray.length; i++){
        document.getElementById(skinArray[i]).style.opacity = 0.5;
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
            document.getElementById(skinArray[i]).style.opacity = 1;
            const index = skinArray.indexOf(id);
            if (index > -1) {
                skinArray.splice(index, 1);
            }
            break;
        }
    }
    if (canAdd){
        document.getElementById(id).style.opacity = 0.5;
        skinArray.push(id)
    }
    console.log(skinArray);
}
function save() {
    sessionStorage.setItem('skinArray', JSON.stringify(skinArray));
    window.location.href = "../index.html";
}