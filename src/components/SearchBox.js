import React from 'react';
import magnifyGlass from '../images/magnifyGlass.svg';

const SearchBox = (props) => {

  return(

    <form className="search">

      <label htmlFor="search" className="accessibility">Search: </label>

      {/* TODO: As this is not content it does not need to be in an img. Maybe pseudo???   */}
      <img src={magnifyGlass} alt="magnifying glass" className="search__magnifyGlass" />

      <input className="search__input" name="search" type="text" value={props.searchValue} onChange={props.changeHandler} />

      <button type="button" className="search__clear" onClick={props.clickHandler}>X</button>

    </form>
  )

};

export default SearchBox;



