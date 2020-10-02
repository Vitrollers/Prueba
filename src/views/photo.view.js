import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../controllers/users.controllers";
import { getPhoto } from "../controllers/photos.controllers";
import { getAlbum } from "../controllers/album.controllers";
import "./photo.view.css";

import CircularProgress from '@material-ui/core/CircularProgress';

export default function Photo(){
    const { idPhoto } = useParams();

    const [photo,setPhoto] = useState([]);
    const [album,setAlbum] = useState([]);
    const [user,setUser] = useState([]);

    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPhoto(idPhoto).then((data)=>{
            setPhoto(data)
            setLoading(false);
        });
    },[idPhoto]);

    useEffect(()=>{
        if(!loading){
            getAlbum(photo.albumId).then((data)=>{
                setAlbum(data)
                getUser(data.userId).then((u)=>{
                    setUser(u);
                });
            });
        }
    },[loading,photo.albumId]);

    if(loading){
        return(
            <div className="photo-view">
                <CircularProgress/>
            </div>
        );
    }

    if(photo?.id){
        return(
            <div className="photo-full">
                <div className="photo-full-user">
                    <span> {String(user.name).toUpperCase()} </span>
                    <Link to={`/users/${user.id}`}>{user.username}</Link>
                </div>
                <div className="photo-full-card">
                    <div className="photo-full-card-title">
                        <span>
                            {String(album.title).toUpperCase()} / {photo.title.toUpperCase()}
                        </span>
                    </div>
                    <div className="photo-full-card-body">
                        <img src={photo.url} alt={photo.title}/>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="photo-full">
                <div className="photo-full-user">
                    <span>Photo Mot Found</span>
                    <Link></Link>
                </div>
                <div className="photo-full-card">
                    <div className="photo-full-card-title">
                        <span>
                        </span>
                    </div>
                    <div className="photo-full-card-body">
                        Error 404
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}