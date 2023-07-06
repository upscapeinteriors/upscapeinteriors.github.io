// window.onscroll = function (e) {
//     // print "false" if direction is down and "true" if up
//     if (this.oldScroll > this.scrollY) {
//         this.oldScroll = this.scrollY;
//         window.scrollBy(0, -1 * window.innerHeight);
//     } else {
//         this.oldScroll = this.scrollY;
//         window.scrollBy(0, window.innerHeight);
//     }
//     e.stopPropagation();
// }
// const width = 300;
// const maxRight = width * (5 - 1);

let timer = Date.now();


let initialCarouselLeft = 0;
const carousel = document.getElementById('projects_carousel');
// function left(event) {
//     if (initialCarouselLeft >= 0) {
//         initialCarouselLeft = 0;
//     } else {
//         initialCarouselLeft += moveBy;
//     }
//     carousel.style.transform = `translateX(${initialCarouselLeft}px)`
// }
function onScrolling(event) {
    console.log(event);
}

function allowed() {
    let currentTime = Date.now();
    if (currentTime - timer < 500)
        return false;
    timer = currentTime;
    return true;
}

function left2(event) {
    if (!allowed())
        return;
    let activeElementIndex = parseInt(carousel.getAttribute("activeElement")) - 1;
    if (activeElementIndex <= 0) {
        return;
    }
    //active item
    var currentItem = carousel.children.item(activeElementIndex);
    let currentComputedStyles = window.getComputedStyle(currentItem);
    let currentWidth = currentComputedStyles.width;
    currentWidth = parseInt(currentWidth.replace("px", ""));
    //item to the left
    var leftItem = carousel.children.item(activeElementIndex - 1);
    let leftComputedStyles = window.getComputedStyle(leftItem);
    let leftWidth = leftComputedStyles.width;
    leftWidth = parseInt(leftWidth.replace("px", ""));
    //scroll
    carousel.scrollBy(-1 * (currentWidth / 2 + leftWidth / 2), 0);
    carousel.setAttribute("activeElement", activeElementIndex);
}

function right2(event) {
    if (!allowed())
        return;
    let activeElementIndex = parseInt(carousel.getAttribute("activeElement")) - 1;
    let lastIndex = carousel.children.length - 1;
    if (activeElementIndex >= lastIndex) {
        return;
    }
    //active item
    var currentItem = carousel.children.item(activeElementIndex);
    let currentComputedStyles = window.getComputedStyle(currentItem);
    let currentWidth = currentComputedStyles.width;
    currentWidth = parseInt(currentWidth.replace("px", ""));
    //item to the right
    var rightItem = carousel.children.item(activeElementIndex + 1);
    let rightComputedStyles = window.getComputedStyle(rightItem);
    let rightWidth = rightComputedStyles.width;
    rightWidth = parseInt(rightWidth.replace("px", ""));
    //scrolling
    carousel.scrollBy(currentWidth / 2 + rightWidth / 2, 0);
    carousel.setAttribute("activeelement", `${activeElementIndex + 2}`);
}

const commentsContainer = document.getElementById('comments');
const noOfComponents = parseInt(commentsContainer.getAttribute("totalnoofcomments"));
let currentComponent = -1;
if (noOfComponents > 0)
    currentComponent = 1;


function commentleft(event) {
    if (currentComponent <= 1)
        return;
    commentsContainer.children.item(currentComponent - 1).classList.remove("activecomment");
    currentComponent--;
    commentsContainer.children.item(currentComponent - 1).classList.add("activecomment");

}
function commentright(event) {
    if (currentComponent == noOfComponents)
        return;
    commentsContainer.children.item(currentComponent - 1).classList.remove("activecomment");
    currentComponent++;
    commentsContainer.children.item(currentComponent - 1).classList.add("activecomment");
}

const openMenuButton = document.getElementById("open_menu");
const closeMenuButton = document.getElementById("close_menu");
const menu = document.getElementById("menu_elements");
const backgroundWrapper = document.getElementById("blur_wrapper");
function openMenu() {
    menu.classList.add("show_menu");
    menu.classList.remove("normal_menu_state");
    openMenuButton.style.display = "none";
    closeMenuButton.style.display = "inline-block";
    backgroundWrapper.classList.add("show_menu_blur");
    backgroundWrapper.classList.remove("hide_menu_blur");
}
function closeMenu() {
    backgroundWrapper.classList.remove("show_menu_blur");
    backgroundWrapper.classList.add("hide_menu_blur");
    menu.classList.add("normal_menu_state");
    menu.classList.remove("show_menu");
    openMenuButton.style.display = "inline-block";
    closeMenuButton.style.display = "none";
}
