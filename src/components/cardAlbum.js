import React from "react";
import { useHistory } from "react-router-dom";
import "./cardAlbum.css";

export default function CardAlbum({id,data}){
    const history = useHistory();

    let seeAlbum = () => {
        history.push(`/users/${id}/albums/${data.id}`);
    }

    return(
        <div className="album-card">
            <div className="album-card-title">
                <span>{data.id}</span>
            </div>
            <div className="album-card-action">
                <button onClick={seeAlbum}>
                    SEE ALBUM
                </button>
            </div>
        </div>
    );
}