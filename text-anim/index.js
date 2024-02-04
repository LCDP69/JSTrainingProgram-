const target = document.getElementById('target'); // déclarer une variable target, l'endroit où je veux afficher mon texte, on a déclaré un id target dans le html
let array = ["Développeur", "Photographe", "Créatif"]; // un tableau avec les données à implémenter
let wordIndex = 0; // Ce sont des indices pour m'aider à parcourir mon tableau 
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter); // Je cible l'endroit où je veux afficher le texte

letter.textContent = array[wordIndex][letterIndex]; // Donne la consigne avant le timeout, donc, va ajouter le texte de la lettre actuelle sélectionnée, D pour développeur, P pour photographe ou C pour créatif

setTimeout(() => {
    letter.remove(); // Fait disparaitre le mot une fois qu'il est entièrement apparu
}, 2800); // 2800 millisecondes donc 2.8 secondes, pour rendre l'animation agréable 
}; // une fonction pour afficher des données

const loop = () => { // déclaration d'une fonction boucle 
setTimeout(() => {
    if (wordIndex >= array.length) { // Si vordindex atteint la fin du tableau, il est réinitialisé à zéro, sans ça, l'animation ne reprendrait pas 
        wordIndex = 0;
        letterIndex = 0;
        loop();
    }
else if (letterIndex < array[wordIndex].length) { // on implémente des lettres jusquà ce que letterIndex ne soit plus inférieur à la longueur du wordIndex, jusqu'à ce que le mot soit rempli à 100% en gros
    createLetter();
    letterIndex++;
    loop()
} else {
    wordIndex++;
    letterIndex = 0;
    setTimeout(() => {
        loop(); // Déclenche le processus d'animation 
    }, 2800);
}
}, 60) // 60 milisecondes pour le temps d'apparition des lettres

}
loop()