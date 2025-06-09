function generarEstrellas(container, rating) {
  container.innerHTML = ""; // Limpiar estrellas previas
  const totalEstrellas = 5;
  const estrellasLlenas = Math.floor(rating);
  const decimalPart = rating - estrellasLlenas;
  let tieneMediaEstrella = false;
  let estrellasCompletasConsiderandoRedondeo = estrellasLlenas;

  // Lógica para determinar si hay media estrella o si se redondea hacia arriba la estrella completa
  // x.0 a x.24 -> 0 media estrella, se redondea hacia abajo (ya lo hace Math.floor)
  // x.25 a x.74 -> 1 media estrella
  // x.75 a x.99 -> 0 media estrella, se redondea hacia arriba la estrella completa

  if (decimalPart >= 0.75) {
    estrellasCompletasConsiderandoRedondeo = estrellasLlenas + 1; // Redondear la estrella completa hacia arriba
  } else if (decimalPart >= 0.25) {
    tieneMediaEstrella = true;
    // estrellasCompletasConsiderandoRedondeo ya es estrellasLlenas, la media va después
  }

  for (let i = 1; i <= totalEstrellas; i++) {
    const estrellaIcon = document.createElement("i"); // Usar <i> para Font Awesome
    estrellaIcon.style.margin = "0 2px"; // Pequeño espacio entre estrellas

    if (i <= estrellasCompletasConsiderandoRedondeo) {
        if (tieneMediaEstrella && i === estrellasCompletasConsiderandoRedondeo + 1 && i === estrellasLlenas + 1) {
            // Este caso es para cuando estrellasCompletasConsiderandoRedondeo es igual a estrellasLlenas
            // y la siguiente es media.
             estrellaIcon.className = "fas fa-star-half-alt"; // Media estrella
        } else {
             estrellaIcon.className = "fas fa-star"; // Estrella llena
        }
    } else if (tieneMediaEstrella && i === estrellasLlenas + 1) {
      // Este es el caso donde la estrella actual es la media
      estrellaIcon.className = "fas fa-star-half-alt"; // Media estrella
    } else {
      estrellaIcon.className = "far fa-star"; // Estrella vacía (Font Awesome usa 'far' para regular/vacía)
    }
    container.appendChild(estrellaIcon);
  }
}
let container = document.querySelector("star-rating-display")
generarEstrellas(container, 5)
