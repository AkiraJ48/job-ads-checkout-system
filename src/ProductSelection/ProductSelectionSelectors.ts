import ProductProps from './ProductProps';
import { ProductSelectionState } from './ProductSelectionReducer';

export const getProductProps = (state: ProductSelectionState): ProductProps[] => state.products;
