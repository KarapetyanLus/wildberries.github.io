import React from 'react'

const Search = ({
    width, 
    height,
    color    
}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill = {color}>
            <path fill-rule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" />
        </svg>
    )
}

export default Search