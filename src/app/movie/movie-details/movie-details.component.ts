import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:any
  genres:any
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.movie=this.data.movie;
    this.splitGenres()
  }
  splitGenres(){
    if(this.movie.genres!==""){
      this.genres=this.movie.genres.split(",")
    }
    else
      this.genres=null
  }
  getImageAvatar(movie:any){
    const names = movie.title.split(" ")
    if(names.length<2)
    return `https://ui-avatars.com/api/?name=${names[0]}?font-size=1`;
    else
    return `https://ui-avatars.com/api/?name=${names[0]}+${names[1]}?font-size=1`;
  }

}
