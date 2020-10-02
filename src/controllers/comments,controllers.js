import "isomorphic-fetch";

export async function getComments(id){
    const comments = await fetch("https://jsonplaceholder.typicode.com/posts/"+id+"/comments");

    if(comments.ok){
        return comments.json();
    }else{
        return comments.text();
    }
}