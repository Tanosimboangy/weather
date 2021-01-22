import React from 'react'

function Form({Searchitem, CloseToggle}) {
    return (
        <form onSubmit={Searchitem}>
            <input type="text" name="location" required/>
            <button type="submit" onClick={CloseToggle}>Search</button>
        </form>
    )
}

export default Form
