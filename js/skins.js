var skinArray = [];

function addSkin(id) {
    var canAdd = new Boolean(false);
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
            const index = skinArray.indexOf(id);
            if (index > -1) {
                skinArray.splice(index, 1);
            }
            break;
        }
    }
    if (canAdd)
        skinArray.push(id)
    console.log(skinArray);
}
function save() {
    sessionStorage.setItem('skinArray', JSON.stringify(skinArray));
    window.location.href = "../index.html";
}