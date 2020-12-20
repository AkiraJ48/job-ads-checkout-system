type Product = {
  id: string,
  name: string,
  description: string,
  price: number
};

export type ProductId = Pick<Product, "id">;

export default Product;
