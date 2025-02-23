var loginButton = document.querySelectorAll(".login-links a, .login-links nav a, .nav-links a");
var sidebarButton = document.getElementsByClassName("sidebar-button");
var serviceCategoriesButton = document.querySelectorAll(".service-categories span");
var serviceButton = document.querySelectorAll(".service-list ul li");
var sliders = document.getElementsByClassName("slider-img");

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

for (let slider of sliders) {
    slider.addEventListener("mouseover", function() {
        slider.addEventListener("mousemove", function(event) {
            var xoffset = (event.offsetX *2 - slider.width) / slider.width;
            var yoffset = (event.offsetY *2 - slider.height) / slider.height;
            console.log(Math.atan(yoffset)* 180, Math.atan(-xoffset)* 180);
            slider.style.transform = `scale(1.2) rotate3d(${Math.atan(yoffset)}, ${Math.atan(-xoffset)}, 0, 0.4rad)`;
            slider.style.boxShadow = `${-xoffset*10}px ${-yoffset*10}px 10px white`;
        });
    });
    slider.addEventListener("mouseout", function() {
        slider.style.transform = "scale(1)";
        slider.style.boxShadow = "10px 10px 10px white";
    });
}


function zoom(thing, scale, z) {
    thing.style.transform = `scale(${scale})`;
    thing.style.zIndex = z;
}









