var aside = document.querySelectorAll("aside")[0];
var sidebarButton = document.getElementsByClassName("sidebar-button");
var gotopButton = document.getElementById("sidebar-gotop");
var endButton = document.getElementById("collapse-button");

//回到顶部的显示或隐藏按钮
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        gotopButton.style.display = "flex";
        endButton.style.marginBottom = "none";
    } 
    else {
        gotopButton.style.display = "none";
        endButton.style.marginBottom = "auto";
    }
};  

for (let button of sidebarButton) {
    button.onmouseover = function() {
        zoom(this, 1.5, 1);
    };
    button.onmouseout = function() {
        zoom(this, 1, 0);
    };

    var ifCollapsed = false;
    var buttonFunctionDictionary = {
        "sidebar-button": function() {
            //设置点击跳转
        },
        "sidebar-gotop": function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
        "collapse-button": function() {
            if (ifCollapsed) {
                aside.id = "";
                gotopButton.style.translate = "0px";
                aside.onanimationend = function() {
                endButton.style.translate = "0px";
                document.querySelectorAll(".sidebar-button span")[0].innerHTML = ">";
                ifCollapsed = false;
                }
            }
            else { 
                aside.id = "aside-collapsed";
                aside.onanimationend = function() {
                gotopButton.style.translate = "-100px";
                endButton.style.translate = "-40px";
                document.querySelectorAll(".sidebar-button span")[0].innerHTML = "<";
                ifCollapsed = true;
                }
            }
        },
    }

    button.onclick = function(){buttonFunctionDictionary[this.id]();
    
    };
}

/*缩放函数*/
function zoom(thing, scale, z) {
    thing.style.transform = `scale(${scale})`;
    thing.style.zIndex = z;
}
