// Info Selector
const buttonElement = document.getElementById("product-info");
const myText = document.getElementById("product-description");
const showSpecs = document.getElementById("specs");
buttonElement.addEventListener("click", clickFunction);

function clickFunction(){
    myText.style.display = "block";
    showSpecs.style.display = "none";
}

const specificationsButton = document.getElementById("specifications");
const buttonChange = document.getElementById("product-description");
specificationsButton.addEventListener("click", clickTap);

function clickTap(){
    buttonChange.style.display = "none"
    showSpecs.style.display = "block"
}