import TaskFormArray from './components/TaskForm/TaskFormByArray'
import TaskFormClass from './components/TaskForm/TaskFormByClass'

import './App.css'

enum eTypeTaskForm
{
  FormArray = 1,
  FormClass = 2,
}

export default function App() 
{
  
  let view = eTypeTaskForm.FormClass

  switch (view as eTypeTaskForm)
  {
     case eTypeTaskForm.FormArray:      
       return <TaskFormArray/>

    case eTypeTaskForm.FormClass:      
       return <TaskFormClass/>

  }  

}

//export default App;
