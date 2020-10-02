import React from "react";
import "./cardTask.css";

export default function CardTask({data}){
    return(
        <div className="card-task">
            <div className="card-task-title">
                <i className="fas fa-tasks"></i>
                <span>
                    {data.title.toUpperCase()}
                </span>
            </div>
            <div className="card-task-action">
                {
                    (data.completed) ?
                        <span>
                            <i className="fas fa-check-circle"></i>
                        </span>
                    :
                        <span>
                            <i className="fas fa-circle"></i>
                        </span>
                }
            </div>
        </div>
    );
}