import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getUsers, getUser, getUserPosts, getUserAlbums, getUserTasks } from "../controllers/users.controllers";
import { getPhotos } from "../controllers/photos.controllers";
import { getAlbum } from "../controllers/album.controllers";
import CircularProgress from '@material-ui/core/CircularProgress';
import CardUser from "../components/cardUser";
import CardPost from "../components/cardPost";
import CardAlbum from "../components/cardAlbum";
import CardTask from "../components/cardTask";
import CardPhoto from "../components/cardPhoto";
import "./user.view.css";

export function Users(){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getUsers().then((data)=>{
            setUsers(data);
            setLoading(false)
        });
    },[loading]);

    if(loading){
        return(
            <div className="user-view">
                <CircularProgress/>
            </div>
        );
    }

    return(
        <div className="user-view">
            {
                users.map(e => <CardUser data={e} key={e.id}/>)
            }
        </div>
    );
}

function UserPerfilPosts(){
    const { idUser } = useParams();

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getUserPosts(idUser).then((data)=>{
            setPosts(data);
            setLoading(false);
        });
    },[idUser]);

    if(loading){
        return <CircularProgress/>
    }

    return(
        posts.map(e => <CardPost data={e} key={e.id}/>)
    )
}

function UserPerfilAlbum(){
    const { idUser } = useParams();

    const [albums,setAlbums] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getUserAlbums(idUser).then((data)=>{
            setAlbums(data);
            setLoading(false);
        });
    },[idUser]);

    if(loading){
        return <CircularProgress/>
    }

    return(
        <div className="user-perfil-a-m-album">
            {albums.map(e => <CardAlbum data={e} id={idUser} key={e.id}/>)}
        </div>
    )
}

function UserPerfilPhotos(){
    const { idAlbums } = useParams();

    const [photos,setPhotos] = useState([]);
    const [album,setAlbum] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPhotos(idAlbums).then((data)=>{
            setPhotos(data);
            setLoading(false);
        });

        getAlbum(idAlbums).then((data)=>{
            setAlbum(data);
        });
    },[idAlbums]);

    if(loading){
        return <CircularProgress/>
    }

    return(
        <div className="user-perfil-a-m-photos">
            <span>{String(album.title).toUpperCase()}</span>
            {photos.map(e => <CardPhoto data={e} key={e.id}/>)}
        </div>
    )
}

function UserPerfilTasks(){
    const { idUser } = useParams();

    const [tasks,setTasks] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getUserTasks(idUser).then((data)=>{
            setTasks(data);
            setLoading(false);
        });
    },[idUser]);

    if(loading){
        return <CircularProgress/>
    }

    return(
        tasks.map(e => <CardTask data={e} key={e.id}/>)
    )
}

export function UserPerfil(){
    const { idUser } = useParams();
    const location = useLocation();

    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getUser(idUser).then((data)=>{
            setUser(data);
            setLoading(false);
        });
    },[idUser]);

    if(loading){
        return(
            <div className="user-view">
                <CircularProgress/>
            </div>
        );
    }

    if(user?.id){
        let post = location.pathname.lastIndexOf(`/users/${user.id}/posts`);
        let albums = location.pathname.lastIndexOf(`/users/${user.id}/albums`);
        let tasks = location.pathname.lastIndexOf(`/users/${user.id}/tasks`);
        let photos = location.pathname.lastIndexOf(`/users/${user.id}/albums/`);

        return(
            <div className="user-perfil">
                <div className="user-perfil-head">
                    <main className="user-perfil-h-photo">
                        <i className="fas fa-user"></i>
                    </main>
                    <main className="user-perfil-h-names">
                        <span>
                            {user.name.toUpperCase()}
                        </span>
                        <Link to={`/users/${user.id}`}>
                            {user.username}
                        </Link>
                    </main>
                </div>
                <div className="user-perfil-body">
                    <span>INFORMACION</span>
                    <main className="user-perfil-b-email">
                        <span>
                            <i className="fas fa-at"></i>
                            {user.email}
                        </span>
                    </main>
                    <main className="user-perfil-b-phone">
                        <i className="fas fa-phone"></i>
                        <span>
                            {user.phone}
                        </span>
                    </main>
                    <main className="user-perfil-b-website">
                        <i className="fas fa-globe"></i>
                        <span>
                            {user.website}
                        </span>
                    </main>
                    <main className="user-perfil-b-address">
                        <span>
                            <i className="fas fa-map-marker-alt"></i>
                            {`${user.address.city} ${user.address.street} ${user.address.suite}`}
                        </span>
                        <span>
                            <i className="fas fa-qrcode"></i>
                            {user.address.zipcode}
                        </span>
                    </main>
                    <main className="user-perfil-b-company">
                        <i className="fas fa-building"></i>
                        <span>{user.company.name}</span>
                    </main>
                </div>
                <div className="user-perfil-aside">
                    <div className="user-perfil-a-nav">
                        <Link to={`/users/${user.id}/posts`}>
                            <i></i>
                            <span>POSTS</span>
                        </Link>
                        <Link to={`/users/${user.id}/albums`}>
                            <i></i>
                            <span>ALBUMS</span>
                        </Link>
                        <Link to={`/users/${user.id}/tasks`}>
                            <i></i>
                            <span>TASKS</span>
                        </Link>
                    </div>
                    <div className="user-perfil-a-main">
                        { (post !== -1) ? <UserPerfilPosts/> : "" }
                        { (albums !== -1 && photos === -1) ? <UserPerfilAlbum/> : "" }
                        { (photos !== -1) ? <UserPerfilPhotos/> : "" }
                        { (tasks !== -1) ? <UserPerfilTasks/> : "" }
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="user-perfil">
                <div className="user-perfil-head">
                    <main className="user-perfil-h-photo">
                            <i className="fas fa-user"></i>
                        </main>
                    <main className="user-perfil-h-names">
                        <span>
                            User not found
                        </span>
                        <Link to={`/users/${user.id}`}>
                        </Link>
                    </main>
                </div>
                <div className="user-perfil-body">
                    <span>
                        Error 404
                    </span>
                </div>
            </div>
        );
    }
}