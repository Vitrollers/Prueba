import "isomorphic-fetch";

export async function getPhotos(id){
    const photos = await fetch("https://jsonplaceholder.typicode.com/albums/"+id+"/photos");

    if(photos.ok){
        return photos.json();
    }else{
        return photos.json();
    }
}

export async function getPhoto(id){
    const photo = await fetch("https://jsonplaceholder.typicode.com/photos/"+id);

    if(photo.ok){
        return photo.json();
    }else{
        return photo.json();
    }
}