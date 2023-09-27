import { all, put, takeLatest, call } from 'redux-saga/effects';

import {
  addTaskActionError,
  addTaskActionSuccess,
  deleteTaskActionError,
  deleteTaskActionSuccess,
  fetchTaskActionError,
  fetchTaskActionSuccess,
  loginActionsError,
  loginActionsSuccess,
  registerActionsError,
  registerActionsSuccess,
  updateTaskActionError,
  updateTaskActionSuccess,
} from './action';
import { ActionTypes } from './types';
import { supabase } from '../../supabase/supabase';

function* userLogin({ payload }) {
  const response = yield call(handleUserLogin, payload);
  const { status, data, error } = response;
  try {
    if (status === 200 && data?.length > 0) {
      yield put(loginActionsSuccess(...data));
    } else {
      yield put(loginActionsError(data));
    }
  } catch (error) {
    yield put(loginActionsError(data));
  }
}

function* userRegister({ payload }) {
  const response = yield call(handleUserRegister, payload);
  try {
    if (response.status === 201) {
      yield put(registerActionsSuccess());
    } else {
      yield put(registerActionsError());
    }
  } catch (error) {
    yield put(registerActionsError());
  }
}

function* fetchTask({ payload }) {
  const { status, data, error } = yield call(handleTaskFetch, payload);
  try {
    if (status === 200 && data?.length > 0) {
      yield put(fetchTaskActionSuccess(data));
    } else {
      yield put(fetchTaskActionError());
    }
  } catch (error) {
    yield put(fetchTaskActionError());
  }
}

function* addTask({ payload }) {
  const { status } = yield call(handleAddTask, payload);

  console.log("status: ", status)
  try {
    if (status === 201) {
      yield put(addTaskActionSuccess());
    } else {
      yield put(addTaskActionError());
    }
  } catch (error) {
    yield put(addTaskActionError());
  }
}

function* deleteTask({ payload }) {
  const { status } = yield call(handleDeleteTask, payload);
  try {
    if (status === 204) {
      yield put(deleteTaskActionSuccess());
    } else {
      yield put(deleteTaskActionError());
    }
  } catch (error) {
    yield put(deleteTaskActionError());
  }
}

function* updateTask({ payload }) {
  const { status, data, error } = yield call(handelUpdateTask, payload);
  try {
    if (status === 204) {
      yield put(updateTaskActionSuccess());
    } else {
      yield put(updateTaskActionError());
    }
  } catch (error) {
    yield put(updateTaskActionError());
  }
}

async function handleUserLogin({ username, password }) {
  console.log('asdasdasd : ', { username, password });
  const { data, error, status } = await supabase
    .from('starterDB')
    .select('id,username,password')
    .eq('username', username)
    .eq('password', password);
  return { data, error, status };
}

async function handleUserRegister({ name, username, password }) {
  const { data, error, status } = await supabase
    .from('starterDB')
    .insert({ name, username, password });
  return { data, error, status };
}
async function handleTaskFetch(username) {
  const { data, status, error } = await supabase
    .from('todos')
    .select('id,username,task,is_complete')
    .eq('username', username);
  return { data, error, status };
}

async function handleAddTask({ task, username }) {
  const { data, status, error } = await supabase
    .from('todos')
    .insert({ task, username, is_complete: false });
  return { data, error, status };
}
async function handleDeleteTask(id) {
  const { data, status, error } = await supabase.from('todos').delete().eq('id', id);
  return { data, error, status };
}
async function handelUpdateTask({ task, id }) {
  const { data, status, error } = await supabase.from('todos').update({ task }).eq('id', id);
  return { data, error, status };
}

export default all([
  takeLatest(ActionTypes.LOGIN_USER, userLogin),
  takeLatest(ActionTypes.REGISTER_USER, userRegister),
  takeLatest(ActionTypes.FETCH_TASK, fetchTask),
  takeLatest(ActionTypes.ADD_TASK, addTask),
  takeLatest(ActionTypes.DELETE_TASK, deleteTask),
  takeLatest(ActionTypes.UPDATE_TASK, updateTask),
]);
