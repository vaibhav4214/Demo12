import { combineReducers } from 'redux';
import { oneReducer } from './Reducer/onereducer';
import { twoReducer } from './Reducer/tworeducer';

export const rootReducer=combineReducers({
    oneReducer,
    twoReducer

})
