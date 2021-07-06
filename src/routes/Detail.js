import React from "react";
import { connect } from "react-redux";
import "./Detail.css";

function Detail({ movie, history }) {
  console.log("movie: " + movie);

  // Home에서 링크가 아닌 주소를 직접 치고 들어올 경우, back 처리
  if (movie === undefined) {
    history.push("/");
    return null;
  }

  const { large_cover_image, title, genres, summary, year } = movie;

  return (
    <div className="detail__container">
      <div className="detail">
        <img src={large_cover_image} alt={title} title={title} />
        <div className="detail__data">
          <h3 className="detail__title">{title}</h3>
          <h5 className="detail__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="detail__summary">{summary}</p>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  // 링크를 통해 전달된 id를 추출.
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    // id에 매칭되는 movie 한개만 props에 넣어줌.
    movie: state.find((movie) => movie.id === parseInt(id)),
  };
}

export default connect(mapStateToProps)(Detail);
