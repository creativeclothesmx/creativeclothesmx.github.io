// Esta función es llamada cada vez que haces clic en un círculo de color
function changeImage(newImageSrc) {
    // 1. JavaScript busca la etiqueta <img> que tiene el ID 'producto-img'
    const mainImage = document.getElementById('producto-img');

    // 2. JavaScript actualiza el atributo 'src' de esa imagen con el nuevo nombre de archivo
    mainImage.src = newImageSrc;

    // NOTA: El CSS para seleccionar el círculo lo haremos después
}
