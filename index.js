var heroSection = document.getElementsByClassName("hero-section")[0];

var sliders = document.getElementsByClassName("slider-img");



var loginButton = document.querySelectorAll(".login-links a, .login-links nav a, .nav-links a");
var sidebarButton = document.getElementsByClassName("sidebar-button");
var serviceCategoriesButton = document.querySelectorAll(".service-categories span");
var serviceButton = document.querySelectorAll(".service-list ul li");


/*打字函数*/
heroSection.addEventListener("animationend", function() {
    var done=setInterval('show()',60);
});
let textnum = 0;
function show() {
    var h1 = "欢迎使用现代化地府一体化政务服务平台";
    var p = "一网通办，全流程一体化的解决您的问题";
    var text = h1 + p;
    document.querySelectorAll(".hero-section h1")[0].innerHTML = text.slice(0, textnum > h1.length ? h1.length : textnum) + "|";
    if(textnum > h1.length) {
        document.querySelectorAll(".hero-section h1")[0].innerHTML = h1;
    }
    document.querySelectorAll(".hero-section p")[0].innerHTML = textnum > h1.length ? text.slice(h1.length, textnum) + "|": "";
    textnum++;
    if(textnum + 1 >= h1.length + p.length + 1) {
        clearInterval("done");
        document.querySelectorAll(".hero-section p")[0].innerHTML = p;
    }
}

/*模块出现*/
function showModule(mod) {
    var mod = document.getElementsByClassName(mod)[0];
    var moduleShow = setInterval(function() {
        var y = mod.getBoundingClientRect().y;
        if (y < window.innerHeight) {
            mod.id = ""
            setTimeout(() => { mod.id = "v-show";}, 0);
            clearInterval(moduleShow);
        }
    }, 10);
}

showModule("efficient-service-section");
showModule("news-column-section");
showModule("information-disclosure-section");
showModule("feature-section");
showModule("service-statistics-section");

/*轮播图*/
for (let slider of sliders) {
    slider.addEventListener("mouseover", function() {
        slider.addEventListener("mousemove", function(event) {
            var xoffset = (event.offsetX *2 - slider.width) / slider.width;
            var yoffset = (event.offsetY *2 - slider.height) / slider.height;
            slider.style.transform = `scale(1.2) rotate3d(${Math.atan(yoffset)}, ${Math.atan(-xoffset)}, 0, 0.4rad)`;
            slider.style.boxShadow = `${-xoffset*10}px ${-yoffset*10}px 10px white`;
        });
    });
    slider.addEventListener("mouseout", function() {
        slider.style.transform = "scale(1)";
        slider.style.boxShadow = "10px 10px 10px white";
    });
}

/*缩放函数*/
function zoom(thing, scale, z) {
    thing.style.transform = `scale(${scale})`;
    thing.style.zIndex = z;
}

/*按钮 */
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

