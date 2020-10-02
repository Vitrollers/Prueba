import React from "react";
import "./comment.css";

export default function Commnent({data}){
    return(
        <div className="comment">
            <div className="comment-title">
                <a href="#">{data.email}</a>
            </div>
            <div className="comment-body">
                <p>{data.body}</p>
            </div>
        </div>
    );
}