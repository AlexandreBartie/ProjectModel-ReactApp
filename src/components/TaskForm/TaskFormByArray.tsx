import React, { Component } from 'react'

import { FaPlusCircle, FaEdit, FaRegWindowClose } from 'react-icons/fa'

import './TaskForm.css'

export default class TaskFormArray extends Component
{
    
    state = 
    {
        newTask: "",
        listTasks: 
        [
            { key: "1", name: "Take a shower" },
            { key: "2", name: "Brush teeths" },
            { key: "3", name: "Buy Breads" },
            { key: "4", name: "Make a coffe" },
            { key: "5", name: "Enjoy a breakfast" },
        ]
    }

    newTask = (e: any) =>
    {
        
        e.preventDefault()

        let { newTask, listTasks } = this.state

        newTask = newTask.trim()

        const xTasks = [...listTasks]

        let key = (xTasks.length + 1).toString()

        xTasks.push( { key, name: newTask} )

        this.setState( { listTasks: [...xTasks] ,  } )
    }

    nameTaskChanged = (e: any) =>
    {
        this.setState({ newTask : e.target.value})
    }

    
    render()
    {
        
        const { newTask, listTasks } = this.state
        
        return ( 
        <div className='TaskForm-Title'>
            <h1>Task List Array</h1>
            <form 
                onSubmit={this.newTask} 
                action="#"
                className='TaskForm-Input'>
                <input 
                    onChange={this.nameTaskChanged} 
                    type="text"
                    value={newTask} />
                <button type="submit">
                    <FaPlusCircle />
                </button>
            </form>
            <ul className='TaskForm-List'>
                {
                    listTasks.map((task) => 
                    (
                        <li key={task.key}>
                            {task.name}
                            <span>
                                <FaEdit className='actionEdit'/>
                                <FaRegWindowClose className='actionDelete'/>
                            </span>
                        </li>
                    )
                )}
            </ul>
        </div>

        )
    }
}
