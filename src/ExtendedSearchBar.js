import React from 'react';
import './Css/ExtendedSearchBar.css';
import { Grid, Button } from 'semantic-ui-react';

const ExtendedSearchBar = (props) => {

  return (
    props.extendedSearch ?
    <div className="extendedSearchBar">
      <Grid>
          <Grid.Column width={11}>
            <Button.Group floated="right">
              <Button className={props.active===5 ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, 5)}>טווח שנים</Button>
              <Button className={props.active===4 ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, 4)}>ז'נר</Button>
              <Button className={props.active===3 ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, 3)}>אישית</Button>
              <Button className={props.active===2 ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, 2)}>שם הסרט</Button>
              <Button className={props.active===1 ? "activeExSearchBtn" : "exSearchBtn"} onClick={props.btnHandleClick.bind(this, 1)}>כללי</Button>
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

