import { createStore, applyMiddleware, combineReducers } from 'redux';
//import UserReducer from './reducer-users';
import ActiveUser from '../../features/userHome/duck';
//import CrudButtons from '../../features/userDetails/duck';
import { routerReducer } from 'react-router-redux'

const allReducers = combineReducers({
    users: ActiveUser,
    activeUser: ActiveUser,
    routing : routerReducer
});

export default allReducers;