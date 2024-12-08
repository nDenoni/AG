function showHearts() {
    // Exibir a mensagem de confirmação
    document.getElementById("message").classList.remove("hidden");

    // Criar corações pixelados e posicioná-los aleatoriamente
    for (let i = 0; i < 30; i++) { // Quantidade de corações
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.classList.add('mine'); // Classe específica para o estilo Minecraft

        // Adicionar a imagem do coração
        let img = document.createElement('img');
        img.src = 'heart_minecraft.png'; // Caminho para a imagem do coração
        heart.appendChild(img);

        // Posicionar o coração aleatoriamente na tela
        let xPos = Math.random() * window.innerWidth;
        let yPos = Math.random() * window.innerHeight;
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;

        // Adicionar o coração ao body
        document.body.appendChild(heart);

        // Remover o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 3500); // Tempo após o qual o coração será removido (um pouco depois da animação)
    }
}

function moveButton() {
    let button = document.getElementById("nao");
    let xPos = Math.random() * (window.innerWidth - button.offsetWidth);
    let yPos = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${xPos}px`;
    button.style.top = `${yPos}px`;
}
