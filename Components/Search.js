import React, {useState} from 'react'

function Search({data}) {
    // const [inputValue, setInputValue] = setState("");
    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);

    function Searchitem(e) {
        e.preventDefault();
        console.log("I am clicked");
    }

    return (
        <div className="search_container">
            <button 
                // onClick={showingSearchPage} 
                className="search">
                    Search for places
            </button>
            <div className="search_form">
                <form onSubmit={Searchitem}>
                    <input 
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue} 
                        required/>
                    <button 
                        type="submit">
                            Search
                    </button>
                </form>
                <button className="title">{data.title}</button>
            </div>
        </div>
    )
}

export default Search
