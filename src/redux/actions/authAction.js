import { paths } from "../../common/paths";
import ApiService from "../../services/api";
import * as authTypes from "../actionTypes/authActionTypes";
import { handleType } from "./handleType";

export const getAuth = (payload) => (dispatch) => {
  dispatch(handleType(authTypes.AUTH_START));
  const { login_name, password } = payload;
  const body = {
    login_name,
    password,
  };
  return ApiService.postEvent("/v1/token/", body, null)
    .then((value) => {
      dispatch(handleType(authTypes.AUTH_SUCCESS, value.data));
      if (value.data.role === "admin") {
        window.location.replace(paths.home);
      } else {
        window.location.replace(paths.error);
      }
    })
    .catch((error) => dispatch(handleType(authTypes.AUTH_FAIL, error)));
};

export const refreshToken = (token) => (dispatch) => {
  return ApiService.postEvent("/v1/token/refresh/", token, null).then(
    (value) => {
      dispatch(handleType(authTypes.SET_REFRESH, value));
    }
  );
};

export const logOut = (token) => (dispatch) => {
  return ApiService.postEvent("/v1/logout/", token, null).then((value) => {
    dispatch(handleType(authTypes.LOG_OUT, value));
  });
};
