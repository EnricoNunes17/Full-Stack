let num1 = Math.floor(Math.random()*100);
console.log(num1)

function guess(){
    let num = parseInt(document.getElementById("num").value);
    if(num < num1){
        document.getElementById("resp").innerHTML = "O número é pequeno";
        document.getElementById("resp").style.setProperty("background-color", "red");

    } else if(num > num1){
        document.getElementById("resp").innerHTML = "O número é grande"
        document.getElementById("resp").style.setProperty("background-color", "red");

    } else if(num === num1){
        document.getElementById("resp").innerHTML = "Acertou";
        document.getElementById("resp").style.setProperty("background-color", "green");

    }

    

    }
