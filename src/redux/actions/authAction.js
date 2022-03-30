import { paths } from "../../common/paths";
import ApiService from "../../services/api";
import * as authTypes from "../actionTypes/authActionTypes";

const authStarting = () => ({
  type: authTypes.AUTH_START,
});

const authSuccess = (data) => ({
  type: authTypes.AUTH_SUCCESS,
  payload: data,
});

const authError = (error) => ({
  type: authTypes.AUTH_FAIL,
  payload: error,
});

const setRefresh = (token) => ({
  type: authTypes.SET_REFRESH,
  payload: token,
});

const setLogout = (token) => ({
  type: authTypes.LOG_OUT,
  payload: token,
});

export const getAuth = (payload) => (dispatch) => {
  dispatch(authStarting());
  const { login_name, password } = payload;
  const body = {
    login_name,
    password,
  };
  return ApiService.postEvent("/v1/token/", body, null)
    .then((value) => {
      dispatch(authSuccess(value.data));
      if (value.data.role === "admin") {
        window.location.replace(paths.home);
      } else {
        window.location.replace(paths.error);
      }
    })
    .catch((error) => dispatch(authError(error)));
};

export const refreshToken = (token) => (dispatch) => {
  return ApiService.postEvent("/v1/token/refresh/", token, null).then(
    (value) => {
      dispatch(setRefresh(value));
    }
  );
};

export const logOut = (token) => (dispatch) => {
  return ApiService.postEvent("/v1/logout/", token, null).then((value) => {
    dispatch(setLogout(value));
  });
};
