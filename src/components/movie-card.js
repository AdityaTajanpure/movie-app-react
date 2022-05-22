import React from "react";
import MoviesRepo from "../api_client/movies_repo";

const MovieCard = ({ movie, selectMovie }) => {
  return (
    <div
      className={"movie-card"}
      id={"card"}
      onClick={() => {
        console.log(movie);
        selectMovie(movie);
        window.scrollTo(0, 0);
      }}
    >
      {movie.poster ? (
        <img className={"movie-cover"} src={`${movie.poster}`} alt="" />
      ) : (
        <div className={"no-image"}>No Image Found</div>
      )}
      <h5 className={"movie-title"}>{movie.name}</h5>
      <h5
        className={"movie-title"}
        onClick={async () => {
          var response = await MoviesRepo.deleteMovieById(movie._id);
          if (response.data.status) {
            alert(response.data.msg);
            window.location.reload();
          }
        }}
      >
        Delete Movie 🗑️
      </h5>
    </div>
  );
};

export default MovieCard;
