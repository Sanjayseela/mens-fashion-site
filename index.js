const products = [
    { id: 1, name: "dress wear", price: "$49", image: "https://i.pinimg.com/736x/b2/5e/3b/b25e3bed31b40910689a578b9c3c35c8.jpg" },
    { id: 2, name: "Tailored Pants", price: "$79", image: "https://i.pinimg.com/736x/84/5e/a8/845ea87530acf828e1177e156f8f73c4.jpg" },
    { id: 3, name: "stylish watch", price: "$35", image: "https://i.pinimg.com/736x/08/71/44/087144286bdd3da495729b709389f5d9.jpg" },
  ];

  const cart = [];

  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="button" onclick='addToCart(${JSON.stringify(product)})'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
    `;
    productList.appendChild(div);
  });

  function addToCart(product) {
    cart.push(product);
    alert(product.name + ' added to cart!');
  }

   