// Fetch data from the API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('products-container');

        // Loop through the products and dynamically create HTML
        products.forEach(product => {
            const productHTML = `
                <div class="swiper-slide">
                    <div class="product">
                        <div class="intp">
                            <div class="ooff"><p>-40%</p></div>
                            <div class="photo"><img src="${product.image}" alt="${product.title}"></div>
                            <div class="eyelogo">
                                <i class="fa-regular fa-eye" title="View Product"></i>
                                <i class="fa-regular fa-heart" title="Add to Wishlist"></i>
                            </div>
                            <div class="addto-cart">
                                <p>Add To Cart</p>
                            </div>
                        </div>
                        <div class="productname">
                            <p class="p-name">${product.title}</p>
                            <div class="price">
                                <span class="current-price">$${product.price}</span>
                                <span class="original-price"><s>$150</s></span>
                            </div>
                            <div class="rating">
                                <p>&starf; ${'★'.repeat(4)}${'☆'.repeat(5 - 4)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
