import { createStore, combineReducers } from "redux";
import { userReducer } from './user/reducer';
// TODO для работы c ReduxDevtools
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    user: userReducer
});

export type AppState = ReturnType<typeof reducers>;// TODO прочитать про ReturnType

export const store = createStore( reducers, composeWithDevTools());