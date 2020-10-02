import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./buttonLink.css"

export default function ButtonLink({ rute, active, label, icon }){
    let match = useRouteMatch({
        path: rute,
        exact: active
    });

    return(
        <div className={`button-link ${match ? "button-link-active" : ""}`}>
            <Link to={rute}>
                {
                    (!!icon) ?
                    <i className={`fas fa-${icon}`}></i>
                    :
                    ""
                }
                {
                    label
                }
            </Link>
        </div>
    );
}