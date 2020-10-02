import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import ButtonLink from './components/buttonLink';
import Main from './parts/main';
import Nav from './parts/nav';
import Error from './views/error.view';
import Home from './views/home.view';
import Photo from './views/photo.view';
import Post from './views/post.view';
import { UserPerfil, Users } from './views/user.view.';

function App() {
  return (
    <div className="App">
      <Nav>
        <ButtonLink rute="/" active={true} icon="flag"/>
        <ButtonLink rute="/users" icon="users"/>
      </Nav>
      <Main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/users" exact>
            <Users/>
          </Route>
          <Route path="/users/:idUser" exact>
            <UserPerfil/>
          </Route>
          <Route path="/users/:idUser/posts" exact>
            <UserPerfil/>
          </Route>
          <Route path="/users/:idUser/tasks" exact>
            <UserPerfil/>
          </Route>
          <Route path="/users/:idUser/albums" exact>
            <UserPerfil/>
          </Route>
          <Route path="/users/:idUser/albums/:idAlbums" exact>
            <UserPerfil/>
          </Route>
          <Route path="/posts/:idPost" exact>
            <Post/>
          </Route>
          <Route path="/photos/:idPhoto" exact>
            <Photo/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
