const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$*à&é'(-è_çà)=£¤µ^¨,;:!§";
// 1ère étape, définition des caractères possibles, minuscules, majuscules, nombres et symboles 

const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');
// Sélectionner les éléments HTML via leur id, qu'on a prédéfini dans le doc html


function generatePassword() { // on génère le mot de passe via la fonction
    let data = []; // création du tableau
    let password = ""; // Mise en place d'une chaine de caractère qui stockera le mdp généré

if (lowercase.checked) data.push(...dataLowercase);
if (uppercase.checked) data.push(...dataUppercase);
if (numbers.checked) data.push(...dataNumbers);
if (symbols.checked) data.push(...dataSymbols);
// Si les cases maj, min, numb et symb sont cochées sur l'appli, les caractères correspondants sont intégrés dans le tableau data

if(data.length === 0) {
    alert('Veuillez sélectionner des critères');
    return;
} // on s'assure que l'utilisateur ait bien rempli les conditions, s'il ne déclare rien, pas de mot de passe, donc on balance une alerte 

for (i = 0; i < rangeValue.value; i++) { // boucle for
password += data[Math.floor(Math.random() * data.length )]; // math random pour choisir aléatoirement des caractères du tableau data et on les concatène à la variable password
console.log(password);
}
passwordOutput.value = password; // On affiche le mdp dans l'outil de générateur 

passwordOutput.select(); // on pré sélectionne le mdp 
document.execCommand("copy") // en +, on copie automatiquement dans le presse papier, l'utilisateur n'a plus qu'à faire un CTRL+V lors de la création de son compte 

generateButton.textContent = "Copié !" // Le bouton "générer le mot de passe" affiche désomais "copié !" pour améliorer l'expérience utilisateur

setTimeout(() => {
generateButton.textContent = "Générer le mot de passe" 
}, 3000);
} // Passé les 3 secondes, le bouton revient comme programmé initialement

generateButton.addEventListener('click', generatePassword); // au clic de l'utilsateur sur le bouton possédant l'ID generateButton, la fonction generatePassword sera éxécutée.

