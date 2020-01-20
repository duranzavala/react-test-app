import types from  '../util/constants'

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case types.login.loginInit:
    return { ...state };
  case types.login.loginRequest:
    return { ...state };
  case types.login.loginSucces:
    return { ...state };
  case types.login.loginFailure:
    return { ...state };
  default:
    return state
  }
};
