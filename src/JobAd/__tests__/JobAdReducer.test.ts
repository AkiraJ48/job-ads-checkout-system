import JobAdReducer from '../JobAdReducer';
import { ActionType, SetInitialState, UpdateCart } from '../Types';

describe('JobAdReducer', () => {
  describe(`${ActionType[ActionType.SET_INITIAL_STATE]}`, () => {
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
      
      const state = JobAdReducer({ jobAds: [], selectedJobAds: []}, action);
  
      expect(state).toEqual({ 
        jobAds,
        selectedJobAds: [],
       });
    })
  })

  describe(`${ActionType[ActionType.SET_INITIAL_STATE]}`, () => { 
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

    test('should remove the product from the cart when decremented', () => {
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
            quantity: 1
          }
        ],
      }

      const action: UpdateCart = {
        type: ActionType.UPDATE_CART,
        id: '1',
        quantity: 0,
      };

      const updatedState = JobAdReducer(state, action);

      expect(updatedState.selectedJobAds).toEqual([]);
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
})