document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const dropdownButtons = document.querySelectorAll('.dropdown > a');

    // Afficher/masquer le menu mobile
    menuToggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    // Afficher/masquer les sous-menus dans le menu mobile
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const parentDropdown = this.parentElement;
            parentDropdown.classList.toggle('active');
        });
    });
});
