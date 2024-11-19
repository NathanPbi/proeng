window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.getElementById("navbarNav");

  // Evento de clique para mostrar/ocultar o menu
  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener("click", function () {
      navbarNav.classList.toggle("show");
    });
  }

  document.addEventListener("click", function (e) {
    const isAccordionItem = e.target.closest(".service-item");
    const openItems = document.querySelectorAll(".accordion-collapse.show");

    if (!isAccordionItem) {
      openItems.forEach((item) => {
        item.classList.remove("show");
        const iconToClose = item
          .closest(".service-item")
          .querySelector(".service-icon");
        if (iconToClose) {
          iconToClose.classList.remove("rotated");
        }
      });
    } else {
      toggleAccordion(isAccordionItem);
    }
  });
});

function toggleAccordion(element) {
  const target = document.querySelector(element.getAttribute("data-bs-target"));
  const icon = element.querySelector(".service-icon");

  if (target) {
    const isOpen = target.classList.contains("show");

    document.querySelectorAll(".accordion-collapse.show").forEach((item) => {
      if (item !== target) {
        item.classList.remove("show");
        const iconToClose = item
          .closest(".service-item")
          .querySelector(".service-icon");
        if (iconToClose) {
          iconToClose.classList.remove("rotated");
        }
      }
    });

    target.classList.toggle("show");
    if (icon) {
      icon.classList.toggle("rotated", !isOpen);
    }
  }
}
const swiperThumbs = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10, // Espaço entre miniaturas
  slidesPerView: 3, // Mostra 3 miniaturas no mobile
  freeMode: true, // Navegação livre
  watchSlidesProgress: true, // Sincroniza com o swiper principal
});

const swiperMain = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10, // Espaçamento entre slides
  centeredSlides: true, // Centraliza o slide ativo
  navigation: true, // Botões de navegação (opcional no mobile)
  thumbs: {
    swiper: swiperThumbs, // Conecta ao swiper de miniaturas
  },
});

//     // Carrega e organiza os serviços por ordem
//     const serviceSnapshot = await db.collection("servicos").orderBy("order").get();
//     let leftColumn = true;

//     serviceSnapshot.forEach(doc => {
//         const data = doc.data();

//         const serviceItem = document.createElement("div");
//         serviceItem.classList.add("service-item");
//         serviceItem.innerHTML = `
//             <p class="service-title text-light d-flex align-items-center" onclick="toggleAccordion(this)" data-bs-toggle="collapse" data-bs-target="#collapse${doc.id}" aria-expanded="false" aria-controls="collapse${doc.id}">
//                 <i class="fas fa-bolt service-icon me-2"></i>
//                 <span class="new-bg px-1 text-center">${data.title}</span>
//             </p>
//             <div id="collapse${doc.id}" class="accordion-collapse collapse" data-bs-parent="#${leftColumn ? 'accordionLeft' : 'accordionRight'}">
//                 <div class="accordion-body">
//                     <img src="${data.imageUrl}" alt="${data.title}" class="service-img mb-3" style="width: 100%; height: auto;">
//                     <p>${data.description}</p>
//                 </div>
//             </div>
//         `;

//         if (leftColumn) {
//             serviceContainerLeft.appendChild(serviceItem);
//         } else {
//             serviceContainerRight.appendChild(serviceItem);
//         }
//         leftColumn = !leftColumn;
//     });
// }

// // Carrega os serviços e parceiros ao carregar a página
// document.addEventListener("DOMContentLoaded", loadServicesAndPartners);
