import React from 'react';
import './Css/MovieDetails.css';
import Movie from './Movie';
import {createFilter} from 'react-search-input';
import { Grid } from 'semantic-ui-react';

const MovieDetails = (props) => {
  const KEYS_TO_FILTERS_AllMovies = ['nameHeb', 'nameEng', 'directorName', 'genre', 'releaseDate', 'summary', 'urlPic'];
  const filteredMovies = props.active===1 ? props.movies.filter(createFilter(props.searchTerm, KEYS_TO_FILTERS_AllMovies)) : null;

    return (
      <div>
        <Grid>
          
        {props.active===1 ?
        props.searchTerm === "" ?
          filteredMovies.map(movie => {
          return (

              <Grid.Column className="movie" key={"m_" + movie.id} width={4}>
              <Movie
                urlPic={movie.urlPic}
                nameHeb={movie.nameHeb}
                nameEng={movie.nameEng}
                releaseDate ={movie.releaseDate}
                directorName={movie.directorName}
                genre={movie.genre}
                runTime={movie.runTime}
                summary={movie.summary}
              />
              </Grid.Column>
          );
        }) :
        props.movies.map(movie => {
          return (

              <Grid.Column className="movie" key={"m_" + movie.id} width={4}>
              <Movie
                urlPic={movie.urlPic}
                nameHeb={movie.nameHeb}
                nameEng={movie.nameEng}
                releaseDate ={movie.releaseDate}
                directorName={movie.directorName}
                genre={movie.genre}
                runTime={movie.runTime}
                summary={movie.summary}
              />
              </Grid.Column>
          );
        }) : null
      }
        
        </Grid>
      </div>
    );
}

export default MovieDetails;