import JobAd from "./JobAd";

export type SelectedJobAds = {
  quantity: number,
  id: string,
}

export type JobAdState = {
  jobAds: JobAd[]
  selectedJobAds: SelectedJobAds[],
}

export const initialState: JobAdState = {
  jobAds: [],
  selectedJobAds: [],
}

export enum ActionType {
  SET_INITIAL_STATE,
  UPDATE_CART,
}

export type SetInitialState = {
  type: ActionType.SET_INITIAL_STATE,
  ads: JobAd[],
}

export type UpdateCart = {
  type: ActionType.UPDATE_CART,
  id: string,
  quantity: number,
};

type Action = SetInitialState | UpdateCart;

function JobAdReducer(state: JobAdState, action: Action) {
  switch (action.type) {
    case ActionType.SET_INITIAL_STATE:
      return {
        ...state,
        jobAds: action.ads,
      }
    case ActionType.UPDATE_CART:
      const itemExistsInCart = state.selectedJobAds.find(ad => ad.id === action.id);
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

      return {
        ...state,
        selectedJobAds: state.selectedJobAds.map((selectedAd) => {
          if(selectedAd.id === action.id) {
            return {
              id: action.id,
              quantity: action.quantity,
            }
          }
          return selectedAd;
        })
      }
    default:
      return state;
  }
}

export default JobAdReducer;
