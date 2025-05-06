let canvas = document.getElementById ('canvas')
let ctx = canvas.getContext('2d')
function desenhar(){
    ctx.fillStyle = this.cor;
    ctx.fillRect(this.x, this.y, this.largura, this.Altura)
}
let ret_1 = {
    x:0,
    y:0,
    largura:20,
    Altura:20,
    cor: "blue",
    desenha: desenhar
    }
        
    
    let ret_2 = {
        x:200,
        y:200,
        largura:10,
        Altura: 10,
        cor: "red",
        desenha: desenhar
            
        }
        let ret_3 = {
            x:200,
            y:200,
            largura:10,
            Altura: 10,
            cor: "green",
            desenha: desenhar
                
            }
restangulos = [ret_1,ret_2,ret_3]       
for(let i = 0; i <restangulos.lenght; i++){
    restangulos [i].desenhar()
}
ret_1.desenha()
ret_2.desenha()
ret_3.desenha()

function animacao(){
    if(ret_1.x == 300-ret_1.largura){
        driecao = -1
    }
    if(ret_1.x == 0 ){
        driecao = 1
    }
    ret_1.x +=driecao
    ctx.clearRect(0,0,300,300)
    ret_1.desenha()
    ret_2.desenha()
    ret_3.desenha()
    requestAnimationFrame(animacao)
}

animacao()
document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp'){
        ret_2.y -= 1
    }
    if(tecla == 'ArrowDown'){
        ret_2.y += 1
    }
    if(tecla == 'ArrowRight'){
        ret_2.x += 1
    }
    if(tecla == 'ArrowLeft'){
        ret_2.x -= 1
    }
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    
    ret_3.x = x_mouse
    ret_3.y = y_mouse

})