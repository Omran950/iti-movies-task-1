import axios from "axios";
import MovieModel from "../models/MovieModel";
class MovieController {
  static async fetchMovies() {
    try {
      const response = await axios.get(
        "http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );
      return response.data.results.map(
        (movie) =>
          new MovieModel(
            movie.id,
            movie.title,
            movie.poster_path,
            movie.vote_average,
            movie.backdrop_path
          )
      );
    } catch (err) {
      console.error("Error fetching movies:", err);
      // Consider throwing a specific error to handle in MovieList
      throw new Error("Failed to fetch movies");
    }
  }
}
export default MovieController;
