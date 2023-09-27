import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './App.rootReducer'
import createSagaMiddleware from 'redux-saga'
import appSaga from './App.saga'

const sagaMiddleware = createSagaMiddleware()
const enhancers = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancers)
sagaMiddleware.run(appSaga)

export default store
