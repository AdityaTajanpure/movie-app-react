import "./App.css";
import NavigationBar from "./components/nav-bar";
import HomePage from "./pages/HomePage";
import AddMoviePage from "./pages/AddMoviePage";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";
import MoviesRepo from "./api_client/movies_repo";

import { useState, useEffect } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const getAllMovies = async () => {
    var response = await MoviesRepo.getAllMovies();
    if (response.data.status) {
      setMovies(response.data.data);
      setSelectedMovie(response.data.data[0]);
    }
  };

  useEffect(() => {
    getAllMovies();
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.opacity = 1;
      } else {
        document.getElementsByClassName("navbar")[0].style.opacity = 0;
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  const getPageByIndex = (index) => {
    switch (index) {
      case 0:
        return movies.length > 0 ? (
          <HomePage
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            movies={[...movies]}
          />
        ) : (
          <></>
        );
      case 1:
        return <AddMoviePage />;
      case 2:
        return (
          <SearchPage setSelectedMovie={setSelectedMovie} setIndex={setIndex} />
        );
      case 3:
        return <AboutPage />;
      default:
        return movies.length > 0 ? (
          <HomePage
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            movies={[...movies, ...movies, ...movies, ...movies]}
          />
        ) : (
          <></>
        );
    }
  };

  return (
    <div className="App">
      <NavigationBar onIndexChanged={setIndex} initialIndex={index} />
      {getPageByIndex(index)}
    </div>
  );
};

export default App;
