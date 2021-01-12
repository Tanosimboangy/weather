import React from 'react'

function Search({data}) {

    function showingSearchPage() {
        console.log("I am clicked");
    }
    function Searchitem(e) {
        e.preventDefault();
        console.log("I am clicked");
    }

    return (
        <div className="search_container">
            <button onClick={showingSearchPage}>Search for places</button>
            <button className="title">{data.title}</button>
            <form onSubmit={Searchitem}>
                <input type="text" required/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search
