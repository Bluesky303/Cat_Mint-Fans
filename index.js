var loginButton = document.querySelectorAll(".login-links a, .login-links nav a, .nav-links a");
var sidebarButton = document.getElementsByClassName("sidebar-button");
var serviceCategoriesButton = document.querySelectorAll(".service-categories span");
var serviceButton = document.querySelectorAll(".service-list ul li");

for (let button of loginButton) {
    button.onclick = function() {
        /*点击跳转*/
    };
}

for (let button of sidebarButton) {
    button.onmouseover = function() {
        zoom(this, 2, 1);
    };
    button.onmouseout = function() {
        zoom(this, 1, 0);
    };
    button.onclick = function() {
        /*点击跳转*/
    };
}

for (let button of serviceCategoriesButton) {
    button.onclick = function() {
        /*点击跳转*/
    };
}

for (let button of serviceButton) {
    button.onclick = function() {
        /*点击跳转*/
    };
}


function zoom(thing, scale, z) {
    thing.style.transform = `scale(${scale})`;
    thing.style.zIndex = z;
}









