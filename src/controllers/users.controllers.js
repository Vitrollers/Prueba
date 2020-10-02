import "isomorphic-fetch";

export async function getUsers(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users");

    if(users.ok){
        return users.json();
    }else{
        return users.json();
    }
}

export async function getUser(id){
    const user = await fetch("https://jsonplaceholder.typicode.com/users/"+id);

    if(user.ok){
        return user.json();
    }else{
        return user.json();
    }
}

export async function getUserPosts(id){
    const userPosts = await fetch("https://jsonplaceholder.typicode.com/users/"+id+"/posts");

    if(userPosts.ok){
        return userPosts.json();
    }else{
        return userPosts.json();
    }
}

export async function getUserAlbums(id){
    const userAlbums = await fetch("https://jsonplaceholder.typicode.com/users/"+id+"/albums");

    if(userAlbums.ok){
        return userAlbums.json();
    }else{
        return userAlbums.json();
    }
}

export async function getUserTasks(id){
    const userTasks = await fetch("https://jsonplaceholder.typicode.com/users/"+id+"/todos");

    if(userTasks.ok){
        return userTasks.json();
    }else{
        return userTasks.json();
    }
}