import React from "react";
import { useHistory } from "react-router-dom";
import "./cardPost.css";

export default function CardPost({data}){
    const history = useHistory();

    let seePost = () => {
        history.push(`/posts/${data.id}`);
    }

    return(
        <div className="post-card">
            <div className="post-card-title">
                <span>{data.title.toUpperCase()}</span>
            </div>
            <div className="post-card-body">
                <p>{data.body}</p>
            </div>
            <div className="post-card-action">
                <button onClick={seePost}>
                    SEE MORE
                </button>
            </div>
        </div>
    );
}