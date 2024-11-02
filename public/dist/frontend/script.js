
const scriptJQuery = document.createElement('script');
scriptJQuery.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
document.head.appendChild(scriptJQuery);

const scriptPopper = document.createElement('script');
scriptPopper.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
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

// Adiciona um listener para cliques em todo o documento
document.addEventListener('click', function (e) {
    const isAccordionItem = e.target.closest('.service-item');
    const openItems = document.querySelectorAll('.accordion-collapse.show');

    // Fecha o acordeão ao clicar fora
    if (!isAccordionItem) {
        openItems.forEach(item => {
            item.classList.remove('show');
            // Remove a rotação do ícone
            const iconToClose = item.previousElementSibling.querySelector('.service-icon');
            if (iconToClose) {
                iconToClose.classList.remove('rotated'); // Remove a classe de rotação
            }
        });
    } else {
        // Clica em um item do acordeão
        toggleAccordion(isAccordionItem);
    }
});

function toggleAccordion(element) {
    const target = document.querySelector(element.getAttribute('data-bs-target'));
    const icon = element.querySelector('.service-icon'); // Seleciona o ícone do item

    // Alterna o item atual
    const isOpen = target.classList.toggle('show');

    // Se o item está agora aberto, adiciona a classe de rotação
    if (isOpen) {
        icon.classList.add('rotated'); // Adiciona a classe para rotacionar
    } else {
        icon.classList.remove('rotated'); // Remove a classe se está fechado
    }

    // Fecha todos os outros itens abertos
    const openItems = document.querySelectorAll('.accordion-collapse.show');
    openItems.forEach(item => {
        if (item !== target) {
            item.classList.remove('show');
            // Remove a rotação do ícone
            const iconToClose = item.previousElementSibling.querySelector('.service-icon');
            if (iconToClose) {
                iconToClose.classList.remove('rotated'); // Remove a classe de rotação
            }
        }
    });
}