export default class Beatfilm {
  constructor(options) {
    this.movies = options.allMovies;
    this.shortsMovies = this.movies.filter((movie) => movie.duration < 40);
  }

  _getMatchingMovie(movie, query) {
    return (
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  }

  searchMovie(query, shorts) {
    const selectedMovies = shorts? this.shortsMovies : this.movies;
    return selectedMovies.filter((movie) => this._getMatchingMovie(movie, query));
  }

  removeFilm(id) {
    this.movies = this.movies.filter((movie) => movie.movieId !== id);
  }
}
