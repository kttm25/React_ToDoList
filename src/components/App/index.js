import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import ToDoList from '../ToDoList';
import NavBar from "../NavBar";
import AddTask from "../AddTask";

class App extends React.Component{
    render(){
        return(
            <section id="todo">
                <BrowserRouter>
                    <Routes>
                        <Route path='/add-task' Component={AddTask}/>
                        <Route path="/:filter?" Component={ToDoList}/>
                    </Routes>
                    <NavBar/>
                </BrowserRouter>
            </section>
        )
    }
}

export default App;