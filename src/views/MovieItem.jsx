const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="poster"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.vote_average.toFixed()} ⭐</p>
      </div>
    </div>
  );
};
export default MovieItem;
