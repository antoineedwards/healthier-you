const ProductCardData = [
    {
        type: "service",
        name: "Quantum Magnetic Resonance Analysis",
        image: "/images/magnetic-resonance.jpeg",
        description: "A comprehensive nutrition plan tailored to your body type and fitness goals.",
        link: "/product-detail"
    },
    {
        type: "service",
        name: "National Phelebotomy Certification",
        image: "/images/phlebotomy.jpeg",
        description: "A comprehensive nutrition plan tailored to your body type and fitness goals.",
        link: "/product-detail"
    }
];

const container = document.getElementById("product-container");

ProductCardData.forEach((product) => {
    const card = document.createElement("article");
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="300px" class="productImage">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a href="${product.link}">View Details</a>
    `;
    container.appendChild(card);
});
