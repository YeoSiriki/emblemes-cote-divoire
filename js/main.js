
// =======================
// Données des emblèmes
// =======================
const emblemsData = {
    "drapeau": {
        "nom": "Drapeau National",
        "adoption": "3 décembre 1959",
        "couleurs": [
            { "nom": "Orange", "valeur": "#FF8200", "signification": "Savane et fertilité du nord" },
            { "nom": "Blanc", "valeur": "#FFFFFF", "signification": "Paix et unité nationale" },
            { "nom": "Vert", "valeur": "#009A44", "signification": "Forêt et espoir du sud" }
        ]
    },
    "hymne": {
        "nom": "L'Abidjanaise",
        "auteurs": ["Mathieu Ekra", "Joachim Bony", "Pierre Marie Coty"],
        "adoption": "1960"
    },
    "devise": {
        "mots": ["Union", "Discipline", "Travail"],
        "signification": "Valeurs fondamentales de la nation"
    }
};

// =======================
// Navigation smooth scroll
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// =======================
// Bouton Back to Top
// =======================
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =======================
// Play hymne simulation
// =======================
// =======================
// Lecture réelle de l'hymne
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.getElementById("playHymne");
    const audio = document.getElementById("audioHymne");

    if (!playBtn || !audio) return;

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    playBtn.innerHTML = '<i class="fas fa-pause mr-2"></i> Pause';
                })
                .catch(err => {
                    alert("Erreur de lecture audio. Vérifiez le fichier.");
                    console.error(err);
                });
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Écouter l\'hymne';
        }
    });

    audio.addEventListener("ended", () => {
        playBtn.innerHTML = '<i class="fas fa-play mr-2"></i> Écouter l\'hymne';
    });
});


// =======================
// Animation card-hover
// =======================
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// =======================
// Animations au scroll
// =======================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-slide-up').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =======================
// Menu mobile toggle
// =======================
function initMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    if (window.innerWidth < 768) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Ici on peut fermer le menu mobile si nécessaire
            });
        });
    }
}

// =======================
// Initialisation au chargement
// =======================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    const hero = document.querySelector('.hero-gradient');
    if (hero) hero.style.animation = 'fadeIn 1s ease-in-out';
});

// =======================
// Gestion redimensionnement
// =======================
window.addEventListener('resize', initMobileMenu);

// Toggle menu mobile
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden'); // Affiche ou cache le menu
    });
}

// Fermer le menu lorsqu'on clique sur un lien
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // cache le menu après clic
    });
});
