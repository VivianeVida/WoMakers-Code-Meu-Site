// Espera o documento HTML ser completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos com a classe "slide"
    const slides = document.querySelectorAll(".slide");
    
    // Seleciona os botões "Anterior" e "Próximo" pelo ID
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // Inicializa o índice do slide atual
    let currentIndex = 0;

    // Função para exibir o slide com base no índice
    function showSlide(index) {
        // Itera sobre todos os slides
        slides.forEach((slide, i) => {
            // Se o índice do slide corresponder ao índice fornecido
            if (i === index) {
                slide.style.display = "block"; // Exibe o slide
            } else {
                slide.style.display = "none"; // Oculta os outros slides
            }
        });
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Calcula o próximo índice
        showSlide(currentIndex); // Exibe o próximo slide
    }

    // Função para retroceder para o slide anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Calcula o índice anterior
        showSlide(currentIndex); // Exibe o slide anterior
    }

    // Inicialmente, exibe o primeiro slide
    showSlide(currentIndex);

    // Adiciona um ouvinte de eventos para o botão "Próximo"
    nextButton.addEventListener("click", nextSlide);

    // Adiciona um ouvinte de eventos para o botão "Anterior"
    prevButton.addEventListener("click", prevSlide);
});
