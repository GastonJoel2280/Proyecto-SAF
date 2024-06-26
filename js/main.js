let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 0; // Empezamos desde el primer slide
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;
let transitionDuration = 0.8; // Duración de la transición en segundos

// Ajustar el ancho del slider al cambiar el tamaño de la ventana
window.addEventListener("resize", function() {
    width = sliderIndividual[0].clientWidth;
});

// Función para cambiar los slides
function slides() {
    if (contador >= sliderIndividual.length - 1) {
        // Si estamos en el último slide, volvemos al primero sin transición
        slider.style.transition = `transform 0s`;
        contador = 0;
    } else {
        contador++;
    }
    slider.style.transform = `translate(${-width * contador}px)`;
    slider.style.transition = `transform ${transitionDuration}s ease-out`;
}

// Llamamos a la función slides inicialmente y luego cada intervalo definido
setInterval(slides, intervalo);

// Mostrar el primer slide de inmediato
slides();
