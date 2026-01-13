// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// Find the product in the shared data
const product = products.find(p => p.id === productId);

if (product) {
    // Update the page content
    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-image').alt = product.name;
    document.getElementById('detail-desc').textContent = product.description;
} else {
    // Handle case where product is not found
    document.getElementById('main').innerHTML = '<section class="post"><header class="major"><h1>Product Not Found</h1><p>Sorry, the product you are looking for does not exist.</p></header></section>';
}
