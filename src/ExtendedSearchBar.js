import React from 'react';
import './Css/ExtendedSearchBar.css';
import { Button } from 'semantic-ui-react';
import { Grid, Image } from 'semantic-ui-react';

const ExtendedSearchBar = (props) => {

  return (
    props.extendedSearch ?
    <div className="extendedSearchBar">
      <Grid>
          <Grid.Column width={11}>
            <Button.Group floated="right">
              <Button id="btnYears" className={props.active==="btnYears" ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, "btnYears")}>טווח שנים</Button>
              <Button id="btnGenre" className={props.active==="btnGenre" ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, "btnGenre")}>ז'נר</Button>
              <Button id="btnHName" className={props.active==="btnHName" ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, "btnHName")}>אישית</Button>
              <Button id="btnFName" className={props.active==="btnFName" ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, "btnFName")}>שם הסרט</Button>

            </Button.Group>
          </Grid.Column>
          <Grid.Column width={5}>
          <Button className="btnHideExSearch" icon='remove circle' onClick={props.extendedSearchHandler.bind(this, false)} />
          </Grid.Column>
      </Grid>
    </div> : ""
  );
}

export default ExtendedSearchBar

