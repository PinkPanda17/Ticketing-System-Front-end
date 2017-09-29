import axios from 'axios';

export const addTodo = (task) => {
  return {
    type: 'ADD_TODO',
    payload: task
  }
}

export const deleteTodo = (deleteTask) => {
  return {
    type: 'DELETE_TODO',
    payload : deleteTask
  }
}

export const saveTodo = (editedTask) => {
  return {
    type: 'SAVE_TODO',
    payload : editedTask
  }
}

export const toggleTodo = (toggledTodo) => {
  return {
    type: 'TOGGLE_TODO',
    payload: toggledTodo
  }
}

export function addNewTask(id, task) {
    return (dispatch => {
        axios.post('http://localhost:54322/api/users/AddTask',{
          User : {UserId : id},
          Task : task
        })
        .then(response => {
            dispatch(addTodo(response.data));
        }).catch(e =>{
            console.log(e);
        })
    })
}

export function editTheTask(id, task, userId, completed) {
    return (dispatch => {
        axios({method: 'put', 
        url: 'http://localhost:54322/api/users/EditTask',
        data: {
          Id : id,
          Task : task,
          User : {UserId : userId},
          Completed : completed
        }
      })
        .then(response => {
            dispatch(saveTodo(response.data));
        }).catch(e =>{
            console.log(e);
        })
    })
}

export function toggleTheTask(id, task, userId, completed) {
    return (dispatch => {
        axios({method: 'put', 
        url: 'http://localhost:54322/api/users/EditTask',
        data: {
          Id : id,
          Task : task,
          User : {UserId : userId},
          Completed : completed
        }
      })
        .then(response => {
            dispatch(toggleTodo(response.data));
        }).catch(e =>{
            console.log(e);
        })
    })
}

export function deleteTheTask(id, userId) {
    return (dispatch => {
        axios({method: 'delete', 
        url: 'http://localhost:54322/api/users/DeleteUserTask',
        data: {
          Id : id,
          User : {UserId : userId}
        }
      })
        .then(response => {
            dispatch(deleteTodo(response.data));
        }).catch(e =>{
            console.log(e);
        })
    })
}


