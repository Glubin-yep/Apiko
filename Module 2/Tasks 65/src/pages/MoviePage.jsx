import React, { Component } from "react";
import Movie from "../components/Movie/Movie";
import RateSwitch from "../components/RateSwitch/RateSwitch";
import Pagination from "../components/Pagination/Pagination";
import "./MoviePage.css";

class MoviesPage extends Component {
  state = {
    movies: [],
    currentPage: 1,
    totalPages: 1,
  };

  componentDidMount() {
    this.getPopularFilms(this.state.currentPage);
  }

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage }, () => {
      this.getPopularFilms(newPage);
    });
  };

  getPopularFilms(page) {
    fetch(
      //зробимо вигляд шо це не захаркоджений url з API key :)
      `https://api.themoviedb.org/3/movie/popular?api_key=162c0d3d4cd5f8123205bdb99c1b4d2b&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.results, totalPages: data.total_pages });
      });
  }

  getImageUrl(poster_path) {
    return `https://image.tmdb.org/t/p/original/${poster_path}`;
  }

  render() {
    const { movies, currentPage, totalPages } = this.state;

    return (
      <div>
        <h1>Favourite Movies</h1>
        <div className="movies-list">
          {movies.map((movie) => (
            <div key={movie.id}>
              <Movie
                title={movie.title}
                poster={this.getImageUrl(movie.poster_path)}
                overview={movie.overview}
              />
              <RateSwitch rating={movie.vote_average} />
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default MoviesPage;
