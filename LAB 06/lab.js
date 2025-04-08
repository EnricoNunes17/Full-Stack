let canvas = document.getElementById ('canvas')
let ctx = canvas.getContext('2d')

let bola = {
    x: 200,
    y: 200,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'BOLA.PNG';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

function animacao(){
    if(ret_1.x == 300-ret_1.largura){


}
}
animacao()
document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    
    ret_3.x = x_mouse
    ret_3.y = y_mouse
})