const cardsContainer = document.getElementById('cardsContainer');

// Add your image filenames here
const imageFilenames = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '4.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    'Maktab Icon.jpg',
    // Add more images as needed
];

// Dynamically create card elements
imageFilenames.forEach((filename) => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = filename;
    img.alt = 'Product Image';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // You can add additional content or information here

    card.appendChild(img);
    card.appendChild(cardContent);
    cardsContainer.appendChild(card);
});

// Set the width of each card dynamically based on the number of visible cards
const cardWidth = (100 / imageFilenames.length) + '%';
document.querySelectorAll('.card').forEach((card) => {
    card.style.width = cardWidth;
});

// Function to handle touch events
let touchStartX = 0;
let touchEndX = 0;

cardsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

cardsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

// Function to handle swipe gesture
function handleSwipe() {
    const swipeThreshold = 50; // Adjust as needed
    const deltaX = touchEndX - touchStartX;

    if (deltaX > swipeThreshold) {
        // Swipe right (move to previous set of cards)
        moveCards(1);
    } else if (deltaX < -swipeThreshold) {
        // Swipe left (move to next set of cards)
        moveCards(-1);
    }
}

// Function to move the cards container
function moveCards(direction) {
    const currentTransform = getComputedStyle(cardsContainer).transform;
    const currentTranslateX = currentTransform !== 'none'
        ? parseInt(currentTransform.split(',')[4].trim())
        : 0;

    const newTranslateX = currentTranslateX + direction * 100;

    // Check if it's the first or last set of cards to create the loop effect
    if (direction === 1 && newTranslateX > 0) {
        cardsContainer.style.transition = 'none';
        cardsContainer.style.transform = `translateX(${-imageFilenames.length * 100}%)`;
        setTimeout(() => {
            cardsContainer.style.transition = 'transform 0.5s ease';
        }, 0);
    } else if (direction === -1 && newTranslateX < -imageFilenames.length * 100) {
        cardsContainer.style.transition = 'none';
        cardsContainer.style.transform = 'translateX(0)';
        setTimeout(() => {
            cardsContainer.style.transition = 'transform 0.5s ease';
        }, 0);
    } else {
        cardsContainer.style.transform = `translateX(${newTranslateX}%)`;
    }
}
