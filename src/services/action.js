import { ActionTypes } from './types';

export const registerActions = (payload) => ({
  type: ActionTypes.REGISTER_USER,
  payload,
});
export const registerActionsSuccess = (payload) => ({
  type: ActionTypes.REGISTER_USER_SUCCESS,
  payload,
});
export const registerActionsError = (payload) => ({
  type: ActionTypes.REGISTER_USER_ERROR,
  payload,
});
export const loginActions = (payload) => ({
  type: ActionTypes.LOGIN_USER,
  payload,
});
export const loginActionsSuccess = (payload) => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
  payload,
});
export const loginActionsError = (payload) => ({
  type: ActionTypes.LOGIN_USER_ERROR,
  payload,
});
export const fetchTaskAction = (payload) => ({
  type: ActionTypes.FETCH_TASK,
  payload,
});
export const fetchTaskActionSuccess = (payload) => ({
  type: ActionTypes.FETCH_TASK_SUCCESS,
  payload,
});
export const fetchTaskActionError = (payload) => ({
  type: ActionTypes.FETCH_TASK_ERROR,
  payload,
});
export const addTaskAction = (payload) => ({
  type: ActionTypes.ADD_TASK,
  payload,
});
export const addTaskActionSuccess = (payload) => ({
  type: ActionTypes.ADD_TASK_SUCCESS,
  payload,
});
export const addTaskActionError = (payload) => ({
  type: ActionTypes.ADD_TASK_ERROR,
  payload,
});
export const updateTaskAction = (payload) => ({
  type: ActionTypes.UPDATE_TASK,
  payload,
});
export const updateTaskActionSuccess = (payload) => ({
  type: ActionTypes.UPDATE_TASK_SUCCESS,
  payload,
});
export const updateTaskActionError = (payload) => ({
  type: ActionTypes.UPDATE_TASK_ERROR,
  payload,
});
export const deleteTaskAction = (payload) => ({
  type: ActionTypes.DELETE_TASK,
  payload,
});
export const deleteTaskActionSuccess = (payload) => ({
  type: ActionTypes.DELETE_TASK_SUCCESS,
  payload,
});
export const deleteTaskActionError = (payload) => ({
  type: ActionTypes.DELETE_TASK_ERROR,
  payload,
});

export const logoutAction = () => ({
  type: ActionTypes.LOG_OUT,
});
