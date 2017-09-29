import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import persistState from 'redux-localstorage';
import { loadstate,saveState } from './localStorage';
import client from './api.js';

const persistedState = loadstate();

const middleware = applyMiddleware(thunk.withExtraArgument({client}));
//const middleware = applyMiddleware(thunk);

const store = createStore(
    allReducers,        //All Reducers
    persistedState,
    
    compose( 
        middleware,
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(()=> {
    saveState(store.getState());
})

export default store;