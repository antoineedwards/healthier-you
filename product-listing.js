const container = document.getElementById("product-container");

products.forEach((product) => {
    const card = document.createElement("article");
    card.innerHTML = `
        <a href="${product.link}">
        <img src="${product.image}" alt="${product.name}" width="300px" class="productImage">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.link}">View Details</a>
        </a>
    `;
    container.appendChild(card);
});
