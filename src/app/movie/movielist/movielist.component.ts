import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movies:any
  filteredMovies:any
  count:number=0
  page:number=1
  dataBaseError:boolean=false;
  constructor(private movieService:MoviesService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.fetchMovies()
  }
  
  fetchMovies(page?: any){
    this.movieService.getMovies(this.page).subscribe((data: any) => {
      this.count=data.count
      this.movies=data.results
      this.filteredMovies=data.results
      this.dataBaseError=false;
    },(err)=>{
      this.dataBaseError=true;
    })
  }
  getImageAvatar(movie:any){
    const names = movie.title.split(" ")
    if(names.length<2)
    return `https://ui-avatars.com/api/name=${names[0]}`;
    else
    return `https://ui-avatars.com/api/name=${names[0]}+${names[1]}`;
  }
  openDialog(movie:any){
    let dialofRef = this.dialog.open(MovieDetailsComponent,{
      data:{
        movie:movie,
      },
      height:'auto',
      width:'600px',
      backdropClass:'bdrop'
    })
    // dialofRef.close()
  }
  filterResults(searchValue:any){
    this.filteredMovies = this.movies.filter((movie:any)=>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
      )    
  }

}
