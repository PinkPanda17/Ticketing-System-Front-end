// import axios from 'axios';

// const USER_SELECTED = 'USER_SELECTED';
// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const SAVE_TODO = 'SAVE_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';
// const GET_USERS = 'GET_USERS';

// export default function(state=null, action){

//     switch(action.type) {

//         case USER_SELECTED:
//             return action.payload;
//             break;

//         case GET_USERS:
//             return action.payload
//             break;

//         case ADD_TODO:
//             return action.payload
//             break;

//         case SAVE_TODO:
//             return action.payload
//             break;

//         case DELETE_TODO:
//             return action.payload
//             break;
        
//         case TOGGLE_TODO:
//             return action.payload
//             break;

//         case ADD_TODO:
//             return state = {
//                 ...state,
//                 todos: [...state.todos, {
//                     id: getId(state),
//                     isCompleted: false,
//                     task: action.payload
//                 }]
//             };
//             break;

//         // case DELETE_TODO:
//         //     return Object.assign({}, state, {
//         //         todos: state.todos.filter((todo) => {
//         //             return todo.id !== action.payload
//         //         })
//         //     })

//         // case SAVE_TODO:
//         //     return { 
//         //         ...state, 
//         //         todos: state.todos.map(
//         //             (todo) => todo.id === action.id ? {...todo, task: action.task, isCompleted: false} : todo
//         //         )
//         //     }
            
//         // case TOGGLE_TODO:
//         //     return Object.assign({}, state, {
//         //         todos: state.todos.map((todo) => {
//         //             return todo.id === action.payload ?
//         //             Object.assign({}, todo, {isCompleted: !todo.isCompleted}) : todo
//         //         })
//         //     })

//         default:
//         return state
//     }
// }

// export function selectUSer(user) {
//     return {
//         type: USER_SELECTED, 
//         payload: user
//     };
// }

// export function gotMyUser(userFrombackend) {
//     return {
//         type: GET_USERS, 
//         payload: userFrombackend
//     };
// }
// getMyUser() {
//     return (dispatch => {
//         axios.get('http://localhost:54322/api/users/getusers')
//         .then(response => {
//             dispatch(gotMyUser(response.data));
//         }).catch(e =>{
//         })
//     })
// }

// export function getMyUserId(id) {
//     return (dispatch => {
//         axios.get('http://localhost:54322/api/users/getuserid/'+id)
//         .then(response => {
//             dispatch(selectUSer(response.data));
//         }).catch(e =>{
//             console.log(e);
//         })
//     })
// }

// // function getId(state) {
// //     return state.todos.reduce((maxId, todo) => {
// //         return Math.max(todo.id, maxId)
// //     }, -1) + 1
// // }