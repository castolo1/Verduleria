const viewDetailsButtons = document.querySelectorAll('.view-details');
const productModalBody = document.getElementById('productModalBody');

// Información de los productos
const products = [
    {
        name: 'Bananas',
        description: 'Bananas de Ecuador.',
        price: '$19.99',
        detail: 'Bananas amarillas'
    },
    {
        name: 'Piñas',
        description: 'Piñas de Brasil.',
        price: '$24.99',
        detail: 'Piñas amarillas'
    },
    {
        name: 'Sandias',
        description: 'Sandias de Australia.',
        price: '$79.99',
        detail: 'Sandias Rojas'
    },
    {
        name: 'Peras',
        description: 'Peras de Argentina.',
        price: '$8.99',
        detail: 'Peras verdes'
    }
    // Agrega información de otros productos aquí
];

// Asigna eventos a los botones "Ver Detalles"
viewDetailsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        displayProductDetails(products[index]);
    });
});

// Muestra los detalles del producto en el modal
function displayProductDetails(product) {
    const detailsHTML = `
        <h5>${product.name}</h5>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <p>${product.detail}</p>
    `;

    productModalBody.innerHTML = detailsHTML;
}