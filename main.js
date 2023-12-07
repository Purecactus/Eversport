const sidebarMenu = document.getElementById("sidebar-menu-id")
const hamburgerIcon = document.getElementById("hamburger")
const closeButton = document.getElementById("sidebar-close-button")
hamburgerIcon.addEventListener("click", sidebarFunction)
closeButton.addEventListener("click", closeFunction)

function sidebarFunction(){
    sidebarMenu.style.display = "block";
}

function closeFunction(){
    sidebarMenu.style.display = "none";
}