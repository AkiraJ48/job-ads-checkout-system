import JobAdReducer, { initialState, ActionType } from '../JobAdReducer';

describe('JobAdReducer', () => {
  test('should set the initial state', () => {
    const jobAds = [
      {
        key: '1',
        title: 'ad',
        description: 'hello',
        price: 123.11
      }
    ];

    const action = {
      type: ActionType.SET_INITIAL_STATE,
      ads: jobAds,
    };
    
    const state = JobAdReducer(initialState, action);

    expect(state).toEqual({ jobAds });
  })
})