import React from "react";
import { useHistory } from "react-router-dom";
import "./cardUser.css";

export default function CardUser({data}){
    const history = useHistory();

    let seeUser = () => {
        history.push(`/users/${data.id}`);
    }

    return(
        <div className="card-user">
            <div className="card-user-title">
                <i className="fas fa-user"></i>
                <span>
                    {data.username.toUpperCase()}
                </span>
            </div>
            <div className="card-user-action">
                <button onClick={seeUser}>
                    SEE USER
                </button>
            </div>
        </div>
    );
}