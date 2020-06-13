import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <input onChange = {searchChange} className ='pa3 ba b--green bg-lightest-blue' type="search" placeholder="search robots" />
    );
}


export default SearchBox;