import "isomorphic-fetch";

export async function getAlbum(id){
    const album = await fetch("https://jsonplaceholder.typicode.com/albums/"+id);

    if(album.ok){
        return album.json();
    }else{
        return album.json();
    }
}