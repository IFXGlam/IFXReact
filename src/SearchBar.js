import React from 'react'
//import { Input } from 'semantic-ui-react'
import {createFilter} from 'react-search-input'
/*
import { Label } from 'semantic-ui-react'
<Label key={"btn" + movie.id} content={movie.nameHeb +" / "+ movie.nameEng} onClick={props.searchUpdated.bind(this.content)}/>
<input type="button" value={movie.nameHeb +" / "+ movie.nameEng} onClick={props.searchUpdated.bind(this, (movie.nameHeb +" / "+ movie.nameEng))}/>
<input type="button" value={movie.nameHeb +" / "+ movie.nameEng} onClick={document.getElementById("mySearchInput").text=movie.nameHeb +" / "+ movie.nameEng}/>
<SearchInput id="mySearchInput" className="search-input" type="text" onChange={props.searchUpdated.bind(this)} action={{ icon: 'search' }} placeholder={props.searchTerm} value={props.searchTerm} />
      <div className="searchResoult">
      {props.searchTerm!=="" ? filteredMovies.map(movie => {
          return (
            <div className="id" key={"movie_" + movie.id}>
                
                <input type="button" value={movie.nameHeb +" / "+ movie.nameEng} onClick={props.searchUpdated.bind(this, (movie.nameHeb +" / "+ movie.nameEng))}/>
            </div>
          );
        }) : null}
        </div>
*/
const SearchBar = (props) => {
  const KEYS_TO_FILTERS = ['nameHeb', 'nameEng']
  const filteredMovies = props.movies.filter(createFilter(props.searchTerm, KEYS_TO_FILTERS))
  
  return (
    <div className="ui search">


      <div className="ui icon input">
        <input className="prompt" type="text" onChange={props.searchUpdated.bind(this)} placeholder="חיפוש שם הסרט בעברית / באנגלית" value={props.searchTerm} />
        <i className="search icon"></i>
      </div>
      <div className="results">
        
      </div>
      {props.searchTerm!=="" ? filteredMovies.map(movie => {
          return (
            <div className="id" key={"movie_" + movie.id}>
                
                <input type="button" value={movie.nameHeb +" / "+ movie.nameEng} onClick={props.searchResult.bind(this, (movie.nameHeb +" / "+ movie.nameEng))}/>
            </div>
          );
        }) : null}
    </div>
  );
}

export default SearchBar


/*
import SearchInput, {createFilter} from 'react-search-input'



import './SearchBar.css'


const SearchBar = (props) => {
  //const myObj = JSON.parse(SearchJson);
 // const filteredEmails = Object.entries(SearchJson).filter(createFilter(props.myTerm, KEYS_TO_FILTERS));
 // console.log(filteredEmails)
  
    return (
      <div className="mySearch">
        <SearchInput className="search-input" onChange={props.searchUpdated.bind(this)} />
        {props.movies.map(movie => {
          return (
            <div className="id" key={"movie_" + movie.id}>
              <div className="nameHeb">{movie.nameHeb}</div>
              <div className="nameEng">{movie.nameEng}</div>
            </div>
          );
        })}
      
      </div>
    );
}


export default SearchBar;
*/
