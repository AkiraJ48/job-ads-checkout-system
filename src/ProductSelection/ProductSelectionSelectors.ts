import ProductProps from './ProductProps';
import { ProductSelectionState } from './ProductSelectionReducer';

export const getProductProps = (state: ProductSelectionState): ProductProps[] => state.products.map(product => ({
  key: product.id,
  title: product.name,
  description: product.description,
  price: product.price,
}));
