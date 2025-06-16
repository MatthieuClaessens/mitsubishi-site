// const words = ["PERFORMANCE", "VITESSE", "LÉGENDE"];
// let i = 0;
// const slider = document.getElementById("slider");

// function changeWord() {
// slider.textContent = words[i];
// i = (i + 1) % words.length;
// }

// changeWord();b
// setInterval(changeWord, 3000); // Change every 2 seconds
const words = ["PERFORMANCE", "VITESSE", "LÉGENDE"];
let i = 0;
const slider = document.getElementById("slider");

function changeWord() {
    // Animation de disparition du mot actuel
    gsap.to(slider, {
        opacity: 0,             // Faire disparaître le texte actuel
        duration: 0.5,          // Durée de l'animation
        onComplete: () => {
            // Change le mot une fois que l'animation est terminée
            slider.textContent = words[i];
            i = (i + 1) % words.length;

            // Animation de l'apparition du nouveau mot
            gsap.fromTo(slider, {
                opacity: 0,          // Le nouveau mot commence avec une opacité de 0
                scale: 0.5           // Taille initiale plus petite
            }, {
                opacity: 1,          // Le mot devient complètement visible
                scale: 1,            // Taille normale
                duration: 0.5        // Durée de l'animation
            });
        }
    });
}

// Initialisation du mot
changeWord();

// Changer le mot toutes les 3 secondes
setInterval(changeWord, 3000);