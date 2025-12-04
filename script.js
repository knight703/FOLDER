const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".nav-link");

let isOpen = false;

btn.addEventListener("click", () => {
    if (!isOpen) {
        btn.classList.add("open");
        menu.classList.add("open");
        document.body.classList.add("no-scroll");
        isOpen = true;
    } else {
        btn.classList.remove("open");
        menu.classList.remove("open");
        document.body.classList.remove("no-scroll");
        isOpen = false;
    }
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        btn.classList.remove("open");
        menu.classList.remove("open");
        document.body.classList.remove("no-scroll");
        isOpen = false;
    });
});

const contactBtn = document.querySelector(".contact-btn");
contactBtn.addEventListener("mouseenter", () => {
    contactBtn.textContent = "HELL YEAH!!";
});
contactBtn.addEventListener("mouseleave", () => {
    contactBtn.textContent = "CONTACT ME";
});

const moreAboutBtn = document.querySelector(".more-about");
moreAboutBtn.addEventListener("mouseenter", () => {
    moreAboutBtn.textContent = "I LOVE MATCHA";
});
moreAboutBtn.addEventListener("mouseleave", () => {
    moreAboutBtn.textContent = "MORE ABOUT ME";
});
