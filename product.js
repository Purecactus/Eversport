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

// Cart popup


const popupElement = document.getElementById("popup1");
const cartButton = document.getElementById("cart-button");
const cartImage = document.getElementById("cart-img")
cartButton.addEventListener("click", popupFunction);

function popupFunction(){
    popupElement.style.visibility = "visible";
    setTimeout(function() {
        popupElement.style.visibility = "hidden";
    }, 2000);

    cartImage.src = "img/cart2.svg"
}