import React from "React";

const SearchBox = (props) => {
    return (
    <input 
    type="search"
    className="search"
    placeholder={props.placeholder}
    onChange={props.handleChange} />
    )
}
export default SearchBox;