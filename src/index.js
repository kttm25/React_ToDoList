import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App';
import './css/toDo.css'

const root = ReactDom.createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

