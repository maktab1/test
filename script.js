const cardsContainer = document.getElementById('cardsContainer');

// Add your image filenames here
const imageFilenames = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
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
