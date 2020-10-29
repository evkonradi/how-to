import React, {useState} from "react";
import { Input } from "reactstrap";
import { useLazyQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { QUERY_RESOURCES_SEARCH } from '../../utils/queries';
import { Button } from '@chakra-ui/core';
import CardResource from "../CardResource";

const Search = () => {

  const [ searchedArticles, {data} ] = useLazyQuery(QUERY_RESOURCES_SEARCH);
  const [formState, setFormState] = useState({ searchText: ""});

      // update state based on search input changes
  const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value
        });
  };

  const doSearch = event =>{
    event.preventDefault();

    try {
        searchedArticles({variables: {text : formState.searchText}});
    } catch (e) {
      console.error(e);
    } 

  }

  return (
    <main>
        <Input className="center" name ="searchText" onChange={handleChange} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button className="center"
  size="lg"
  height="46px"
  width="200px"
  border="2px"
  color="white"
  bg="#253237"
  _hover={{ bg:"#D99748" }}
  type="submit"
 onClick={doSearch}>Search</Button>

      {/* <InputGroup>
        <InputGroupAddon addonType="append">
          <InputGroupText><span role = "img" aria-label="magnifyingglass" onclick={doSearch} >🔍</span></InputGroupText>
        </InputGroupAddon>
      </InputGroup> */}

      <div>
        {data ? (
          <div>
            <br></br>
            {data.resources_search.map(article =>(
              <div key={article._id}>
                <CardResource resource={article} imgWidth="50%"></CardResource>
                <br></br>
              </div>
            )) }
          </div>
        ) 
        : null}
      </div>
    </main>
  );
};

export default Search;
