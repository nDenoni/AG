function showHearts() {

    document.getElementById("message").classList.remove("hidden");


    for (let i = 0; i < 30; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.classList.add('mine');


        let img = document.createElement('img');
        img.src = 'heart_minecraft.png';
        heart.appendChild(img);


        let xPos = Math.random() * window.innerWidth;
        let yPos = Math.random() * window.innerHeight;
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;


        document.body.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 3500);
    }
}

function moveButton() {
    let button = document.getElementById("nao");
    let xPos = Math.random() * (window.innerWidth - button.offsetWidth);
    let yPos = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${xPos}px`;
    button.style.top = `${yPos}px`;
}