/* eslint-disable no-case-declarations */
import { ActionTypes } from './types';

const initialState = {
  user: [],
  task: [],
  isLogin: false,
  isRegistered: false,
  isRegisteredError: false,
  isTaskFetching: false,
  isTaskAdded: false,
  isTaskUpdated: false,
  isTaskDeleted: false,
  isTaskFetchingError: false,
  isTaskAddedError: false,
  isTaskUpdatedError: false,
  isTaskDeletedError: false,
};
export default (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        isLogin: false,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      const { id, username } = payload;
      return {
        ...state,
        isLogin: true,
        user: {
          id,
          username,
        },
      };
    case ActionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        isLogin: false,
        user: [],
      };
    case ActionTypes.REGISTER_USER:
      return {
        ...state,
        isRegistered: false,
        isRegisteredError: false,
      };
    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLogin: false,
        user: [],
        isRegistered: true,
      };
    case ActionTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        isLogin: false,
        user: [],
        isRegisteredError: true,
      };
    case ActionTypes.FETCH_TASK:
      return {
        ...state,
        isTaskFetching: true,
      };
    case ActionTypes.FETCH_TASK_SUCCESS:
      return {
        ...state,
        isTaskFetching: false,
        task: payload,
        isTaskAdded: false,
        isTaskUpdated: false,
        isTaskDeleted: false,
      };
    case ActionTypes.FETCH_TASK_ERROR:
      return {
        ...state,
        isTaskFetchingError: true,
        isTaskFetching: false,
        task: [],
      };
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        isTaskAdded: false,
        isTaskAddedError: false,
        isTaskUpdated: false,
        isTaskDeleted: false,
      };
    case ActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        isTaskAdded: true,
        isTaskFetching: false,
        isTaskUpdated: false,
        isTaskDeleted: false,
      };
    case ActionTypes.ADD_TASK_ERROR:
      return {
        ...state,
        isTaskAdded: false,
        isTaskAddedError: true,
      };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        isTaskDeleted: false,
        isTaskDeletedError: false,
        isTaskAdded: false,
        isTaskUpdated: false,
      };
    case ActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        isTaskDeleted: true,
        isTaskAdded: false,
        isTaskFetching: false,
        isTaskUpdated: false,
      };
    case ActionTypes.DELETE_TASK_ERROR:
      return {
        ...state,

        isTaskDeleted: false,
        isTaskDeletedError: true,
      };

    case ActionTypes.UPDATE_TASK:
      return {
        ...state,
        isTaskUpdated: false,
        isTaskAdded: false,
        isTaskDeleted: false,
        isTaskUpdatedError: false,
      };
    case ActionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        isTaskUpdated: true,
        isTaskDeleted: false,
        isTaskAdded: false,
        isTaskFetching: false,
      };
    case ActionTypes.UPDATE_TASK_ERROR:
      return {
        ...state,
        isTaskUpdated: false,
        isTaskUpdatedError: true,
      };
    case ActionTypes.LOG_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
