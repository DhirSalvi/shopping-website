//2nd js file

function displayTitle(){
    var storedName=localStorage.getItem("name");
    document.getElementById("handbags").innerHTML=storedName + " Handbags";
}

window.onload = function(){
    displayTitle();
}
