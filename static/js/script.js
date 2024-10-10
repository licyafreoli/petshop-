document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Melhor Amigo Petshop!");

    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            document.getElementById('form-response').innerHTML = "<h2>Obrigado pelo seu interesse! Em breve entraremos em contato.</h2>";
        });
    } else {
        console.error("O formulário de contato não foi encontrado.");
    }
});
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;

    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}


function moveSlide(direction) {
    showSlide(currentSlide + direction);
}


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    console.log("Welcome to Melhor Amigo Petshop!");

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('form-response').innerHTML = "<h2>Obrigado pelo seu interesse! Em breve entraremos em contato.</h2>";
    });
});
