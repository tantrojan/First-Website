function dropdown(){
    var elem = document.getElementById("dropmenu");
    if ( elem.style.display === "none"){
        elem.style.display = "block";
    }
    else{
        elem.style.display = "none";
    }
}

function myFunction() {
    document.getElementById("dropmenu").style.display = "none";
}