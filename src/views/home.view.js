import React, { useEffect, useState } from "react";
import { getPosts } from "../controllers/posts.controllers";
import CircularProgress from '@material-ui/core/CircularProgress';

import CardPost from "../components/cardPost";

export default function Home(){
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPosts().then((data)=>{
            setPosts(data);
            setLoading(false)
        });
    },[loading]);

    if(loading){
        return(
            <div className="home-view">
                <CircularProgress/>
            </div>
        );
    }

    return(
        <div className="home-view">
            {
                posts.map( (e) => <CardPost data={e} key={e.id}/> )
            }
        </div>
    );
}