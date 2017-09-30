import { createStore, applyMiddleware, combineReducers } from 'redux';
import HomePageReducer from '../../features/HomePage/duck';
import AdminPageReducer from '../../features/AdminHomePage/duck';
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    routing : routerReducer,
    HomePageReducer: HomePageReducer,
    AdminPageReducer: AdminPageReducer
});

export default allReducers;