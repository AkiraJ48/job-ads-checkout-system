import JobAdReducer, { initialState, SetInitialState, UpdateCart, ActionType } from '../JobAdReducer';

describe('JobAdReducer', () => {
  test('should set the initial state', () => {
    const jobAds = [
      {
        id: '1',
        title: 'ad',
        description: 'hello',
        price: 123.11
      }
    ];

    const action: SetInitialState = {
      type: ActionType.SET_INITIAL_STATE,
      ads: jobAds,
    };
    
    const state = JobAdReducer(initialState, action);

    expect(state).toEqual({ 
      jobAds,
      selectedJobAds: [],
     });
  })

  test('should update the cart with a selected product', () => {
    const state = {
      jobAds: [
        {
          id: '1',
          title: '',
          description: '',
          price: 1,
        }
      ],
      selectedJobAds: [],
    }

    const action: UpdateCart = {
      type: ActionType.UPDATE_CART,
      id: '1',
      quantity: 2,
    };

    const updatedState = JobAdReducer(state, action);

    expect(updatedState.selectedJobAds).toEqual([
      {
        id: '1',
        quantity: 2
      }
    ]);
  })

  test('should update the cart with a selected product that already exists', () => {
    const state = {
      jobAds: [
        {
          id: '1',
          title: '',
          description: '',
          price: 1,
        }
      ],
      selectedJobAds: [
        {
          id: '1',
          quantity: 3
        }
      ],
    }

    const action: UpdateCart = {
      type: ActionType.UPDATE_CART,
      id: '1',
      quantity: 4,
    };

    const updatedState = JobAdReducer(state, action);

    expect(updatedState.selectedJobAds).toEqual([
      {
        id: '1',
        quantity: 4
      }
    ]);
  })

  test('should update the cart with multiple products', () => {
    const state = {
      jobAds: [
        {
          id: '1',
          title: '',
          description: '',
          price: 1,
        },
        {
          id: '2',
          title: '',
          description: '',
          price: 3,
        },
      ],
      selectedJobAds: [
        {
          id: '1',
          quantity: 3
        }
      ],
    }

    const action: UpdateCart = {
      type: ActionType.UPDATE_CART,
      id: '2',
      quantity: 2,
    };

    const updatedState = JobAdReducer(state, action);

    expect(updatedState.selectedJobAds).toEqual([
      {
        id: '1',
        quantity: 3
      },
      {
        id: '2',
        quantity: 2
      }
    ]);
  })
})