export function setupCounter(element) {
let counter = 0;

const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`; // Utilisation des backticks pour l'interpolation
}

element.addEventListener('click', () => setCounter(counter + 1));
setCounter(0);
}
