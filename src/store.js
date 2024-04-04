import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from  '@redux-devtools/extension';
import { 
    addTaskReducer,
    allTaskReducer, 
    deleteTaskReducer, 
    singleTaskReducer, 
    updateTaskReducer
} from './reducers/reducerVars'

const reducer = combineReducers({
    allTasks: allTaskReducer,
    singleTask: singleTaskReducer,
    createTask: addTaskReducer,
    updateTask: updateTaskReducer,
    deleteTask: deleteTaskReducer 
})


const middleWare = [thunk]

const store = createStore(reducer,  composeWithDevTools(applyMiddleware(...middleWare)))
export default store