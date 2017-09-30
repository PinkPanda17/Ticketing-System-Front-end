import axios from 'axios';
import ticketData from './ticketData';
const GET_ALL_TICKETS = 'GET_ALL_TICKETS';
const ADD_TICKET = 'ADD_TICKET';
const EDIT_TICKET = 'EDIT_TICKET';

export const loginUser = (credential) => {
    localStorage.setItem('User',true);
    return {type: 'CHECK_USER_CREDENTIAL',payload:credential.username};
}

export const getTickets = () => {
    return {type: 'GET_ALL_TICKETS' , payload: ticketData()}
}

export const onSubmitTicket = (ticket) => {
    return {type: 'ADD_TICKET', payload: ticket}
}

export const onEditTicket = (ticket) => {
    return {type: 'EDIT_TICKET',payload: ticket}
}

export default function(state={
    roleCheck: null
        }, action){ 

    switch(action.type){
        case GET_ALL_TICKETS:
            return state = {
                ...state,
                ticketList: action.payload
            }
        
        case ADD_TICKET:
            return state = {
                ...state,
                ticketList: [
                    ...state.ticketList,{
                        ...action.payload
                    }
                ]
                
            }

        case EDIT_TICKET:
        console.log(action.payload);
            return state = {
                ...state,
                ticketList: state.ticketList.map(
                    (ticket)=>ticket.ticketsid===action.payload.ticketsid ?
                       { ticket: action.payload}
                    : 
                    ticket
                )
            }
            //         //         todos: state.todos.map(
//         //             (todo) => todo.id === action.id ? {...todo, task: action.task, isCompleted: false} : todo
//         //         )
           
    }
    return state;
}