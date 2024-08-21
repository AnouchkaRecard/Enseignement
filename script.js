// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const dropdowns = document.querySelectorAll('.mobile-menu .dropdown');

    // Fonction pour afficher/masquer le menu mobile
    hamburgerMenu.addEventListener('click', function() {
        const isMenuVisible = mobileMenu.classList.contains('show');
        if (isMenuVisible) {
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none'; // Assurez-vous que le menu est caché
        } else {
            mobileMenu.classList.add('show');
            mobileMenu.style.display = 'block'; // Afficher le menu
        }
    });

    // Fonction pour afficher/masquer les sous-menus dans le mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            const isDropdownActive = dropdown.classList.contains('active');
            if (isDropdownActive) {
                dropdown.classList.remove('active');
            } else {
                dropdown.classList.add('active');
            }
        });
    });
});
