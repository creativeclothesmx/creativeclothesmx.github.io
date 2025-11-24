// Lista de nuestros productos (aquí puedes agregar más después)
const PRODUCTS = {
    'chainsaw': { title: 'Playera Chainsaw Man', image: 'chainsaw-1.png' },
    'naruto': { title: 'Playera Naruto', image: 'naruto.jpg' } 
    // Nota: Necesitas el archivo 'naruto.jpg' en el repo para que esta imagen funcione
};

// Función que cambia la imagen principal (usada por los círculos de color)
function changeImage(newImageSrc) {
    const mainImage = document.getElementById('producto-img');
    mainImage.src = newImageSrc;
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

        // b) Actualizamos la imagen inicial (usando la función changeImage)
        changeImage(product.image);
    }
}

// Ejecutamos la función de carga
loadProductDetails();
