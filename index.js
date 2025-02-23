var sidebarButton = document.querySelectorAll('.sidebar-button');

for (var i = 0; i < sidebarButton.length; i++) {
    sidebarButton[i].onclick = function() {
        zoom(this, 2, 1);
    };
}

function zoom(thing, scale, z) {
    thing.style.transform = `scale(${scale})`;
    thing.style.zIndex = z;
}









