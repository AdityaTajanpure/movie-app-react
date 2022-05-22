import "../App.css";
import MovieCard from "../components/movie-card";

const HomePage = ({ selectedMovie, setSelectedMovie, movies }) => {
  const BACKGROUND_IMAGE_PATH = "https://image.tmdb.org/t/p/w1280/";

  const style = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) ,url(${BACKGROUND_IMAGE_PATH}${selectedMovie.backdrop})`,
  };

  return (
    <>
      <div className="info" style={style}>
        <header></header>
        <div className={"info-content"}>
          <h1>{selectedMovie.name}</h1>
          {selectedMovie.summary ? <p>{selectedMovie.summary}</p> : null}
        </div>
      </div>
      <div className="container">
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie._id}
            selectMovie={setSelectedMovie}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
