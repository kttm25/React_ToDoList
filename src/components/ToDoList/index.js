import React from "react";

const ToDoList = ()=>{
    return (
        <React.Fragment>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Ranger la vaisselle 
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Répondre appel d'offres
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Signer contrat
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Ranger la salon
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default ToDoList;