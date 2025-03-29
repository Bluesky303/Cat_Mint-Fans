var body = document.querySelector("body");
var footer = document.querySelector("footer");

var bodyHeight = body.offsetHeight;
var footerHeight = footer.offsetHeight;
var windowHeight = window.innerHeight;

if (bodyHeight + footerHeight < windowHeight) {
    footer.style.position = "absolute";
    footer.style.bottom = "0px";
    footer.style.left = "50%";
    footer.style.transform = "translate(-50%,-50%)";
}