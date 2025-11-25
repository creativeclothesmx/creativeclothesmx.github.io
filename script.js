// VARIABLES GLOBALES
const PHONE_NUMBER = '522291286166'; // 👈 IMPORTANTE: CAMBIA ESTE NÚMERO POR EL TUYO REAL
let selectedSize = 'M'; // Talla inicial (M por defecto)
let selectedColor = 'Blanco'; // Color inicial (Blanco por defecto)

// Lista de nuestros productos (para que JS sepa qué títulos e imágenes cargar)
const PRODUCTS = {
    'chainsaw': { title: 'Playera Chainsaw Man', image: 'chainsaw-1.png' },
    'naruto': { title: 'Playera Naruto', image: 'naruto.jpg' } 
    // AGREGAR MÁS PRODUCTOS AQUÍ
};

// --- FUNCIONES DE INTERACCIÓN ---

// 1. Función para la selección de color y cambio de imagen
function changeImage(clickedElement, newImageSrc) {
    // A. Cambia la imagen
    const mainImage = document.getElementById('producto-img');
    mainImage.src = newImageSrc;
    
    // B. Mueve el borde (selección visual)
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.classList.remove('selected');
    });
    clickedElement.classList.add('selected');

    // C. Guarda el color para el mensaje de WhatsApp
    selectedColor = clickedElement.getAttribute('data-color-name');
    
    updateWhatsAppLink(); // Llama a la función final para armar el nuevo enlace
}

// 2. Función para seleccionar la talla
function selectSize(clickedElement, size) {
    // 1. Almacenar el valor de la talla
    selectedSize = size;
    
    // 2. Lógica para el Feedback Visual (mover el color de fondo)
    const sizeOptions = document.querySelectorAll('.size-option');
    
    sizeOptions.forEach(option => {
        option.classList.remove('selected-size');
    });

    clickedElement.classList.add('selected-size');

    updateWhatsAppLink(); // Llama a la función final
}

// 3. Función que junta toda la información y actualiza el enlace del botón
function updateWhatsAppLink() {
    const productTitle = document.querySelector('.info-area h2').textContent;
    
    const finalMessage = `Hola, me interesa la ${productTitle} en color ${selectedColor} y talla ${selectedSize}.`;
    
    // Codificamos el mensaje para URL (reemplaza espacios por %20)
    const encodedMessage = encodeURIComponent(finalMessage);
    
    // Actualizamos el enlace del botón final
    const whatsappButton = document.getElementById('whatsapp-final');
    if (whatsappButton) {
        whatsappButton.href = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    }
}

// 4. Función principal: lee la URL y carga los detalles correctos al inicio
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Si el ID existe...
    if (PRODUCTS[productId]) {
        const product = PRODUCTS[productId];
        
        // a) Actualizamos el título
        document.querySelector('.info-area h2').textContent = product.title;

        // b) Actualizamos la imagen inicial 
        document.getElementById('producto-img').src = product.image;
        
        // c) Establecemos la selección inicial (Blanco y Talla M)
        if(document.querySelector('.color-option')) {
            document.querySelector('.color-option').classList.add('selected');
        }
        document.querySelector('.size-option[onclick*="selectSize(this, \'M\')"]').classList.add('selected-size');
        
        updateWhatsAppLink(); // Armamos el enlace inicial
    }
}

// Ejecutamos la función al cargar la página
loadProductDetails();
