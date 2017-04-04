import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId: number) {
    let foundAlbum: Album = null;

    ALBUMS.forEach((album)=> {
      if(album.id === albumId){
        foundAlbum = album;
      }
    });
    return foundAlbum;
  }
}
