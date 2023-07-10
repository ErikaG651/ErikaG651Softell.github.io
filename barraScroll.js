// Obtén una referencia al elemento del cuerpo del documento
var body = document.body;

// Función para habilitar la barra de desplazamiento
function enableScroll() {
  body.style.overflow = 'auto';
}

// Función para deshabilitar la barra de desplazamiento
function disableScroll() {
  body.style.overflow = 'hidden';
}

// Ejemplo de uso:

// Llama a la función disableScroll() cuando abras el menú
openMenuButton.addEventListener('click', function() {
  disableScroll();
});

// Llama a la función enableScroll() cuando cierres el menú
closeMenuButton.addEventListener('click', function() {
  enableScroll();
});
