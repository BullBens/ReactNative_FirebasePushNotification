const SET_APP_GLOBAL_STATE = '[appGlobalState] SET_APP_GLOBAL_STATE';
const RESET_APP_GLOBAL_STATE = '[appGlobalState] RESET_APP_GLOBAL_STATE';

const initialstate = 0;

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_APP_GLOBAL_STATE:
      return action.index;
    case RESET_APP_GLOBAL_STATE:
      return initialstate;
    default:
      return state;
  }
};

export const setAppGlobalState = (index: number) => ({index, type: SET_APP_GLOBAL_STATE});
export const resetAppGlobalState = () => ({type: RESET_APP_GLOBAL_STATE});
