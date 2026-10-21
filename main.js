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

const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

const projectCards = document.querySelectorAll('.project-card');
const toggleBtn = document.querySelector('#toggle-projects');
const visibleCount = 6;
let expanded = false;

const renderProjects = () => {
    projectCards.forEach((card, index) => {
        card.classList.toggle('is-hidden', !expanded && index >= visibleCount);
    });
    toggleBtn.textContent = expanded
        ? 'Voir moins'
        : 'Tout voir (' + projectCards.length + ')';
};

if (toggleBtn) {
    if (projectCards.length <= visibleCount) {
        toggleBtn.style.display = 'none';
    }

    toggleBtn.addEventListener('click', () => {
        expanded = !expanded;
        renderProjects();
        if (!expanded) {
            document.querySelector('#Projets').scrollIntoView({ behavior: 'smooth' });
        }
    });

    renderProjects();
}

const revealTargets = document.querySelectorAll(
    '.heading, .section-sub, .about-img, .about-content, .stack-box, .project-card, .contact-grid'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-visible');
            el.addEventListener('animationend', () => {
                el.classList.remove('reveal', 'is-visible');
            }, { once: true });
            observer.unobserve(el);
        }
    });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));

const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function () {
        const btn = form.querySelector("button[type='submit']");
        if (btn) {
            btn.textContent = 'Envoi en cours...';
            btn.disabled = true;
        }
    });
}
