async function loadProducts() {
  const response = (await import('../data/products.json')).default;
  return response;
}

export default loadProducts;