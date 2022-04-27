import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({

    name: "todo",
    initialState: [
        { id:uuidv4(), text: "Doing Homeworks", done: false},
        { id:uuidv4(), text: "i have to see some friends !", done: true },
        { id:uuidv4(), text: "Learning more of Redux", done: false},
       
    ],
    reducers: {
        /* add a new task function*/

        addTask: (state,action) => { 
            const newTask = {
                id: uuidv4(),
                done: false,
                text: action.payload,
                               
            }
            state.push(newTask);
        },

        /* change done state to !done*/
        toggleTask: (state, action) => {
            const task = state.find(el => el.id === action.payload);  
            task.done = !task.done;
            
           },
        
        /* delete task using filter by id */
        deleteTask: (state, action) => { 
            state = state.filter(el => el.id !== action.payload)
            
            return state;
        },

        /* Update the text state from the input value */
        updateTodos: (state, action) => {
             state.map((el) => {
                if (el.id === action.payload.id) {
                    el.text = action.payload.text;
                }
            })
        },
        
        

    }

})


export const { addTask, deleteTask, toggleTask,updateTodos} = todoSlice.actions;
export default todoSlice.reducer