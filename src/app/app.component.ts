import { Component } from '@angular/core';
import {MOVIES} from './mock/mockMovies';
import {MoviesService from './ps4.js'};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ps6';
  selectedMovie : MOVIE | undefined;
  getMovies(): void{
    this.movieDatabase.getMovies()
      .subscribe(movies => {
        this.movies = movies;
        console.log('Movies: ${this.movies}')
      });
  }

  displayMovieInfo(movie: MOVIE){
    this.selectedMovie = movie;
  }

  ngOnInIt(){
    this.getMovie();
  }

}
