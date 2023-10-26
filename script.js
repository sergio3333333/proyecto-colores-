let firstCard = null;
let secondCard = null;

const cards = document.querySelectorAll(".card");

function flipCard(card) {
    if (!firstCard) {
        firstCard = card;
        card.style.transform = 'rotateY(0deg)';
    } else if (!secondCard) {
        secondCard = card;
        card.style.transform = 'rotateY(0deg)';

        if (firstCard.dataset.color === secondCard.dataset.color && firstCard !== secondCard) {
            // Las cartas coinciden, puedes agregar lógica adicional aquí
            setTimeout(() => {
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';
                firstCard = null;
                secondCard = null;
            }, 500);
        } else {
            // Las cartas no coinciden, se vuelven a girar
            setTimeout(() => {
                firstCard.style.transform = 'rotateY(180deg)';
                secondCard.style.transform = 'rotateY(180deg)';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}

cards.forEach(card => card.addEventListener('click', () => flipCard(card)));

