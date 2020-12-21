import ProductProps from "./components/ProductProps";

export type ProductSelectionState = {
  products: ProductProps[]
}

export const initialState: ProductSelectionState = {
  products: [],
}

export enum ActionType {
  SET_INITIAL_STATE,
}

type SetInitialState = {
  type: ActionType.SET_INITIAL_STATE,
  products: ProductProps[],
}

type Actions = SetInitialState;

function ProductSelectionReducer(state: ProductSelectionState, action: Actions) {
  switch (action.type) {
    case ActionType.SET_INITIAL_STATE:
      return {
        ...state,
        products: action.products,
      }
    default:
      return state;
  }
}

export default ProductSelectionReducer;
