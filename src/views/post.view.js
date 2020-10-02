import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../controllers/posts.controllers";
import { getComments } from "../controllers/comments,controllers";
import { getUser } from "../controllers/users.controllers";
import "./post.view.css";

import CircularProgress from '@material-ui/core/CircularProgress';
import Commnent from "../components/comment";

export default function Post(){
    const { idPost } = useParams();

    const [post,setPost] = useState([]);
    const [comments,setComments] = useState([]);
    const [user,setUser] = useState([]);

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPost(idPost).then((data=>{
            setPost(data);
            setLoading(false);
        }));

        getComments(idPost).then((data)=>{
            setComments(data);
        });


    },[idPost]);

    useEffect(()=>{
        if(!loading){
            getUser(post.userId).then((data)=>{
                setUser(data);
            });
        }
    },[post.userId,loading])

    if(loading){
        return(
            <div className="home-view">
                <CircularProgress/>
            </div>
        );
    }

    if(post?.id){
        return(
            <div className="post-full">
                <div className="post-full-user">
                    <span> {String(user.name).toUpperCase()} </span>
                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                </div>
                <div className="post-full-card">
                    <div className="post-full-card-title">
                        <span>
                            {post.title.toUpperCase()}
                        </span>
                    </div>
                    <div className="post-full-card-body">
                        <p>
                            {post.body}
                        </p>
                    </div>
                </div>
                <div className="post-full-comments">
                    <span>COMMENTS - {comments.length}</span>
                    <i className="fas fa-comment-alt"></i>
                    {
                        comments.map((e) => <Commnent data={e} key={e.id}/>)
                    }
                </div>
            </div>
        )
    }else{
        return(
            <div className="post-full">
                <div className="post-full-user">
                    <span>Post not found</span>
                    <Link></Link>
                </div>
                <div className="post-full-card">
                    <div className="post-full-card-title">
                        <span>
                        </span>
                    </div>
                    <div className="post-full-card-body">
                        <p>
                            Error 404
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}