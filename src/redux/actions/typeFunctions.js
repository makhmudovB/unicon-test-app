import * as userTypes from "../actionTypes/userActionTypes";

export const userStarting = () => ({
  type: userTypes.USER_START,
});

export const userSuccess = (data) => ({
  type: userTypes.USER_SUCCESS,
  payload: data,
});

export const userError = (error) => ({
  type: userTypes.USER_FAIL,
  payload: error,
});

export const createUserStarting = () => ({
  type: userTypes.CREATE_USER_START,
});

export const createUserSuccess = (data) => ({
  type: userTypes.CREATE_USER_SUCCESS,
  payload: data,
});

export const createUserError = (error) => ({
  type: userTypes.CREATE_USER_FAIL,
  payload: error,
});

export const updateUserStarting = () => ({
  type: userTypes.UPDATE_USER_START,
});

export const updateUserSuccess = (data) => ({
  type: userTypes.UPDATE_USER_SUCCESS,
  payload: data,
});

export const updateUserError = (error) => ({
  type: userTypes.UPDATE_USER_FAIL,
  payload: error,
});
