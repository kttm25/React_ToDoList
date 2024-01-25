import React from "react";
import ToDo from "../ToDo"
import { useParams } from 'react-router-dom'

const ToDoList = ({tasks, onToggleCompleted})=>{
    let filteredTasks
    switch (useParams().filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
            break;
        default:
            filteredTasks = tasks
            break;
    }

    if(!filteredTasks.length){
        return (
            <React.Fragment>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tache à afficher</li>
                </ul>
            </React.Fragment>
        )
    }else{
        return (
            <React.Fragment>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filteredTasks.map((task) => (
                            <ToDo 
                                key = {task.id}
                                task={task}
                                onToggleCompleted={onToggleCompleted}
                            />
                        ))
                    }
                </ul>
            </React.Fragment>
        )
    }

    
}

export default ToDoList;