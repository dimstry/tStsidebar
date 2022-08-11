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
const tool = document.querySelector(".tool");
const me = document.querySelector(".me");
const back = document.querySelector(".back");
const backMassage = document.querySelector("#back_massage");
const nextMassage = document.querySelector("#next_massage");

// function display & text
const forDisplay = (text, display) => {
    headerRight.style.display =display;
    tool.style.display =display;
    me.style.display =display;
}

// function loop menu
const forLoop = (display,text) => {
    for (let i = 0; i < navInfo.length; i++) {
        navInfo[i].style.display = display;
    }
    for (let i = 0; i < menu.length; i++) {
        menu[i].style.textAlign =text;
    }
    for (let i = 0; i < person.length; i++) {
        person[i].style.display = display;
    }
    for (let i = 0; i < massageNotif.length; i++) {
        massageNotif[i].style.display = display;
    }
    for (let i = 0; i < massage.length; i++) {
        massage[i].style.justifyContent = text;
    }
    notif.style.display =display;
}

// function width
const forWidth = (section, head) => {
    navSection.style.width = section;
    headerLeft.style.width = head;
}


// trigger 1
roundBtn.addEventListener('click', () => {
    console.log('tombol di klik mang');
    back.style.display ="block";
    roundBtn.style.display ="none";
    forWidth("5.5rem","100%");
    forLoop("none","center");
    forDisplay("center", "none");
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.add("respon");
    }
})

// trigger back 
back.addEventListener("click", () => {
    back.style.display ="none";
    roundBtn.style.display ="block";
    forWidth("16rem","50%");
    forLoop("flex",null);
    forDisplay(null, "block");
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].classList.remove("respon");
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

// massage click 
for (let i = 0; i < massage.length; i++) {
    massage[i].addEventListener("click", function() {
        alert("isi sendiri ah cape :( ")
    });
}


// back and next massage 
backMassage.addEventListener("click", () => {
    alert("isi sendiri ya capeeeeeee :( ")
});

nextMassage.addEventListener("click", () => {
    alert("sorry next, swipe, swipe, swipe")
})