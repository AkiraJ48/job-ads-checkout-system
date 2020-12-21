import ProductSelectionReducer, { initialState, ActionType } from '../ProductSelectionReducer';

describe('ProductSelectionReducer', () => {
  test('should set the initial state', () => {
    const products = [
      {
        id: '1',
        name: 'ad',
        description: 'hello',
        price: 123.11
      }
    ];

    const action = {
      type: ActionType.SET_INITIAL_STATE,
      products,
    };
    
    const state = ProductSelectionReducer(initialState, action);

    expect(state).toEqual({ products });
  })
})