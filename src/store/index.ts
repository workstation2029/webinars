import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from './user/reducer';
// TODO для работы c ReduxDevtools
import { composeWithDevTools } from 'redux-devtools-extension';
import { newsReducer } from "./news/reducer";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers({
    user: userReducer,
    news: newsReducer
});

const loggerMiddleware = createLogger()

export type AppState = ReturnType<typeof reducers>;// TODO прочитать про ReturnType

export const store = createStore( reducers, composeWithDevTools(
    applyMiddleware(
        thunkMiddleware, // позволяет нам отправлять функции
        loggerMiddleware // аккуратно логируем действия
    )
));