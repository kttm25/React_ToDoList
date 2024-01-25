import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import uniqueId from "uniqueid"

import ToDoList from '../ToDoList';
import NavBar from "../NavBar";
import AddTask from "../AddTask";
import initialData from "../../data/initialData";

class App extends React.Component{

    state = {
        tasks: initialData
    }

    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId);
        taskToUpdate.completed = !taskToUpdate.completed;
        this.setState((prevState) => (
            prevState.tasks.map(task => {
                return task.id === taskId ? taskToUpdate : task;
            })
        ))
    }

    onAddTask= (newTaskName) => {
        let newTask = {
            id: uniqueId(),
            name: newTaskName,
            completed: false
        }

        this.setState((prevState) => ({
            tasks:[...prevState.tasks, newTask]
        }))
    }

    onDeleteCompleted = () => {
        this.setState(prevState=>{
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        }) 
    }

    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                    <Routes>
                        <Route path='/add-task' element={<AddTask {...this.props} onAddTask={this.onAddTask} />}/>
                        <Route path="/:filter?" element={<ToDoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/>
                    </Routes>
                    <NavBar onDeleteCompleted={ this.onDeleteCompleted }/>
                </BrowserRouter>
            </section>
        )
    }
}

export default App;