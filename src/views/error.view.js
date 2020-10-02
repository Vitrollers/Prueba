import React from "react";
import "./error.view.css";

export default function Error(){
    return(
        <div className="error-view">
            <span className="error-code">Error 404</span>
            <main className="error-line"></main>
            <span className="error-message">Page not found</span>
        </div>
    );
}