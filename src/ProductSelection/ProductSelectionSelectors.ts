import ProductProps from './components/ProductProps';
import { ProductSelectionState } from './ProductSelectionReducer';

export const getProductProps = (state: ProductSelectionState): ProductProps[] => state.products;
