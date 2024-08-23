import { Component } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";
import SeeMore from "./SeeMore";
import MovieItemFirstPoster from "./MovieItemFirstPoster";
import Footer from "./Footer";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const movies = await MovieController.fetchMovies();
      this.setState({ movies, loading: false });
      console.log("Fetched movies:", movies);
    } catch (err) {
      console.error("Error fetching movies:", err);
      this.setState({ error: "Failed to fetch movies", loading: false });
    }
  };

  render() {
    const { movies, loading, error } = this.state;
    if (error) {
      return <h1>{error}</h1>;
    }
    if (loading) {
      return <h1>Loading</h1>;
    }
    return (
      <>
        <MovieItemFirstPoster />

        <SeeMore type={"Movies"} />

        <div className="movie-list">
          {movies.slice(0, 6).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>

        <SeeMore type={"Series"} />
        <div className="movie-list">
          {movies.slice(6, 12).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>

        <SeeMore type={"Family"} />

        <div className="movie-list">
          {movies.slice(12, 18).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>

        <SeeMore type={"Tv"} />

        <div className="movie-list">
          {movies.slice(3, 9).map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>

        <Footer />
      </>
    );
  }
}

export default MovieList;
