const imageContainer = document.getElementById('imageContainer');

// Replace 'image1.jpg', 'image2.jpg', etc. with your actual image filenames.
const imagePaths = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];

function createCard(imagePath) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = imagePath;

  card.appendChild(image);
  imageContainer.appendChild(card);
}

function displayImages() {
  imagePaths.forEach(imagePath => {
    createCard(imagePath);
  });
}

displayImages();

