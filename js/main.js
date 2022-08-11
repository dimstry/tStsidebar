// init
const roundBtn = document.querySelector(".round_btn");
const navSection = document.querySelector(".nav_section");
const headerLeft = document.querySelector(".header_left");
const headerRight = document.querySelector(".header_right");
const navInfo = document.querySelectorAll(".nav_info")
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu_item");
const notif = document.querySelector(".notif");


roundBtn.addEventListener('click', () => {
    console.log('tombol di klik mang');
    navSection.style.width = "5.5rem";
    headerRight.style.display = "none";
    headerLeft.style.width = "100%";
    for (let i = 0; i < navInfo.length; i++) {
        navInfo[i].style.display = "none";
    }
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.add("respon");
    }
    notif.style.display = "none";

    menu.style.textAlign = "center";
})