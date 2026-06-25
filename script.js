/* Récupère le bouton hamburger grâce à son id */
const hamburger = document.getElementById("hamburger");

/* Récupère le menu de navigation */
const menu = document.getElementById("menu");

/* Exécute le code lorsqu'on clique sur le bouton hamburger */
hamburger.addEventListener("click", () => {

    /* Ajoute ou enlève la classe active pour afficher ou cacher le menu */
    menu.classList.toggle("active");
});


/* Récupère toutes les barres de progression */
const bars = document.querySelectorAll(".progress");

/* Crée un observateur qui détecte si une barre devient visible à l'écran */
const observer = new IntersectionObserver(entries => {

    /* Parcourt chaque élément observé */
    entries.forEach(entry => {

        /* Vérifie si l'élément est visible */
        if (entry.isIntersecting) {

            /* Récupère la barre concernée */
            const bar = entry.target;

            /* Donne à la barre la largeur définie dans data-width */
            bar.style.width = bar.dataset.width;
        }

    });

});

/* Demande à l'observateur de surveiller chaque barre */
bars.forEach(bar => {
    observer.observe(bar);
});


/* Récupère le formulaire de contact */
const form = document.getElementById("contact-form");

/* Exécute le code lorsqu'on clique sur le bouton Envoyer */
form.addEventListener("submit", function (e) {

    /* Empêche le rechargement de la page */
    e.preventDefault();

    /* Récupère le contenu du champ nom */
    const nom = document.getElementById("nom").value;

    /* Récupère le contenu du champ email */
    const email = document.getElementById("email").value;

    /* Récupère le contenu du message */
    const message = document.getElementById("message").value;

    /* Vérifie si un des champs est vide */
    if (nom === "" || email === "" || message === "") {

        /* Affiche un message d'erreur */
        alert("Tous les champs sont obligatoires");

        /* Arrête l'exécution de la fonction */
        return;
    }

    /* Affiche un message de confirmation */
    alert("Message envoyé !");
});


/* Récupère le bouton retour en haut */
const topBtn = document.getElementById("topBtn");

/* Exécute le code pendant le défilement de la page */
window.addEventListener("scroll", () => {

    /* Vérifie si l'utilisateur a descendu de plus de 300 pixels */
    if (window.scrollY > 300) {

        /* Affiche le bouton */
        topBtn.style.display = "block";
    }
    else {

        /* Cache le bouton */
        topBtn.style.display = "none";
    }

});


/* Exécute le code lorsqu'on clique sur le bouton */
topBtn.addEventListener("click", () => {

    /* Remonte en haut de la page avec une animation */
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* Récupère le bouton du mode sombre */
const themeBtn = document.getElementById("theme-toggle");

/* Vérifie si le mode sombre est déjà enregistré dans le navigateur */
if (localStorage.getItem("theme") === "dark") {

    /* Active le mode sombre */
    document.body.classList.add("dark-mode");}
/* Exécute le code lorsqu'on clique sur le bouton du thème */
themeBtn.addEventListener("click", () => {

    /* Ajoute ou retire la classe "dark-mode" sur la page */
    document.body.classList.toggle("dark-mode");

    /* Vérifie si le mode sombre est activé */
    if(document.body.classList.contains("dark-mode")){

        /* Enregistre le thème sombre dans le navigateur */
        localStorage.setItem("theme", "dark");

        /* Change le texte du bouton pour proposer le retour au mode clair */
        themeBtn.textContent = "☀️ Mode clair";
    }else{

        /* Enregistre le thème clair dans le navigateur */
        localStorage.setItem("theme", "light");

        /* Change le texte du bouton pour proposer le passage au mode sombre */
        themeBtn.textContent = "🌙 Mode sombre";
    }
});

    