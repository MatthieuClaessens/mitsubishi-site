document.addEventListener('DOMContentLoaded', function () {
const viewer = document.getElementById('car-viewer');
const imageContainer = document.getElementById('car-image-container');
const indicatorsContainer = document.getElementById('car-indicators');

const images = [
    "img/Evoview1.png", // Face avant
    "img/Evoview2.png", // Avant droit
    "img/Evoview3.png", // Côté droit
    "img/Evoview4.png", // Arrière droit
    "img/Evoview5.png", // Arrière
    "img/Evoview6.png", // Arrière gauche
    "img/Evoview7.png", // Côté gauche
    "img/Evoview8.png"  // Avant gauche
];

let currentIndex = 0;
let isDragging = false;
let startX = 0;

// 🔹 **Créer et charger les images**
function createImages() {
    images.forEach(src => {
        new Image().src = src; // Préchargement
    });

    images.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.className = 'car-image';
        img.alt = `Vue 360° - Angle ${index + 1}`;
        imageContainer.appendChild(img);
    });

    updateView();
}

// 🔹 **Mettre à jour la vue**
function updateView() {
    document.querySelectorAll('.car-image').forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });

    document.querySelectorAll('.indicator-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// 🔹 **Créer les indicateurs**
function createIndicators() {
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'indicator-dot';
        dot.addEventListener('click', () => goToIndex(index));
        indicatorsContainer.appendChild(dot);
    });
    updateView();
}

// 🔹 **Navigation entre les images**
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateView();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateView();
}

function goToIndex(index) {
    if (index >= 0 && index < images.length) {
        currentIndex = index;
        updateView();
    }
}

// 🔹 **Interaction souris (Desktop)**
viewer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    viewer.classList.add('dragging');
    viewer.style.cursor = 'grabbing';
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;
    if (Math.abs(diff) > 30) {
        diff > 0 ? nextImage() : prevImage();
        startX = e.clientX;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    viewer.classList.remove('dragging');
    viewer.style.cursor = 'grab';
});

// 🔹 **Interaction tactile (Mobile)**
viewer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
}, { passive: true });

viewer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const diff = e.touches[0].clientX - startX;
    if (Math.abs(diff) > 30) {
        diff > 0 ? nextImage() : prevImage();
        startX = e.touches[0].clientX;
    }
}, { passive: true });

viewer.addEventListener('touchend', () => {
    isDragging = false;
});

// 🔹 **Initialisation**
createImages();
createIndicators();
});