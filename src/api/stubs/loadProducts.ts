async function loadProducts() {
  const products = (await import('../data/products.json')).default;
  return products;
}

export default loadProducts;