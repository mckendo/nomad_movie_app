import React, { useEffect } from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { put } from "../store";
import useAxios from "../useAxios";
import "./Home.css";

function Home({ movies, putMovies }) {
  // Hooks
  const { loading, data, error } = useAxios({
    url: "https://yts-proxy.now.sh/list_movies.json?sort_by=rating",
  });

  console.log(`loading=${loading}\ndata=${data}\nerror=${error}`);

  useEffect(() => {
    if (!loading) {
      const {
        data: {
          data: { movies: moviesFromServer },
        },
      } = data;
      console.log(moviesFromServer);
      putMovies(moviesFromServer);
    }
  }, [loading]);

  return (
    <section className="container">
      {loading ? (
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

// redux에 저장된 state를 component에서 쓰기 위해,
// props에 넣어주는 함수.
function mapStateToProps(state) {
  return { movies: state };
}

// reducer에세 action을 실행하기 위한 dispatch를
// component에서 접근하기 위해 props에 함수로 넣어줌.
function mapDispatchToProps(dispatch, ownProps) {
  return {
    putMovies: (movies) => dispatch(put(movies)),
  };
}

// 컴포넌트를 redux와 연결 시킴.
export default connect(mapStateToProps, mapDispatchToProps)(Home);
