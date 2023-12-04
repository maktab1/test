const cardsContainer = document.getElementById('cardsContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

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

let currentIndex = 0;

// Function to move the cards container
function moveCards() {
    currentIndex = (currentIndex + 0.01) % imageFilenames.length;
    const newTranslateX = -currentIndex * 100;
    cardsContainer.style.transform = `translateX(${newTranslateX}%)`;
    requestAnimationFrame(moveCards);
}

// Call the moveCards function to initiate the animation
moveCards();

// Event listeners for manual navigation buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageFilenames.length;
});
