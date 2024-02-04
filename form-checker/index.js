const form = document.querySelector("form"); // On sélectionne le formulaire HTML

const inputs = document.querySelectorAll( 
  'input[type="text"], input[type="password"]' 
); // on sélectionne les inputs prévus dans le formulaire d'inscription

const progressBar = document.getElementById('progress-bar'); // Représente l'élément de la barre de progression dans le formulaire. Elle servira à garantir la fiabilité du mot de passe par des indicateurs de couleurs. Nous comprendrons les détails dans le code ci dessous. 

let pseudo, email, password, confirmPass; // On initialise les variables, elles vont stocker les valeurs du formulaire 

const errorDisplay = (tag, message, valid) => { // Cette fonction gère l'affichage des messages d'erreur sous chaque champ du formulaire
    const container = document.querySelector('.' + tag + "-container");
    const span = document.querySelector('.' + tag + "-container > span");

    if (!valid) {
        container.classList.add('error');
        span.textContent = message;
    } else {
        container.classList.remove('error');
        span.textContent = message;
    }
}

const pseudoChecker = (value) => { // ces fonctions sont responsables de la validation des champs du formulaire en fonction des règles définies. Elles appellent la fonction errorDisplay pour afficher les messages d'erreurs appropriés.


if (value.length > 0 && (value.length < 3 || value.length > 20) ) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères.");
    pseudo = null;
  
} else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
 errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères spéciaux.");
 pseudo = null;
} else {
    errorDisplay('pseudo', "", true);
    pseudo = value;
}
};

const emailChecker = (value) => { // ces fonctions sont responsables de la validation des champs du formulaire en fonction des règles définies. Elles appellent la fonction errorDisplay pour afficher les messages d'erreurs appropriés.

    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
errorDisplay('email', "Le mail n'est pas valide.");
email = null 
} else {
    errorDisplay('email', "", true);
    email = value;
}
};

const passwordChecker = (value) => { // ces fonctions sont responsables de la validation des champs du formulaire en fonction des règles définies. Elles appellent la fonction errorDisplay pour afficher les messages d'erreurs appropriés.

progressBar.classList = ""; // pour ne pas empiler les classes 

    if (
        !value.match(
            /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
            )
            ) {
                errorDisplay(
                    "password", 
                    "8 caractères minimum exigés, une majuscule, un chiffre et un caractère spécial."
                );
                progressBar.classList.add('progressRed');
                password = null;
            } else if (value.length < 12) {
                progressBar.classList.add('progressBlue');
                errorDisplay("password", "", true)
                password =  value;
            } else {
                progressBar.classList.add("progressGreen");
                errorDisplay("password", "", true)
                password = value
            }
            if(confirmPass) confirmChecker(confirmPass)
        };

const confirmChecker = (value) => { // ces fonctions sont responsables de la validation des champs du formulaire en fonction des règles définies. Elles appellent la fonction errorDisplay pour afficher les messages d'erreurs appropriés.

if (value != password) {
    errorDisplay('confirm', "Les mots de passe ne correspondent pas.");
confirmPass = false;
} else {
    errorDisplay('confirm', "", true);
    confirmPass = true;
}
};

 
inputs.forEach((input) => {
    input.addEventListener("input", (e) => { // On met des écouteurs d'évenements pour avoir des infos chaque fois que l'utilisateur saisit quelque chose dans le champ
        switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
                case "email":
                    emailChecker(e.target.value);
                    break;
                    case "password":
                    passwordChecker(e.target.value)
                    break;
                    case "confirm":
                        confirmChecker(e.target.value)
                        break;
                        default:
                            null;
        }
    });
});

form.addEventListener('submit', (e) => { 
e.preventDefault(); // Cet écouteur d'évenement intercepte la soumission du formulaire, il empêche le comportement par dégaut (rechargement de la page) avec le e.preventDefault

if(pseudo && email && password && confirmPass) { // On vérifie ensuite que toutes les données rentrées dans le champ sont valides avant de procéder à l'action souhaitée (affichage des données ou une alerte)
    const data = {
        pseudo,
        email,
        password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert('Inscription validée !');
    }   else {
    alert('Veuillez remplir correctement les champs')
} // Si toutes les données sont valides, les données sont affichées dans la console et les champs sont réinitialisés. Sinon, une alerte indique à l'utilisateur de remplir correctement les champs.
});

// EN RESUME :
// Le script assure la validation en temps réel des champs du formulaire en fonction des règles définies et permet de soumettre le formulaire uniquement lorsque toutes les données sont valides. 

// La particularité de cet exercice, c'est que l'on constate rapidement qu'il faut des centaines de lignes de codes simplement pour un seul petit formulaire d'inscription, qui est un composant parmi tant d'autres dans une application web. Cela laisse songeur quant à la quantité de travail à réaliser pour mener à bien une appli de A à Z :)