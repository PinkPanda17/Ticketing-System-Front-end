import axios from 'axios';

const LOGOUT_USER = 'LOGOUT_USER';
const IS_USER_LOGGED_IN = 'IS_USER_LOGGED_IN';
const CHECK_USER_CREDENTIAL = 'CHECK_USER_CREDENTIAL';

export const loginUser = (credential) => {
    localStorage.setItem('User',true);
    return {type: 'CHECK_USER_CREDENTIAL',payload:credential.username};
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

export const logoutUser = () => {
    localStorage.removeItem('User')
    return{type:LOGOUT_USER,payload:null}
}

export default function(state={
    roleCheck: null
        }, action){ 

    switch(action.type){
        case CHECK_USER_CREDENTIAL: 
            return state = {
                ...state,
                role: action.payload,
                validated: true
            }
        ;
        case IS_USER_LOGGED_IN: 
            return state = {
                ...state,
                validated: action.payload
            }

        case LOGOUT_USER:
            return state = {
                ...state,
                validated: false,
                role: null,
            }

    }
    return state;
}