import {
  legacy_createStore as createStore,
  applyMiddleware,
  Store,
  Action,
} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import {reducers} from '../reducers'

const composeEnhacers= composeWithDevTools({});

const store:Store<any,Action>=createStore(reducers,composeEnhacers(applyMiddleware(thunk)));

export default store
