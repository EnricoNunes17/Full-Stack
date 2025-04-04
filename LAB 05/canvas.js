window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Fundo verde claro (céu)
    ctx.fillStyle = "#90f9c4";
    ctx.fillRect(0, 0, 400, 250);

    // Sol amarelo
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(300, 80, 40, 0, Math.PI * 2);
    ctx.fill();

    // Chão cinza
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 250, 400, 100);

    // Casa - Base
    ctx.fillStyle = "#8B4513"; // Marrom
    ctx.fillRect(160, 170, 80, 80);

    // Casa - Telhado
    ctx.fillStyle = "#E74C3C"; // Vermelho telha
    ctx.beginPath();
    ctx.moveTo(150, 170);
    ctx.lineTo(250, 170);
    ctx.lineTo(200, 120);
    ctx.closePath();
    ctx.fill();

    // Casa - Porta
    ctx.fillStyle = "#5D3A1A"; // Marrom escuro
    ctx.fillRect(190, 220, 20, 30);

    // Casa - Janelas
    ctx.fillStyle = "#4FC3F7"; // Azul claro
    ctx.fillRect(170, 190, 20, 20);
    ctx.fillRect(210, 190, 20, 20);

    // Árvores - Troncos
    ctx.fillStyle = "#6B3E26"; // Marrom madeira
    ctx.fillRect(90, 210, 15, 40);
    ctx.fillRect(310, 210, 15, 40);

    // Árvores - Copas
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(98, 200, 22, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(318, 200, 22, 0, Math.PI * 2);
    ctx.fill();

    // Lago azul
    ctx.fillStyle = "#4285F4";
    ctx.beginPath();
    ctx.arc(50, 300, 50, Math.PI, Math.PI * 0.5, true);
    ctx.lineTo(200, 300);
    ctx.arc(150, 300, 50, Math.PI * 1.5, Math.PI, true);
    ctx.fill();
};


