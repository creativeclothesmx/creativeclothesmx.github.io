// Lista de nuestros productos (aquí puedes agregar más después)
const PRODUCTS = {
    'chainsaw': { title: 'Playera Chainsaw Man', image: 'chainsaw-1.png' },
    'naruto': { title: 'Playera Naruto', image: 'naruto.jpg' } 
    // ¡Recuerda subir el archivo 'naruto.jpg' para verlo!
};

// Función que cambia la imagen principal Y actualiza la selección visual
function changeImage(clickedElement, newImageSrc) {
    // A. Lógica para cambiar la imagen
    const mainImage = document.getElementById('producto-img');
    mainImage.src = newImageSrc;
    
    // B. Lógica para el Feedback Visual (¡Esto mueve el borde!)
    const colorOptions = document.querySelectorAll('.color-option');

    // 1. Quitar la clase 'selected' de todos los círculos
    colorOptions.forEach(option => {
        option.classList.remove('selected');
    });

    // 2. Agregar la clase 'selected' solo al elemento que fue clickeado
    clickedElement.classList.add('selected');
}

// Función principal: lee la URL y carga los detalles correctos
function loadProductDetails() {
    // 1. Obtenemos el ID del producto de la URL (?id=...)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Si el ID existe en nuestra lista (PRODUCTS)...
    if (PRODUCTS[productId]) {
        const product = PRODUCTS[productId];
        
        // a) Actualizamos el título de la página
        document.querySelector('.info-area h2').textContent = product.title;

        // b) Actualizamos la imagen inicial 
        document.getElementById('producto-img').src = product.image;
        
        // c) Establecemos el círculo blanco como seleccionado al cargar la página
        if(document.querySelector('.color-option')) {
            document.querySelector('.color-option').classList.add('selected');
        }
    }
}

// Ejecutamos la función de carga
loadProductDetails();
