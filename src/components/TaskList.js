import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import TaskItem from './TaskItem';
import "./styles/taskList.css";
const TaskList = () => {
    
  const tasks = useSelector((state) => state.todo);
  
  /* initial state all task are displayed */
  const [sort, setSort] = useState("all");
  
  return (
      <>
      <div className='sort-btn'>
          
      <Button size="lg" variant="danger" style={{ width: '140px' }}
            onClick={() => setSort("active")}>  Active
      </Button>

      <Button size="lg" variant="success" style={{width:'140px'}}
          onClick={() => setSort("finished")}> Completed
      </Button>

      <Button size="lg" style={{background:"#94bbe9",border:'transparent' ,width:'140px'}}
          onClick={() => setSort("all")} >
          All
      </Button>
      </div>
      < div className='list'>
          {/* display all tasks */}
          
        {tasks.length > 0 && sort === "all" ?
          tasks.map(el => (
            <TaskItem task={el} key={el.id} />)) : null}
          
        {/* display finished tasks */}

        {tasks.length > 0 && sort === "finished" ?
          tasks.filter(ele => ele.done === true).map(el => ( 
                
            <TaskItem task={el} key={el.id} />)) : null}
        
        {/* display  tasks to do */}

        {tasks.length > 0 && sort === "active" ?
          tasks.filter(ele => ele.done === false).map(el => ( 
                
          <TaskItem task={el} key={el.id} />)): null}
       
       </div>
    </>
  )
}

export default TaskList;