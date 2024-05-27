document.getElementById("language").onclick = function () {
    let currentLanguage = document.getElementById("language").innerText;

    let newLanguage = "EN";
    if (currentLanguage === "EN") {
        newLanguage = "RU";
    }

    document.getElementById("language").innerHTML = '<img class="icon-planet" src="img/icon-planet.svg" alt="icon-planet">' + newLanguage;
}

// анимация scroll-bar
let scrollBar = document.querySelector('.scroll_bar');
let scrollConatiner = document.querySelector('.blog_scroll');

function Scroll() {
    let totalHeight = scrollConatiner.scrollHeight - scrollConatiner.clientHeight;

    if (window.screen.width > 1600) {
        scrollBar.style.top = ((scrollConatiner.scrollTop / totalHeight) * 307) + 96 + "px";
    } else {
        scrollBar.style.top = ((scrollConatiner.scrollTop / totalHeight) * 197) + 60 + "px";
    }
}

// анимация media
const firstLine = document.querySelector('.container-first');
const secondLine = document.querySelector('.container-second');
const thirdLine = document.querySelector('.container-third');

function genericLine1() {
    return '<img class="item_image" src="./img/icons/line1/Shield.svg" alt="" /> <img class="item_image item_image-adaptive" src="./img/adaptive/$.svg" alt="" /> <img class="item_image item_image-big" src="./img/icons/line1/$.svg" alt="" /> <img class="item_image" src="./img/icons/line1/Soccer.svg" alt="" /> <img class="item_image" src="./img/icons/line1/M.svg" alt="" /> ';
}

function genericLine2() {
    return '<img class="item_image" src="./img/icons/line2/M.svg" alt="" /> <img class="item_image" src="./img/icons/line2/Timer.svg" alt="" /> <img class="item_image" src="./img/icons/line2/Crown.svg" alt="" /> <img class="item_image item_image-adaptive" src="./img/adaptive/World.svg" alt="" /> <img class="item_image item_image-big" src="./img/icons/line2/World.svg" alt="" /> ';
}

function genericLine3() {
    return '<img class="item_image item_image-big" src="./img/icons/line3/Crown.svg" alt="" /> <img class="item_image item_image-adaptive" src="./img/adaptive/Crown.svg" alt="" /> <img class="item_image" src="./img/icons/line3/M.svg" alt="" /> <img class="item_image" src="./img/icons/line3/Shield.svg" alt="" /> <img class="item_image" src="./img/icons/line3/Soccer.svg" alt="" /> <img class="item_image" src="./img/icons/line3/Shield.svg" alt="" /> <img class="item_image" src="./img/icons/line3/Crown-mini.svg" alt="" /> ';
}

function createLine() {
    for (let i = 0; i < 30; i++) {
        firstLine.innerHTML += genericLine1();
        secondLine.innerHTML += genericLine2();
        thirdLine.innerHTML += genericLine3();
    }
}
createLine();

// анимация burger
const open = document.querySelector('.small_image-open');
const close = document.querySelector('.small_image-close');
const modal = document.querySelector('.modal');

function Open(){
    open.style.display = 'none';
    close.style.display = 'block';
    modal.style.left = 0;
    document.body.style.overflow = 'hidden';
}
function Close(){
    open.style.display = 'block';
    close.style.display = 'none';
    modal.style.left = '-3000px';
    document.body.style.overflow = 'auto';
}

// анимация active footer
let rights = document.getElementById("rights");
let rightsItem = rights.getElementsByClassName("rights__item");

for (let i = 0; i < rightsItem.length; i++) {
    rightsItem[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

// анимация logo
const logo = document.querySelector('.header__logo');

function createNewLogo() {
    return '<img class="new_logo" src="./img/adaptive/logo.png" alt="" />';
}

function createLogo() {
    if (window.screen.width <= 1300) {
        logo.innerHTML += createNewLogo();
    }
}
createLogo();