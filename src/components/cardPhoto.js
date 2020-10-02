import React from "react";
import { Link } from "react-router-dom";
import "./cardPhoto.css";

export default function CardPhoto({data}){
    return(
        <div className="photo-card">
            <div className="photo-card-action">
                <Link to={`/photos/${data.id}`}>
                    <img src={data.thumbnailUrl} alt={data.title} loading="lazy"/>
                </Link>
            </div>
        </div>
    );
}