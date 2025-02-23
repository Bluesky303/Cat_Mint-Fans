// 获取按钮元素
const gotopBtn = document.getElementById("sidebar-gotop");

// 滚动事件：显示或隐藏按钮
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        gotopBtn.style.display = "block"; // 显示按钮
    } else {
        gotopBtn.style.display = "none"; // 隐藏按钮
    }
};

// 点击事件：平滑滚动回顶部
gotopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 平滑滚动
    });
};
