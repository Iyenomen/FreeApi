import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, getAllTasks } from '../actions/actionVars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const TodoForm = ({addTodo}) => {
const allTasks = useSelector(state => state.allTasks)
const { loading, body, success, data } = allTasks

 const{ todos } = body
 const bodyUser ={
      // id, 
      // val:'' 
    };


// useStates
  const [value, setValue] = useState('');
  const [itemIds, setItemIds] = useState(todos)

    // const hideAll = true;

    // use state add task
  const dispatch = useDispatch()

   const getUserId = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
   }

   const userId = getUserId(1, 101);

    const handleSubmit = (e) => {
        e.preventDefault();
        bodyUser.id = userId
        dispatch(addTask(bodyUser.userId))
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }

        // setTask(task.map() => {
        //    if(body) {}
        // })
      };

    const handleClick = () => {
      
        dispatch(getAllTasks(body))
        console.log('lists')    

    }

    const deleteHandler = (e, todosId) => {
       e.preventDefault();
      //  setItems(items.filter(item => item.id !== itemId));
        setItemIds(itemIds.filter(task => task.userId !==todosId ))
       dispatch(deleteTask(itemIds.userId));
       console.log('items cleared')
      

      //  if(hideAll) {
      //      const displayNone = document.querySelector('.todoDatas')
      //      displayNone.style.display = 'none';
      //  } 
    }

      
  return (
     <div>
          <form onSubmit={handleSubmit} className="TodoForm">
            <input type="text" value={value} 
            onChange={(e) => {
              setValue(e.target.value)
             
               }} 
            className="todo-input" 
            placeholder='What is the task today?' 
            />
            <button type="submit" className='todo-btn'>Add Task</button><br></br>
          </form>
         
          <p  onClick={handleClick} className='todo-btn1'> Show All Tasks</p>
          
          {
            (success) && (
              (<div className='todoDatas'>
                    {todos.map((todo, index) => (
                      <div>
                        <p key={index}>{`${todo.todo}`}</p> 
                        
                        <FontAwesomeIcon  
                          // onClick={() => dispatch(deleteTask(todo.userId))} 
                          onClick={deleteHandler}
                          className="delete-icon" 
                          icon={faTrash} 
                        />

                      </div>
                    ))}
                    {/* <button onClick={deleteHandler} className='del-btn'>DELETE</button> */}
                    
              </div>)
            )
          }

         
     </div>
  )
}
