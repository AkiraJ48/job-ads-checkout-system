import { Action, ActionType, JobAdState, SetInitialState, UpdateCart } from './Types';

function isSetInitialState(action: Action): action is SetInitialState {
  return (action as SetInitialState).type === ActionType.SET_INITIAL_STATE;
}

function isUpdateCart(action: Action): action is UpdateCart {
  return (action as UpdateCart).type === ActionType.UPDATE_CART;
} 

function JobAdReducer(state: JobAdState, action: Action) {
  if (isSetInitialState(action)) {
    return {
      ...state,
      jobAds: action.ads,
    }
  } else if (isUpdateCart(action)) {
    const itemExistsInCart = state.selectedJobAds.find(ad => ad.id === action.id);
    
    // Add new item
    if (!itemExistsInCart) {
      return {
        ...state,
        selectedJobAds: [
          ...state.selectedJobAds,
          {
            id: action.id,
            quantity: action.quantity
          }
        ]
      }
    }

    // Remove item
    if (action.quantity === 0) {
      return {
        ...state,
        selectedJobAds: state.selectedJobAds.filter(selectedAd => selectedAd.id !== action.id)
      }
    }

    // Update existing item
    return {
      ...state,
      selectedJobAds: state.selectedJobAds.map((selectedAd) => {
        if (selectedAd.id === action.id) {
          return {
            id: action.id,
            quantity: action.quantity,
          }
        }
        return selectedAd;
      })
    }
  }
  return state;
}

export default JobAdReducer;
