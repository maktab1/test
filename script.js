const cardsContainer = document.getElementById('cardsContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

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

// Set the width of each card dynamically based on the number of visible cards
const cardWidth = (100 / imageFilenames.length) + '%';
document.querySelectorAll('.card').forEach((card) => {
    card.style.width = cardWidth;
});

// Ensure the cardsContainer has enough width to accommodate all cards
cardsContainer.style.width = (imageFilenames.length * 100) + '%';

let currentIndex = 0;

// Function to move the cards container
function moveCards(direction) {
    currentIndex = (currentIndex + direction + imageFilenames.length) % imageFilenames.length;
    const newTranslateX = -currentIndex * 100;
    cardsContainer.style.transform = `translateX(${newTranslateX}%)`;
}

// Call the moveCards function to initiate the animation
setInterval(() => moveCards(1), 5000); // Auto-scroll every 5 seconds

// Event listeners for manual navigation buttons
prevButton.addEventListener('click', () => moveCards(-1));
nextButton.addEventListener('click', () => moveCards(1));
