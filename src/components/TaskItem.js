import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import{toggleTask,deleteTask,updateTodos} from '../app/todoSlice'
import { Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheckDouble, faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'
import "./styles/taskItem.css"
const TaskItem = (props) => {
     const [newText, setNewText] = useState("");
     const { task } = props;
      const dispatch = useDispatch(); 

     return (
      <div className='Item'>
     <div>
                  
      </div>
     <label>
      <input 
      type="checkbox"
      checked={task.done}
      onChange={() => dispatch(toggleTask(task.id))} />
        
      <span style={{ marginLeft: '10px' }}><strong>{task.text}</strong></span>              
     
      <div className='form'>
        
      <Form>
      <Form.Control type="text" 
      placeholder="tape the button after writing !"   
      onChange={(event) => { setNewText(event.target.value);
      }}/>

      </Form> 
      <div style={{marginTop:"8px"}}>                   
      
      <button className='btn'
           onClick={() => {
            dispatch( updateTodos({ id: task.id, text: newText }));
           }}>
      <FontAwesomeIcon icon={faPenToSquare} />
      </button> 
                  
      <button className='btn' onClick={() => dispatch(deleteTask(task.id))} >  
      <FontAwesomeIcon icon={faTrash} />   
     </button> 
                                                     
      </div>                         
      </div>    
      </label>
      <span style={{marginLeft:'100px'}}>{ (task.done===true) ? <span style={{color:'green'}}><FontAwesomeIcon icon={faCheckDouble} size='2x' /></span>: <span style={{color:'red'}}> <FontAwesomeIcon icon={faCheckDouble} size='2x' /></span>} </span>
      <div>
                   
      </div>
      </div>
  )
}

export default TaskItem