export default class Beatfilm {
  constructor(options) {
    this.movies = options.allMovies;
  }

  _getMatchingMovies(movie, query) {
    return (
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  }

  searchMovie(query) {
    return this.movies.filter((movie) => this._getMatchingMovies(movie, query));
  }
}
