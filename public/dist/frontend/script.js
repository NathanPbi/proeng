
const scriptJQuery = document.createElement('script');
scriptJQuery.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
document.head.appendChild(scriptJQuery);

const scriptPopper = document.createElement('script');
scriptPopper.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/public/dist/umd/popper.min.js";
document.head.appendChild(scriptPopper);

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.head.appendChild(scriptBootstrap);


window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('show');
});
