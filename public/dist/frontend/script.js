// Certifique-se de carregar apenas os scripts necessários (jQuery, Popper e Bootstrap) se ainda não estiverem no HTML.
const scriptJQuery = document.createElement('script');
scriptJQuery.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
document.head.appendChild(scriptJQuery);

const scriptPopper = document.createElement('script');
scriptPopper.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
document.head.appendChild(scriptPopper);

const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js";
document.head.appendChild(scriptBootstrap);

// Evento para adicionar classe 'scrolled' no navbar ao rolar a página
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.header');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    // Evento de clique para mostrar/ocultar o menu
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function () {
            navbarNav.classList.toggle('show');
        });
    }

    // Evento de clique para fechar acordeões ao clicar fora
    document.addEventListener('click', function (e) {
        const isAccordionItem = e.target.closest('.service-item');
        const openItems = document.querySelectorAll('.accordion-collapse.show');

        if (!isAccordionItem) {
            openItems.forEach(item => {
                item.classList.remove('show');
                const iconToClose = item.closest('.service-item').querySelector('.service-icon');
                if (iconToClose) {
                    iconToClose.classList.remove('rotated');
                }
            });
        } else {
            toggleAccordion(isAccordionItem);
        }
    });
});

// Função para abrir/fechar o acordeão e alternar a rotação do ícone
function toggleAccordion(element) {
    const target = document.querySelector(element.getAttribute('data-bs-target'));
    const icon = element.querySelector('.service-icon');

    if (target) {
        const isOpen = target.classList.contains('show');

        // Fecha todos os itens abertos, exceto o atual
        document.querySelectorAll('.accordion-collapse.show').forEach(item => {
            if (item !== target) {
                item.classList.remove('show');
                const iconToClose = item.closest('.service-item').querySelector('.service-icon');
                if (iconToClose) {
                    iconToClose.classList.remove('rotated');
                }
            }
        });

        // Alterna o estado do item clicado e do ícone
        target.classList.toggle('show');
        if (icon) {
            icon.classList.toggle('rotated', !isOpen);
        }
    }
}
