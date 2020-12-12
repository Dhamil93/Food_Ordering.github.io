window.onload = () => {
    var welcome = document.querySelector(".row");
    setTimeout(() => { welcome.style.opacity = "1" }, 1000);
    var foodHeader = document.querySelector(".food-header");
    setTimeout(() => { foodHeader.style.opacity = "1" }, 250);

}
window.onclick = () => {
    var block = document.querySelector("#dropdown");
    block.style.visibility = "hidden";
}

window.onscroll = () => {
    var topIcon = document.querySelector("#top-icon");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topIcon.style.display = "inline";
    } else {
        topIcon.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function makeVisible(link) {
    var block = document.querySelector(link);
    block.style.visibility = "visible";
}
function makeInvisible(link) {
    var block = document.querySelector(link);
    block.style.visibility = "hidden";
}

function translated(link) {
    var x = document.getElementsByClassName("translate")[0].getAttribute("translation");
    link.innerHTML = x;
}
function revert(link) {
    var x = document.getElementsByClassName("translate")[0].getAttribute("initial");
    link.innerHTML = x;
}