// Seleccione todas las tarjetas con la clase "card"
const cards = document.querySelectorAll(".card");

// Recorrer cada tarjeta
cards.forEach((card) => {
    // Dentro de cada tarjeta, seleccione las estrellas específicas
    const stars = card.querySelectorAll(".rating i");

    // Recorrer las estrellas específicas de cada tarjeta
    stars.forEach((star, index1) => {
        // Agregar un detector de eventos que ejecute una función cuando se active el evento "clic"
        star.addEventListener("click", () => {
            // Recorrer de nuevo las estrellas específicas de la tarjeta
            stars.forEach((star, index2) => {
                // Agregar o quitar la clase "activa" basada en el índice
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
        });
    });
});
