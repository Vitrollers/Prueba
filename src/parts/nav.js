import React from "react";

export default function Nav({children}){
    return(
        <div className="part-nav">
            {
                children
            }
        </div>
    );
}