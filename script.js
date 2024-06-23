var sidenav = document.querySelector(".side-navbar")

function openSideNav(){
    sidenav.style.right ="0%"
}

function closeSideNav(){
    sidenav.style.right ="-50%"
}





var button = document.querySelector(".button-div")
var maindiv = document.querySelector(".main-div")
var body = document.getElementById("body")
var icon = document.getElementById("icon")
var darkMode = false;

function darkmodeactivate() {

    if (darkMode) {

        button.style.marginLeft = "0%";
        button.style.backgroundColor = "white"
        maindiv.style.backgroundColor = "black"
        body.style.backgroundColor = "white"
        body.style.transition = "1.5s"
        icon.className = "fa-solid fa-sun"
        button.style.color ="black"





    }

    else {

        button.style.marginLeft = "50%";
        button.style.backgroundColor = "black"
        maindiv.style.backgroundColor = "white"
        body.style.backgroundColor = "black"
        body.style.transition = "1.5s"
        icon.className = "fa-solid fa-moon"
        button.style.color ="white"
        icon.style.fontSize="20px"


    }
    darkMode = !darkMode;
}