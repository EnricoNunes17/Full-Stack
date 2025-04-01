let canvas = document.getElementById ('canvas')
let ctx = canvas.getContext('2d')

function desenhar_quadrado(ctx,color,x,y,x1,y2){
ctx.beginPath()
ctx.lineWidth = 2;
ctx.fillStyle = color;
ctx.strokeStyle = color;
ctx.fillRect(x,y,x1,y2);
ctx.fill()
ctx.closePath();
}
desenhar_quadrado(ctx,'blue',0, 0 ,50 ,50)
desenhar_quadrado(ctx,'red', 250, 0, 50, 50)

function desenhar_linha(ctx,xi,yi,xf,yf){
ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = color;
ctx.fillStyle = color;
ctx.fillRect(xi,yi,xf,yf);
ctx.strokeRect(xi,yi,xf,yf);
ctx.closePath();
}
desenhar_linha(ctx,'green',0,0,xf,yf)

let canvas_1 = document.getElementById('canvas_1')
let  ctx_1 = canvas.getContext('2d')

