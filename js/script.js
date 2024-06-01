document.addEventListener('DOMContentLoaded', (event) => {
    const heartsContainer = document.getElementById('hearts-container');
    const scoreElement = document.getElementById('score');
    const endScreen = document.getElementById('end-screen');
    const playAgainButton = document.getElementById('play-again-button');
    const iLoveYouTooButton = document.getElementById('i-love-you-too-button');
    const imagesScreen = document.getElementById('images-screen');
    const backButton = document.getElementById('back-button');
    let score = 0;

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 90}%`;
        heart.style.top = `${Math.random() * 90}%`;
        
        heart.addEventListener('click', () => {
            score++;
            scoreElement.textContent = `Puntaje: ${score}`;
            heart.remove();
            createHeart();
            
            if (score >= 15) {
                endScreen.classList.remove('hidden');
            }
        });

        heartsContainer.appendChild(heart);
    }

    // Crear los corazones iniciales
    for (let i = 0; i < 5; i++) {
        createHeart();
    }

    // Manejar clics en los botones de la pantalla final
    playAgainButton.addEventListener('click', () => {
        location.reload();
    });

    iLoveYouTooButton.addEventListener('click', () => {
        endScreen.classList.add('hidden');
        imagesScreen.classList.remove('hidden');
    });

    // Manejar clic en el botón de volver en la pantalla de imágenes
    backButton.addEventListener('click', () => {
        imagesScreen.classList.add('hidden');
        location.reload();
    });
});
