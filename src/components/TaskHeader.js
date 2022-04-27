import { useSelector } from "react-redux"
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TaskHeader = () => {
  const tasks = useSelector((state) => state.todo);

    const doneTask = tasks.filter((el) => el.done !== false);
    const undoneTask = tasks.filter((el) => el.done === false);
    
  return (
    <header style={{ display: 'flex', justifyContent: 'space-around' ,background:'#94bbe9'}}>
      <div>
      <h1>React Todo List</h1>
      </div>
      {/*counter for unfinished tasks */}
      <div style={{display:'flex' ,marginTop:'20px'}}>
      <strong> Tasks to DO: </strong> <p style={{ color: 'red', marginLeft: '10px' }}>
      {undoneTask.length} <FontAwesomeIcon icon={faBell} size="lg" /></p>
              
       
       </div>
       {/*counter for finished tasks */}
      <div style={{display:'flex',marginTop:'20px'}}>
       <strong> Finished Tasks:</strong> <p style={{ color: 'green', marginLeft: '10px' }}>
       {doneTask.length} <FontAwesomeIcon icon={faBell} size="lg" /></p> 
        
       </div>
      
    </header>
  )
}

export default TaskHeader;