window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if(this.scrollY <= 300) nav.style.backgroundColor = "rgba(255, 255, 255,0.2)"; 
    else nav.style.backgroundColor = "azure";
};

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