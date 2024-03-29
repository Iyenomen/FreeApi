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

// ALL TASKS
export const allTaskReducer = (state = { body: [] }, action) => {
    switch (action.type) {
        case GET_ALL_TASKS:
           return { loading: true, body: [] }
        case GET_ALL_TASKS_SUCCESS:
            return { loading: false, success: true, body:action.payload }
        case GET_ALL_TASKS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

// SINGLE TASK
export const singleTaskReducer = (state = {}, action) => {
     switch (action.type) {
        case GET_SINGLE_TASK:
            return { loading: true }
        case GET_SINGLE_TASK_SUCCESS:
            return { loading: false, success: action.payload }
        case GET_SINGLE_TASK_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
     }
}

// CREATE A TASK
export const addTaskReducer = (state = { body: [] }, action) => {
    switch (action.type) {
        case ADD_A_TASK:
            return { loading: true, body: [] }
        case ADD_A_TASK_SUCCESS:
            return { loading: false, success: true, body: action.payload }
        case ADD_A_TASK_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
     }
}

// UPDATE A TASK
export const updateTaskReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_A_TASK:
            return { loading: true }
        case UPDATE_A_TASK_SUCCESS:
            return { loading: false, success: true, body: action.payload }
        case UPDATE_A_TASK_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
     }
}

// DELETE A TASK
export const deleteTaskReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_A_TASK:
            return { loading: true }
        case DELETE_A_TASK_SUCCESS:
            return {  loading: false, success:true, data: action.payload }
        case  DELETE_A_TASK_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
