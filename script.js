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

// Set the animation duration based on the number of cards and desired scroll speed
const animationDuration = imageFilenames.length * 5 + 's'; // Adjust as needed

// Apply the animation style to the cards container
cardsContainer.style.animation = `scrollAnimation ${animationDuration} linear infinite`;

// Event listeners for manual navigation buttons
// These buttons will interrupt the auto-scrolling animation
document.getElementById('prevButton').addEventListener('click', () => {
    cardsContainer.style.animation = 'none';
    setTimeout(() => {
        cardsContainer.style.animation = `scrollAnimation ${animationDuration} linear infinite`;
    }, 0);
});

document.getElementById('nextButton').addEventListener('click', () => {
    cardsContainer.style.animation = 'none';
    setTimeout(() => {
        cardsContainer.style.animation = `scrollAnimation ${animationDuration} linear infinite`;
    }, 0);
});
