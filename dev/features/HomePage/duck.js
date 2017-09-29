import axios from 'axios';

const A = 'A';
const B ='B';
const IS_USER_LOGGED_IN = 'IS_USER_LOGGED_IN';
const CHECK_USER_CREDENTIAL = 'CHECK_USER_CREDENTIAL';

export const loginUser = (credential) => {
    localStorage.setItem('User',true);
    return {type: 'CHECK_USER_CREDENTIAL',payload:true};
}

export const onLoad = () =>{
    const getUser = localStorage.getItem('User');
    return {type:'IS_USER_LOGGED_IN', payload: getUser}
}

export const clearLocalStorage = () =>
{
    localStorage.removeItem('Role');
    return{type:'B'}
}

export const onSetRole = (role) => {
    localStorage.setItem('Role',role)
    return{type:'B',payload: role}
}

export const logoutUser = () => {
    localStorage.removeItem('User')
    return{type:CHECK_USER_CREDENTIAL,payload:null}
}

export default function(state={
    roleCheck: null
        }, action){ 

    switch(action.type){
        case CHECK_USER_CREDENTIAL: 
            return state = {
                ...state,
                validated: action.payload
            }
        ;
        case IS_USER_LOGGED_IN: 
            return state = {
                ...state,
                validated: action.payload
            }
    }
    return state;
}