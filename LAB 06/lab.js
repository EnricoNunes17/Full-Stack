let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');



let pistol = {
x: 250,
y: 250,
raio: 50,
img: new Image(),
desenha: function() {
this.img.src = 'pistol.png';
ctx.beginPath();
ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
ctx.closePath();
}
}

function animacao(){
if (pistol.x == 300) {
    pistol.x = 300
}

ctx.clearRect(0,0,400,400)
pistol.desenha();
requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('mousemove',function(evento){
let rect = canvas.getBoundingClientRect();
let x_mouse = evento.clientX - rect.left - 50;
let y_mouse = evento.clientY - rect.top - 50;
console.log(x_mouse,y_mouse);
pistol.x = x_mouse;
pistol.y = y_mouse;
if (pistol.x > 200){
    pistol.x = 200
}
if (pistol.x < 0){
    pistol.x = 0
}
if (pistol.y < 0){
    pistol.y = 0
}
if (pistol.y > 200){
    pistol.y = 200
}


})