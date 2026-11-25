
// Mengambil semua link navigasi
const navLinks = document.querySelectorAll(".nav-link");

// Mengambil menu navigasi Bootstrap
const navbarMenu = document.getElementById("navbarNav");

// Menutup menu setelah link diklik
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        if (window.innerWidth < 992) {
            const menu = bootstrap.Collapse.getInstance(navbarMenu);

            if (menu) {
                menu.hide();
            }
        }
    });
});
