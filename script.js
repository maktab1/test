const cardsContainer = document.getElementById('cardsContainer');

// Add your image filenames here
const imageFilenames = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
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
        moveCards(-1);
    } else if (deltaX < -swipeThreshold) {
        // Swipe left (move to next set of cards)
        moveCards(1);
    }
}

// Function to move the cards container
function moveCards(direction) {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; // Width + gap
    const currentTransform = getComputedStyle(cardsContainer).transform;
    const currentTranslateX = currentTransform !== 'none'
        ? parseInt(currentTransform.split(',')[4].trim())
        : 0;

    const newTranslateX = currentTranslateX + direction * cardWidth;

    // Check if it's the first or last set of cards to create the loop effect
    if (direction === 1 && newTranslateX <= -cardWidth * imageFilenames.length) {
        cardsContainer.style.transition = 'none';
        cardsContainer.style.transform = 'translateX(0)';
        setTimeout(() => {
            cardsContainer.style.transition = 'transform 0.5s ease';
        }, 0);
    } else if (direction === -1 && newTranslateX >= 0) {
        cardsContainer.style.transition = 'none';
        cardsContainer.style.transform = `translateX(${-cardWidth * (imageFilenames.length - 1)}px)`;
        setTimeout(() => {
            cardsContainer.style.transition = 'transform 0.5s ease';
        }, 0);
    } else {
        cardsContainer.style.transform = `translateX(${newTranslateX}px)`;
    }
}
