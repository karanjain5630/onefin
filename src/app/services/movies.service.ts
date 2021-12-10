import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { moviesAPI } from './helper';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies(page:number){
    return this.http.get(` "https://demo.credy.in/api/v1/maya/movies/"`)
  }
}
