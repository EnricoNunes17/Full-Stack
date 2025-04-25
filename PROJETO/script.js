const canvas = document.getElementById("canvas");
const points = document.getElementById ("points");

for(let i = 0; i < 225; i++){
    let quadrado = document.createElement("div");
    canvas.appendChild(quadrado);
}

const quadrados = document.querySelectorAll("canvas div");
const ovini = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39,
];
let posicao_do_tanque = 202;
let medida = 15;
quadrados [posicao_do_tanque].classList.add("tanque");


ovini.forEach(ovini =>{
    quadrados[ovini].classList.add("ovini");
});

document.addEventListener("keydown", movertanque);

function movertanque(p){
    quadrados[posicao_do_tanque].classList.remove("tanque");

    if(p.keyCode == 37){
        if(posicao_do_tanque % medida !==0){
            posicao_do_tanque--;
        }
    }else if(p.keyCode == 39){
        if(posicao_do_tanque % medida != medida -1){
            posicao_do_tanque++;
        }
    }
    
    quadrados [posicao_do_tanque].classList.add("tanque");

}

function moverovini(){
    const ladoEsquerdo = ovini[0] %
};