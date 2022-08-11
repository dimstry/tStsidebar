// init
const roundBtn = document.querySelector(".round_btn");
const navSection = document.querySelector(".nav_section");
const headerLeft = document.querySelector(".header_left");
const headerRight = document.querySelector(".header_right");
const navInfo = document.querySelectorAll(".nav_info")
const menu = document.querySelectorAll(".head_text");
const menuItem = document.querySelectorAll(".menu_item");
const menuLink = document.querySelectorAll(".menu_link")
const notif = document.querySelector(".notif");
const person = document.querySelectorAll(".person");
const massageNotif = document.querySelectorAll(".notif_massage");
const massage = document.querySelectorAll(".massage");
const tool = document.querySelector(".tool")

// function display & text
const forDisplay = (text, display) => {
    headerRight.style.display = display;
    notif.style.display = display;
    tool.style.display = display;
}

// function loop menu
const forLoop = (display, classL, text) => {
    for (let i = 0; i < navInfo.length; i++) {
        navInfo[i].style.display = display;
    }
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.add(classL);
    }
    for (let i = 0; i < menu.length; i++) {
        menu[i].style.textAlign =text;
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
    forLoop("none", "respon", "center");
    forDisplay("center", "none");
    for (let i = 0; i < person.length; i++) {
        person[i].style.display = "none";
    }
    for (let i = 0; i < massageNotif.length; i++) {
        massageNotif[i].style.display = "none";
    }
    for (let i = 0; i < massage.length; i++) {
        massage[i].style.justifyContent = "center";
    }
})


// active function
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}