// let canvas = document.getElementById ('canvas')
// let ctx = canvas.getContext('2d')

// //retângulos
// ctx.beginPath()
// ctx.lineWidth = 2;
// ctx.strokeStyle = 'red';
// ctx.fillStyle = 'blue';
// ctx.fillRect(10,10,50,50);
// ctx.strokeRect(10,10,50,50);
// ctx.closePath();

// // linhas
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'black';
// ctx.strokeStyle = 'red';
// ctx.moveTo(200,150);
// ctx.lineTo(60,10);
// ctx.lineTo(60,250);
// ctx.lineTo(200,250);
// ctx.lineTo(200,150);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// // arcos
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.arc(260,200,50,0,2*Math.PI);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// // texto
// ctx.beginPath();
// ctx.lineWidth = 4;
// ctx.fillStyle = 'yellow';
// ctx.strokeStyle = 'red';
// ctx.font = "90px Arial"
// ctx.textAlign = "center";
// ctx.fillText("Olá",205,350);
// ctx.strokeText("Olá",200,350)
// ctx.closePath();

//Exercícios
let canvas = document.getElementById('canvas')
let ctx = canvas.getContext ('2d')
//retângulos
ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.strokeRect(0,0,50,50);

ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.closePath();
ctx.stroke();

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.fillRect(350,0,50,50);
ctx.closePath();

ctx.beginPath()
ctx.moveTo(400,0);
ctx.lineTo(0,400);
ctx.stroke()
ctx.strokeStyle = 'blue';
ctx.closePath();

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
ctx.fillStyle = 'yellow';
ctx.fillRect(0,350,50,50);
ctx.closePath();

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'green';
ctx.fillRect(350,350,50,50);
ctx.closePath();

ctx.beginPath();

ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,50,0,1*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'yellow';
ctx.arc(260,260,50,0,2*Math.PI);
ctx.stroke();
ctx.closePath();
