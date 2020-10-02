import "isomorphic-fetch";

export async function getPosts(){
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts/");

    if(posts.ok){
        return posts.json();
    }else{
        return posts.json();
    }
}

export async function getPost(id){
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);

    if(posts.ok){
        return posts.json();
    }else{
        return posts.json();
    }
}