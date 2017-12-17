import React from 'react';
import './Css/MovieDetails.css';
//import { Image, Item, Button } from 'semantic-ui-react'
import { Button, Dimmer, Header, Image, Description } from 'semantic-ui-react'

export default class Movie extends React.Component { 
//const Movie = (props) => {
  constructor(props) {
    const movieUrl = props.urlPic;
    const nameHeb = props.nameHeb;
    const nameEng = props.nameEng;
    const releaseDate = props.releaseDate;
    const directorName = props.directorName;
    const genre = props.genre;
    const runTime = props.runTime;
    const movieSummery = props.summary;

    super(props);
    this.state = {
      urlPic: movieUrl,
      nameHeb: nameHeb,
      nameEng: nameEng,
      releaseDate: releaseDate,
      directorName: directorName,
      genre: genre,
      runTime: runTime,
      summary: movieSummery,
    };
  }
  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>{this.state.releaseDate}) {this.state.nameHeb} <br/> {this.state.nameEng}</Header>

        <p>
          <strong>מפיק: </strong>{this.state.directorName}
          <br/>
          <strong>ז'נר: </strong>{this.state.genre}
          <br/>
          <strong>משך ריצה: </strong>{this.state.runTime}
          <br/>
          <strong>תקציר: </strong>
          {this.state.summary}
        </p>
        <Button>View</Button>
      </div>
    )

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src={this.state.urlPic}
      />
    )
  }
}

//export default Movie;

/*
return (
      <div id="allMoviesDiv">
        <Item.Group relaxed>
          <Item>
            <Item.Image size='small' src={props.urlPic} />

            <Item.Content verticalAlign='middle'>
              <Item.Header>
                ({props.releaseDate}) {props.nameHeb} / {props.nameEng}
              </Item.Header>
              <Item.Description>
                <strong>מפיק: </strong>{props.directorName}
                <br/>
                <strong>ז'נר: </strong>{props.genre}
                <br/>
                <strong>משך ריצה: </strong>{props.runTime}
                <br/>
                <strong>תקציר: </strong>
                {props.summary}
              </Item.Description>
              <Item.Extra>
                <Button floated='right'>
                  פרטים נוספים
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
       
       
      </div>
    );


-----------------------------------------
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
*/