import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { recruitingTeamsReducer } from './reducers/teamReducer'

const initialState = { recruitList: {} };
const reducer = combineReducers({
    recruitList: recruitingTeamsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;