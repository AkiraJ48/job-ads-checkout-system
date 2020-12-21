import { ApiActions, ApiArgs } from "../Api";

export type LoadProductsApiArgs = ApiArgs & {
  action: ApiActions.LOAD_PRODUCTS,
};

type Product = {
  id: string,
  name: string,
  description: string,
  price: number
};

export type ProductId = Pick<Product, "id">;

export default Product;
