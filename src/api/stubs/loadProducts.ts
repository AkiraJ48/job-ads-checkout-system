async function loadProducts() {
  const response = await import('../data/products.json');
  return response;
}

export default loadProducts;