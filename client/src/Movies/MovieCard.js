import React from "react";
import Movie from "./Movie";
import { NavLink } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars } = props;
  console.log(props);
  return (
    <NavLink to={`/movies/${props.id}`}>
      <div className="movie-card">
        <h2>{props.title}</h2>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars &&
          stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
      </div>
    </NavLink>
  );
};

export default MovieCard;
