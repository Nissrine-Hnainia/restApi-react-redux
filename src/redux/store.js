import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import { usersReducer } from './reducers/usersReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(usersReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
