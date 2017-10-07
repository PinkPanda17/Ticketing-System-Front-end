import axios from 'axios';
import ticketData from './ticketData';
const GET_ALL_TICKETS = 'GET_ALL_TICKETS';
const ADD_TICKET = 'ADD_TICKET';
const EDIT_TICKET = 'EDIT_TICKET';
const FILTER_TICKETS = 'FILTER_TICKETS';

export const loginUser = (credential) => {
    localStorage.setItem('User',true);
    return {type: 'CHECK_USER_CREDENTIAL',payload:credential.username};
}

// getTickets() {
//     return (dispatch => {
//         axios.get('http://localhost:54322/api/users/getusers')
//         .then(response => {
//             dispatch(gotMyUser(response.data));
//         }).catch(e =>{
//         })
//     });
// }

export const getTickets = () => {
    return {type: 'GET_ALL_TICKETS' , payload: ticketData()}
}

export const filterTickets = (value,ticketList) => {
    console.log(value)
    return {type: 'FILTER_TICKETS', payload:{
        tickets:ticketData(),
        filter: value,
    }}
}

export const onSubmitTicket = (ticket) => {
    return {type: 'ADD_TICKET', payload: ticket}
}

export const onEditTicket = (ticket) => {
    console.log(ticket)
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
        const tickets = []
        state.ticketList.map((ticket)=>{
            if(ticket.ticketsid == action.payload.ticketsid)
                {   
                    ticket= action.payload
                    tickets.push(ticket)
                }
            else
            tickets.push(ticket)
        })
            return state = {
                ...state,
               ticketList: tickets
            }

         case FILTER_TICKETS:
            {
                const FilteredTickets=[];
                if(action.payload.filter)
                {
                    action.payload.tickets.map((ticket)=>{
                        if(ticket.status=="Unassigned")
                            FilteredTickets.push(ticket)
                    })
                
                return state = {
                    ...state,
                    ticketList: FilteredTickets
                }
            }
            else
                return state = {
                    ...state,
                    ticketList: action.payload.tickets
                }
        }
            //         //         todos: state.todos.map(
//         //             (todo) => todo.id === action.id ? {...todo, task: action.task, isCompleted: false} : todo
//         //         )
           
    }
    return state;
}