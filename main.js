// ================= MENU MOBILE =================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});


// ================= TEXTE ANIME (rôle dans le terminal) =================

const typed = new Typed('.multiple-text', {
    strings: [
        "Développeuse Full-stack",
        "Java · Spring Boot · React · Next.js",
        "Passionnée par les API REST bien conçues",
        "Étudiante en L2 Informatique à HEI Madagascar"
    ],
    typeSpeed: 45,
    backSpeed: 20,
    backDelay: 1800,
    loop: true
});


// ================= LIEN ACTIF AU SCROLL =================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
};


const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function () {
        const btn = form.querySelector("button[type='submit']");
        if (btn) {
            btn.textContent = "Envoi en cours...";
            btn.disabled = true;
        }
    });
}