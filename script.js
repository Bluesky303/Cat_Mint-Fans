const enterButton = document.getElementById('enterButton');
const aboutButton = document.getElementById('aboutButton');
const rulesButton = document.getElementById('rulesButton');
const contactButton = document.getElementById('contactButton');
const title = document.getElementById('title');
const messageDisplay = document.getElementById('message-display');
const modal = document.getElementById('modal');
const close = document.getElementsByClassName('close')[0];

enterButton.addEventListener('click', function () {
    messageDisplay.textContent = '欢迎来到猫国，汝，亦是活祭！';
    animatePortal();
    setTimeout(() => {
        modal.style.display = 'block';
    }, 1000);
});

aboutButton.addEventListener('click', function () {
    messageDisplay.textContent = '地府，一个古老而神秘的存在，如今融入现代科技，管理着阴阳两界的秩序。它不仅保留了传统的审判流程，还借助高科技手段确保公平公正，为亡魂指引新的方向。';
});

rulesButton.addEventListener('click', function () {
    messageDisplay.textContent = '1. 尊重地府生灵，不得滋事挑衅。2. 遵循指引，勿擅自闯入禁地，否则将面临严惩。3. 接受审判，诚实面对前世作为，以获新生机会。';
});

contactButton.addEventListener('click', function () {
    messageDisplay.textContent = '若有疑问或需要帮助，请联系我们：https://space.bilibili.com/40462777';
});

title.addEventListener('click', function () {
    window.location.reload();
});

function animatePortal() {
    const portal = document.getElementById('portal-wrapper');
    portal.style.animation = 'pulse 1s infinite';
    setTimeout(() => {
        portal.style.animation = 'none';
    }, 1000);
}

close.addEventListener('click', function () {
    modal.style.display = 'none';
});

// 生成yinqi
for (let i = 10; i < 120; i++) {
    const soul = document.createElement('div');
    soul.className ='soul';
    soul.style.left = Math.random() * window.innerWidth + '1000px';
    soul.style.top = Math.random() * window.innerHeight + '1000px';
    document.getElementById('souls').appendChild(soul);
}