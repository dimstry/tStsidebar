// init
const roundBtn = document.querySelector(".round_btn");
const navSection = document.querySelector(".nav_section");
const headerLeft = document.querySelector(".header_left");
const headerRight = document.querySelector(".header_right");
const navInfo = document.querySelectorAll(".nav_info")
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu_item");
const menuLink = document.querySelectorAll(".menu_link")
const notif = document.querySelector(".notif");

// function display & text
const forDisplay = (text, display) => {
    headerRight.style.display = display;
    notif.style.display = display;
    menu.style.textAlign = text;
}

// function loop menu
const forLoop = (display, classL) => {
    for (let i = 0; i < navInfo.length; i++) {
        navInfo[i].style.display = display;
    }
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.add(classL);
    }
}

// function width
const forWidth = (section, head) => {
    navSection.style.width = section;
    headerLeft.style.width = head;
}


// trigger 
roundBtn.addEventListener('click', () => {
    console.log('tombol di klik mang');
    forWidth("5.5rem","100%");
    forLoop("none", "respon");
    forDisplay("center", "none");
})


// active function
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}