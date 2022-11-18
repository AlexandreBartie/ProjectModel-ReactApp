import React, { Component } from 'react'

import { FaPlusCircle, FaEdit, FaRegWindowClose } from 'react-icons/fa'

import { Tasks } from '../../business/Task/Tasks'

import './TaskForm.css'

const list = 
[
    { key: "1", name: "Taksde a shower" },
    { key: "2", name: "Brush teeths" },
    { key: "3", name: "Buy Breads" },
    { key: "4", name: "Make a coffe" },
    { key: "5", name: "Enjoy a breakfast" },
]

export default class TaskFormClass extends Component
{
    
    state = 
    {
        newTask: "",
        listTasks: new Tasks().file.parse(list),
    }

    newTask = (e: any) =>
    {
        
        e.preventDefault()

        let { newTask, listTasks } = this.state
  
        if (listTasks.add(newTask))
            this.setState( { listTasks: listTasks } )
            
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
            <h1>Task List Class</h1>
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
                    listTasks.list.map((task) => 
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
