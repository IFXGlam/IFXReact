import React from 'react';
import './Css/MovieDetails.css';
import { Image, Reveal, Card } from 'semantic-ui-react'

const Movie = (props) => {

    return (
      <div id="allMoviesDiv">
        <Reveal animated='move up'>
          <Reveal.Content visible>
            <Image src={props.urlPic} size='small' />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Card>
              <Card.Content>
                <Card.Header>
                  {props.nameHeb}
                </Card.Header>
                <Card.Description>
                  {props.summary}
                </Card.Description>
              </Card.Content>
            </Card>
          </Reveal.Content>
        </Reveal>
      </div>
    );
}

export default Movie;