import { createStore, applyMiddleware, combineReducers } from 'redux';
import HomePageReducer from '../../features/HomePage/duck';
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    routing : routerReducer,
    HomePageReducer: HomePageReducer
});

export default allReducers;