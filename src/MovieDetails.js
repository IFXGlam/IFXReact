import React from 'react';
import './Css/MovieDetails.css';
import Movie from './Movie';
import {createFilter} from 'react-search-input';

const MovieDetails = (props) => {
  const KEYS_TO_FILTERS_AllMovies = ['nameHeb', 'nameEng', 'directorName', 'genre', 'releaseDate', 'summary', 'urlPic'];

    return (
      <div>
        {props.active===1 ?
          props.movies.map(movie => {
          return (
            <div className="movie" key={"m_" + movie.id}>
              <Movie
                urlPic={movie.urlPic}
                nameHeb={movie.nameHeb}
                summary={movie.summary}
              />
            </div>
          );
        }) : null}
        
      </div>
    );
}

export default MovieDetails;