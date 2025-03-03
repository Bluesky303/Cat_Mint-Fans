function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

var canvas = document.getElementsByClassName('canvas')[0];
var container = document.getElementsByClassName('container')[0];
var down = false, front = true;
var xangle = 0, yangle = 0, startx = 0, starty = 0;

function mousedownf(event) {
  down = true;
  canvas.style.cursor = "grabbing";
  startx = event.clientX;
  starty = event.clientY;
}
function mousemovef(event) {
  if (down) {
    var endx = event.clientX;
    var endy = event.clientY;
    yangle = (yangle + Math.atan((endx - startx) / 10)) % 360;
    xangle = (xangle + Math.atan((- endy + starty) / 10)) % 360;
    container.style.transform = `rotateX(${xangle}deg) rotateY(${yangle}deg)`;
  }
}
function mouseupf(event) {
  down = false;
  canvas.style.cursor = "grab";
  // 自动调整视角
  // if (Math.abs(yangle) > 100 || Math.abs(xangle) > 100 && front) {
  //   xangle = 0;
  //   yangle = 180;
  //   front = false;
  // } else
  // if (Math.abs((yangle + 180) % 360) < 100 || Math.abs((xangle + 180) % 360) > 100 && !front) {
  //   xangle = 0;
  //   yangle = 0;
  //   front = true;
  // }
  // container.style.transform = `rotateX(${xangle}deg) rotateY(${yangle}deg)`;
}
function grablisten(c) {
  c.addEventListener("mousedown", mousedownf);
  c.addEventListener("mousemove", mousemovef);
  c.addEventListener("mouseup", mouseupf);
  c.addEventListener("mouseleave", mouseupf);
}
grablisten(canvas);
grablisten(container)