import axios from 'axios';
// import { id } from '../components/TodoForm'
import { 
    ADD_A_TASK,
    ADD_A_TASK_FAIL,
    ADD_A_TASK_SUCCESS,
    DELETE_A_TASK,
    DELETE_A_TASK_FAIL,
    DELETE_A_TASK_SUCCESS,
    GET_ALL_TASKS, 
    GET_ALL_TASKS_FAIL, 
    GET_ALL_TASKS_SUCCESS, 
    GET_SINGLE_TASK,
    GET_SINGLE_TASK_FAIL,
    GET_SINGLE_TASK_SUCCESS,
    UPDATE_A_TASK,
    UPDATE_A_TASK_FAIL,
    UPDATE_A_TASK_SUCCESS
} from '../constants/constantVars';


// GET ALL TASKS
export const getAllTasks= (body) => async (dispatch, getState) => {
    try {
       dispatch({
          type: GET_ALL_TASKS
       })

       const { data } = await axios.get(`https://dummyjson.com/todos`, body)

       dispatch({
          type: GET_ALL_TASKS_SUCCESS,
          payload: data
       })
    } catch(error) {
        dispatch({
            type: GET_ALL_TASKS_FAIL,
            payload: error
        })
    }
}


// GET A SINGLE TASK
export const getSingleTask = () => async (dispatch, getState) => {
    try{
       dispatch({
          type: GET_SINGLE_TASK
       })

       const { data } = await axios.get(`https://dummyjson.com/todos/1`)

       dispatch({
          type: GET_SINGLE_TASK_SUCCESS,
          payload: data
       })
    }  catch(error) {
       dispatch({
          type: GET_SINGLE_TASK_FAIL,
          payload: error
       })
    }
}

// CREATE A TASK
export const addTask = (bodyUser) => async (dispatch, getState) => {
    try {
        dispatch({
           type: ADD_A_TASK 
        })
        
        const config = {
            headers: {
              'Content-Type': 'application/json'
            },

          }

          const { data } = await axios.post(`https://dummyjson.com/todos/add`, bodyUser, config)

          dispatch({
             type: ADD_A_TASK_SUCCESS,
             payload: data
          })
    }  catch(error) {
       dispatch({
          type: ADD_A_TASK_FAIL,
          payload: error
       })
    }
}

// UPDATE A TASK
export const updateTask = (body) => async (dispatch, getState) => {
    try{
       dispatch({
          type: UPDATE_A_TASK
       })

       const config = {
        headers: {
          'Content-Type': 'application/json'
        },

      }

      const { data } = await axios.put(`https://dummyjson.com/todos/${body.id}`, body, config)

      dispatch({
         type: UPDATE_A_TASK_SUCCESS,
         payload: data
      })

    }  catch(error) {
        dispatch({
            type: UPDATE_A_TASK_FAIL,
            payload: error
        })
    }
}

// DELETE TASK
export const deleteTask = (todosId) => async (dispatch, getState) => {
   try {
    dispatch({
       type: DELETE_A_TASK

    })

    await axios.delete(`https://dummyjson.com/todos/${todosId}`)
    
  dispatch({
     type: DELETE_A_TASK_SUCCESS,
     payload: {}  

  })
} catch (error) {
  dispatch({
     type: DELETE_A_TASK_FAIL,
     payload: error
  })
}
}