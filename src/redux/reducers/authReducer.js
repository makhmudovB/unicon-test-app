import * as authTypes from "../actionTypes/authActionTypes";

const initialState = {
  loading: false,
  error: null,
  response: null,
  token: null,
  access: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authTypes.AUTH_START:
      return { ...state, loading: true };
    case authTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        response: payload,
        token: payload?.refresh,
      };
    case authTypes.AUTH_FAIL:
      return { ...state, loading: false, error: payload };
    case authTypes.SET_REFRESH:
      return { ...state, access: payload };
    case authTypes.LOG_OUT:
      return { ...initialState };
    default:
      return state;
  }
};

export default authReducer;
