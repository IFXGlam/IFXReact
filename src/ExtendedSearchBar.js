import React from 'react';
import './Css/ExtendedSearchBar.css';
import { Button } from 'semantic-ui-react';

const ExtendedSearchBar = (props) => {
  return (
    props.extendedSearch ?
    <div className="extendedSearchBar">
      <Button className="btnHideExSearch" icon='remove circle' onClick={props.extendedSearchHandler.bind(this, false)} />
    </div> : ""
  );
}

export default ExtendedSearchBar

