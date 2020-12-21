import JobAd from "./JobAd";

export type JobAdState = {
  jobAds: JobAd[]
}

export const initialState: JobAdState = {
  jobAds: [],
}

export enum ActionType {
  SET_INITIAL_STATE,
}

type SetInitialState = {
  type: ActionType.SET_INITIAL_STATE,
  ads: JobAd[],
}

type Actions = SetInitialState;

function JobAdReducer(state: JobAdState, action: Actions) {
  switch (action.type) {
    case ActionType.SET_INITIAL_STATE:
      return {
        ...state,
        jobAds: action.ads,
      }
    default:
      return state;
  }
}

export default JobAdReducer;
