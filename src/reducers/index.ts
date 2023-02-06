import {combineReducers, Reducer} from 'redux';

import newReducer from './newReducer';

export const reducers:Reducer<any>=combineReducers({newReducer})