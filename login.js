//1st js file

function navigate(){
    window.location.href="index.html";
}

function storeName(){
    var inputname=document.getElementById("Username").value;
    localStorage.setItem("name",inputname);
    navigate();
}
