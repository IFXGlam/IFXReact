import React from 'react';
import './Css/MovieDetails.css';
import { Image, Reveal, Card } from 'semantic-ui-react'

const Movie = (props) => {

    return (
      <div id="allMoviesDiv">
        <Card>
        <Image src={props.urlPic} />
        <Card.Content>
          <Card.Header>
            {props.nameHeb}
            <br/>
            {props.nameEng}
            <br/>
            {props.releaseDate}
          </Card.Header>
          <Card.Description>
            <strong>מפיק: </strong>{props.directorName}
            <br/>
            <strong>ז'נר: </strong>{props.genre}
            <br/>
            <strong>משך ריצה: </strong>{props.runTime}
            <br/>
            <strong>תקציר: </strong>
            {props.summary}
          </Card.Description>
        </Card.Content>
      </Card>
       
      </div>
    );
}

export default Movie;