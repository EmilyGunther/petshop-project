// Definindo as imagens para os produtos
const images = [
    ["images/img-racao1.jpg", "images/img-racao2.jpg"], // Imagens para o Produto 1
    ["images/img-racao3.jpg", "images/img-racao4.jpg"]  // Imagens para o Produto 2
];

// Mantém o índice atual da imagem exibida para cada produto
let currentImageIndex = [0, 0];

// Função para mostrar a próxima imagem
function nextImage(productIndex) {
    currentImageIndex[productIndex] = (currentImageIndex[productIndex] + 1) % images[productIndex].length;
    updateImage(productIndex);
}

// Função para mostrar a imagem anterior
function prevImage(productIndex) {
    currentImageIndex[productIndex] = (currentImageIndex[productIndex] - 1 + images[productIndex].length) % images[productIndex].length;
    updateImage(productIndex);
}

// Função para atualizar a imagem exibida
function updateImage(productIndex) {
    const carouselContainer = document.getElementById(`carousel-${productIndex + 1}`);
    const imgElements = carouselContainer.querySelectorAll('.product-carousel-img');

    // Verifique se os elementos foram encontrados
    if (imgElements.length === 0) {
        console.error('Não foram encontradas imagens no carrossel');
        return;
    }

    imgElements.forEach((img, index) => {
        if (index === currentImageIndex[productIndex]) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

// Inicializa as imagens ao carregar a página
window.onload = function() {
    images.forEach((imageSet, index) => {
        const carouselContainer = document.getElementById(`carousel-${index + 1}`);
        const imgElements = carouselContainer.querySelectorAll('.product-carousel-img');
        imgElements.forEach((img, imgIndex) => {
            img.src = imageSet[imgIndex]; // Define a fonte da imagem
            img.style.display = imgIndex === 0 ? 'block' : 'none'; // Exibe apenas a primeira imagem
        });
    });
};
