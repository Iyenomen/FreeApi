import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, getAllTasks } from '../actions/actionVars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const TodoForm = ({addTodo}) => {
const allTasks = useSelector(state => state.allTasks)
const { loading, body, success, data } = allTasks

 const{ todos } = body

 let singleArr; 

let tweakedArr = todos;

// useStates
  const [value, setValue] = useState('');
  const [itemIds, setItemIds] = useState(todos)

    // use state add task
  const dispatch = useDispatch()

  //id creation and generation
   const getUserId = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
   }

   const userId = getUserId(1, 31);

  //  ADD TASK
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addTask(userId))
        console.log(userId)
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }

        
      };

// GET ALL
    const handleClick = () => {
      
        dispatch(getAllTasks(body))
        console.log('lists')   

    }
    

    // DELETE
    const deletingHandler = () =>{   
      dispatch(deleteTask(tweakedArr))
      
      const [x] = tweakedArr;

      tweakedArr = todos.map((el,i) => {
          return todos.filter((element,i) => el.id !== element.id)
      })
       
      // console.log(tweakedArr)
        singleArr = x

        console.log('deleted')
        console.log(x)
 
    }

   
      
  return (
     <div>
      {}
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
                
                    {
                    tweakedArr.map((todo, index) => (
                      
                      <div>
                        <p key={index}>{`${todo.todo}`}</p> 
                        {/* {console.log(todo.id)} */}
                        
                        <FontAwesomeIcon  
                          // onClick={(todo) =>{deleteTask(todo.id)}}
                          onClick={deletingHandler}
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
