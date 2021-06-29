import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

var moviesCache = null;

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: {},
  };

  constructor() {
    super();
    console.log("Home-constructor");
  }

  getMovies = async () => {
    console.log(">> getMovies--start");

    if (moviesCache !== null) {
      console.log(">> getMovies-hasCache-done");
      this.setState({ movies: moviesCache, isLoading: false });
      return;
    }

    console.log(">>>> getMovies--await-start");
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    moviesCache = movies;
    this.setState({ movies: movies, isLoading: false });
    console.log(">>>> getMovies--await-done");
  };

  componentDidMount() {
    console.log("componentDidMount--start");
    this.getMovies();
    console.log("componentDidMount--end");
  }

  render() {
    console.log("render");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
