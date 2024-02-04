// Rappel des types de données

let string = "Chaine de caractères"
let number = 25
let boolean = true || false 
let variable = null // ici, la variable sera typée comme un objet, malgré le fait qu'elle soit nulle, mais elle ne sera pas undefined 

// Les tableaux 

let array = ["Bordeaux", "Toulouse", "Nantes"]; // création d'un tableau
// console.log(array); // La console affichera les données du tableau avec Bordeaux comme étant index 0, donc le premier élément du tableau 
// console.log(array[1]); // sélectionne la valeur Toulouse, la deuxième valeur du tableau 

let array2 = ["Bordeaux", 24, true, [1,2], {nom: "Denis"}]
// console.log(array2[4].nom); // Sélectionne la chaine de caractère uniquement, qui est comprise dans l'objet 

let object = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
};

// console.log(object.technos); // Sélectionne une valeur précise dans l'objet 

object.adress = "22 Rue du Code"
// console.log(object); 

// {
//     "pseudo": "Denis",
//     "age": 33,
//     "technos": [
//         "Javascript",
//         "React",
//         "NodeJS"
//     ],
//     "admin": false,
//     "adress": "22 Rue du Code" // On vient de rajouter une adresse en dehors des accolades de l'objet, mais Javascript l'a pris en compte quand même ! 
// }

// let data = [
//     {
//         pseudo: "Denis",
//         age: 33,
//         technos: ["Javascript", "React", "NodeJs"],
//         admin: false,
//     },
//     {
//         pseudo: "Samia",
//         age: 24,
//         technos: ["CSS", "React", "NodeJs"],
//         admin: false,
//     },
//     {
//         pseudo: "Nicolas",
//         age: 42,
//         technos: ["Php", "React", "NodeJs"],
//         admin: true,
//     },
// ]

// console.log(data[2].pseudo[0]); // On vient de sélectionner Nicolas et la première lettre de son prénom, le log est très précis

// Maintenant, voyons ensemble les structures de contrôle 

// if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " est plus âgé que " + data[1].pseudo);
// } // littéralement on déclare dans la console que Denis est plus âgé que Samia, et pour ce faire, nous avons déclaré une condition au préalable 

// while 
// let w = 0;

// while (w < 10) {
//     w++;
    // log = la valeur de w est de : " + w, la valeur continue d'augmenter jusqu'à 10
// }

// boucle for

// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
// } // on a injecté directement sur la page des informations sur nos utilisateurs, avec AltGr+7 on paramètre notre chaine de caractères en allant chercher les infos des pseudos et des ages 

// for(i=0; i < data.length; i++) {document.body.innerHTML += "<h2>"" + data[i].pseudo + "</h2>"

document.body.addEventListener('click', (e) => {
    // console.log(e.target.id);

switch (e.target.id) {
    case "Javascript":
        document.body.style.background = "Yellow";
        break;
        case "Php":
            document.body.style.background = "violet";
            break;
            case "Python":
                document.body.style.background = "blue";
                break;
}
})

// switch est très pratique pour adosser plus facilement des éléments au click, comme ici dans cet exemple où nous modifions la couleur de la page en clickant sur un ID

// Méthodes String, on va se créer une chaine de caractère

let string1 = "Javascript est un langage orienté objet";

// console.log(typeof string1); // typeof sert à interroger la console afin de connaitre le type de notre variable, ça peut être utile 

// console.log(eval("1"+2)); // Le résultat sera 12, puisque 1 est considéré ici commme une chaine de caractères
// console.log(eval(parseInt("1")+2)); // La méthode ParseInt ici nous a permis de transformer le string 1 en nombre entier réel, et donc l'addition a fonctionné, la console rend 3

let newString = string1.slice(2); // ici on vient de couper littéralement la chaine de caractère déclarée plus haut, on a enlevé les deux premières lettres 
// console.log(newString);

let newString1 = string1.slice(2, 17); // On découpe en intégrant les valeurs de la chaine uniquement de 2 jusqu'à 17
// console.log(newString1);

// console.log(string1.split("i")); // On vient d'enlever tous les i de la chaine de caractère. 

// console.log(string1.toUpperCase()); // On vient de passer la chaine de caractères avec uniquement des majuscules, on aurait pu faire lower case pour les minuscules 

// console.log(string1.replace("Javascript", "PHP")); // méthode replace pour changer une valeur comprise dans la chaine de caractère, attention car sensible à la casse, il faut bien surveiller sa syntaxe


// Maintenant, voyons les méthodes Numbers !

let number1 = 42.1234
let numberString = "42.12 est un chiffre"

// console.log(number1.toFixed(2)); // permet de définir le nombre de chiffres après la virgule qu'on souhaite afficher 
// console.log(parseInt("43")); // On change une chaine de caractère en number 
// console.log(parseInt(numberString)); // le parseInt nous a gardé uniquement le chiffre 42 car après le point il ne considère plus ça comme un chiffre
// console.log(parseFloat(numberString)); // Avec parseFloat par contre, on a pu aller chercher les chiffres comris après la virgule

// // Math, un objet de javascript très utile 
// console.log(Math.PI);
// console.log(Math.round(4.5)); // arrondi à 5
// console.log(Math.floor(4.5)); // troncature à 4
// console.log(Math.ceil(4.1)); // un peu contre-intuitif, mais là, avec ceil, on va arrondir à 5, même si la valeur est plus proche de 4
// console.log(Math.pow(2, 7)); // On calcule la puissance, 2 puissance 7
// console.log(Math.sqrt(16)); // On calcule la racine carré de 16

// console.log(Math.floor(Math.random() * 50)); // Génère un nombre aléatoire entre 0 et 50, on a mis un .floor afin de garder un nombre entier sans virgule 
// Math Random est la méthode la plus importante de cette liste et il faut la mémoriser. J'ai déjà vu des tests techniques qui demandaient d'utiliser cette méthode 


// Méthodes ARRAY, pour les tableaux, important et très utlisé en Javascript

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray); // concat sert à fusionner nos deux tableaux 

let newArray = [...array3, ...array4]; // grâce aux trois petits points, le spread operator, on a pu manipuler les données du tableau en les fusionnant et en les faisant apparaitre dans le détail
// console.log(newArray);

// console.log(array3.join(" ")); // méthode join, assez pratique pour casser le tableau et faire apparaitre les données comme une chaine de caractère 

// console.log(array3.slice(1)); // méthode slice déjà vu précédemment, pour séléctionner des éléments précis dans le tableau en faisant des coupures

// console.log(array3.indexOf("Python")); // Connaitre l'index d'un élément de la chaine

// array3.forEach((languages) => console.log(languages)); // ce code logue chaque élément du tableau séparément dans la console, et identifie chaque language web défini dans le tableau

// méthodes SHIFT pour faire apparaitre le premier élément du tableau et POP pour faire apparaitre le dernier élément du tableau 

// IMPORTANT POUR LES MANIPULATIONS D'ARRAY //

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); // Tout le tableau vient d'être additionné 

arrayNumber.push(17);
// console.log(arrayNumber); // méthode push très utilisée pour incorporer des éléments dans le tableau 

// LE TRIO DES CHOSES LES PLUS IMPORTANTES SUR JAVASCRIPT !!! //
// FILTER, SORT ET MAP !! //

// console.log(arrayNumber.filter((number) => number > 10)); sélectionne uniquement les nombres supérieurs à 10, on filtre 
// console.log(arrayNumber.sort()); // méthode SORT, on vient de classer les nombres du tableau par ordre croissant 
// console.log(arrayNumber.sort((a, b) => a - b)); // On vient de faire la même chose mais en intégrant un paramètre à filter, c'est une meilleure pratique.
// console.log(arrayNumber.sort((a, b) => b - a)); // On vient de faire l'inverse ! b étant après a, on fait b - a pour indiquer qu'on souhaite voir apparaitre les nombres en ordre décroissant

// document.body.innerHTML = arrayNumber
// .map((number) => `<li> ${number}</li>`)
// .join(''); // on vient d'intégrer sur la page web les données complètes du tableau dans une liste, le join('') sert à éviter les virgules 

// document.body.innerHTML = data
// .filter((user) => user.admin === false) // On ne garde que les membres et on vire l'admin 
// .filter((user) => user.pseudo.includes("i")) // On filtre afin de garder les élément de la chaine de caractères qui comprennent uniquement "i"
// .sort((a,b) => b.age - a.age) // on vient de paramétrer un classement des plus vieux utilisateurs aux plus jeunes, super pratique 
// .map((user) =>
// `
// <div class= "user-card">
// <h2>${user.pseudo}</h2>
// <p>Age : ${user.age} ans</p>
// <p>Statut : ${user.admin ? "Modérateur" : "Membre"}</p> 
// </div>
// `
// ) // On vient de mettre en place des cartes pour les utilisateurs avec des paramètres comme le pseudi, l'âge, et le dernier qui est assez intéressant, pour qualifier l'utilisateur d'admin ou de membre 
// Pour ce faire, on invoque une turner avec le " ? ", pour interroger. Est ce que l'utilisateur est admin ? S'il l'est, affiche Modérateur, sinon, affiche membre... SUPER PUISSANT 
// .join(""); // On vient d'appliquer pas mal de paramètres aux données de notre tableau et on l'a incorporé sur la page 

// LES DATES ! //
// Date classique 

let date = new Date(); // génère la date et heure du jour dans la console

// Timestamp
let timestamp = Date.parse(date); // Une information assez particulière, on compte le nombre de millisecondes qui se sont écoulées depuis 1970.

// ISOString
let iso = date.toISOString(); // Format de date similaire avec plus de détails sur les millisecondes, et qui intègre l'année le mois et le jour

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        day: "numeric"
    });
return newDate;
}; // Format classique de la date du jour avec le jour le mois et l'année, paramétrée comme on le lit par habitude en France. C'est important de spécifier puisque les coutumes sont différentes en fonction des pays, USA par exemple ...
// console.log(dateParser(date));

// LE DESTRUCTURING ou la déstructuration //

let moreData = {
    destVar: ["Element 1", "Element 2"]
}

const { destVar } = moreData; // pour appeler les deux en même temps, petit raccourci de syntaxe
// console.log(moreData,destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]); // on peut sélectionner élément par élément dans le tableau mais ce n'est pas pratique 

let [x, y, z] = array5;
// console.log(x, y, z); // On a destructuré pour aller plus vite, en définissant les élements du tableau pour pouvoir les loguer plus facilement 

const dateDestructuring = (chaine) => { // déclaration d'une fonction fléchée qui prend un paramètre chaine
    let newDate = chaine.split("T")[0]; // utilise split pour diviser la chaine en un tableau à chaque apparition du caractère T, sélectionne le premier élément du tableau avec l'indice zéro
    let [y, m, d] = newDate.split("-"); // Même intérêt mais divise le tableau à chaque apparition d'un tiret + destructuration pour extraire les éléments du tableau dans les variables y (année), m (mois) et d (jour).
    return [d, m, y].join("/"); // On retourne une date avec par ordre apparition le jour, le mois et l'année, le join concatène les éléments avec le caractère /
};
// console.log(dateDestructuring(iso));

// En résumé, cette fonction prend une chaîne de date au format ISO (probablement quelque chose comme "2022-02-04T16:49:00) et retourne la même date au format "04/02/2022".

// Les datasets ///

// document.addEventListener('DOMContentLoaded', () => {
//     const h3js = document.getElementById('javascript1');
//     // console.log(h3js.dataset.lang);
// }); // Cette variable est censée sélectionner notre h3 comprenant l'id javascript

const h3 = document.querySelectorAll("h3"); // On sélectionne tous nos H3

// h3.forEach((language) => console.log(language.dataset.lang)); // On sélectionne tous nos paramètres datalang

// Les Regex //
let mail = 'ngs69@gmail.com';
// console.log(mail.search(/ngaza/)); // fonction 'search', pas très utilisée mais qui permet de définir si les caractères rentrés correspondent à l'adresse email, le log retourne 0 si tel est le cas, sinon -1. Pas super logique et pas très pratique non plus

// console.log(mail.replace(/ngs/, "de")); // Ici, on remplace la logique par une nouvelle, on remplace le ngs de l'adresse mail par "de"

console.log(mail.match(/GS/i)); // Ici, on fait une recherche avec des lettres en majuscules. Cela devrait renvoyer null dans la console, mais grâce au i, le log est parti chercher l'index et nous a permis de retrouver ces deux lettres dans le corps de l'adresse email 

console.log(mail.match(/[zug]/)); // Ici, on cherche si les lettres z, u ou g sont présentes dans l'email.

console.log(mail.match(/[1236]/)); // ça marche avec les chiffres aussi

// TOUS les chiffres
console.log(mail.match(/\d/)); // \d dans une expression régulière signifie correspondance avec un chiffre décimal (0-9).
// Le résultat affiché sera un tableau contenant la première correspondance trouvée pour un chiffre décimal dans la chaîne mail.

// Matcher toutes les lettres 
console.log(mail.match(/[a-z]/));
// [a-z] dans une expression régulière signifie correspondance avec n'importe quelle lettre minuscule de l'alphabet anglais.
// Le résultat affiché sera un tableau contenant la première correspondance trouvée pour une lettre minuscule dans la chaîne mail.

console.log(mail.match(/[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));
// Celui-ci est un vrai hiéroglyphe ! 
// /: Délimiteur de début de l'expression régulière.
// [\w_-]+: Correspond à un ou plusieurs caractères alphanumériques (\w), soulignés (_) ou tirets (-). Cette partie représente la partie "nom d'utilisateur" de l'adresse e-mail.
// @: Correspond au caractère '@'.
// [\w-]+: Correspond à un ou plusieurs caractères alphanumériques (\w) ou tirets (-). Cette partie représente la partie "domaine" avant le point.
// \.: Correspond au caractère '.' (dot).
// [a-z]{2,4}: Correspond à deux à quatre lettres minuscules représentant l'extension du domaine.
 // $: Délimiteur de fin de l'expression régulière, indiquant que la correspondance doit se produire à la fin de la chaîne.
 // i: Drapeau d'insensibilité à la casse, indiquant que la correspondance ne doit pas tenir compte de la casse des lettres.

//  si mail est une adresse e-mail valide, le résultat affiché pourrait ressembler à quelque chose comme ['ngs69@gmail.com']. Si la chaîne mail n'est pas une adresse e-mail valide, le résultat serait null.

let separator = 265264849;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
// Une régex trouvée sur internet qui permet de séparer ce nombre en 3 par 3, ce qui facilite la visibilité (265 264 849)

// VOILA !!

