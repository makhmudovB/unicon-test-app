import ApiService from "../../services/api";
import {
  createUserError,
  createUserStarting,
  createUserSuccess,
  updateUserError,
  updateUserStarting,
  updateUserSuccess,
  userError,
  userStarting,
  userSuccess,
} from "./typeFunctions";

export const getUsers = (payload, token) => (dispatch) => {
  dispatch(userStarting());
  const { search, limit, offset, organization } = payload;
  return ApiService.getResources(
    `/v1/users/?organization=${organization}&search=${search}&limit=${limit}&offset=${offset}`,
    token
  )
    .then((value) => {
      dispatch(userSuccess(value));
    })
    .catch((error) => dispatch(userError(error)));
};

export const createUser = (payload, token) => (dispatch) => {
  dispatch(createUserStarting());
  const { login_name, password, role, organization } = payload;
  const body = {
    login_name,
    password,
    role,
    organization,
  };
  return ApiService.fetchPostEvent("/v1/users/", token, body)
    .then((value) => {
      dispatch(createUserSuccess(value));
    })
    .catch((error) => dispatch(createUserError(error)));
};

export const updateUser = (id, payload, token) => (dispatch) => {
  dispatch(updateUserStarting());
  const { login_name, password } = payload;
  const body = {
    login_name,
    password,
  };
  return ApiService.patchEvent(`/v1/users/${id}/`, token, body)
    .then((value) => {
      dispatch(updateUserSuccess(value));
    })
    .catch((error) => dispatch(updateUserError(error)));
};
