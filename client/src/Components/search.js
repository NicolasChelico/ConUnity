import React from "react";
import './search.css'

const Search = () => {

    return(
        <div className = "search__bar">
            <div className="search__section">
                <input type ="text" /> <button type="submit">Search</button>
            </div>
        </div>
    )
}

export default Search;