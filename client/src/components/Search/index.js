import React, {useState} from "react";
import { Input } from "reactstrap";
import { useLazyQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { QUERY_RESOURCES_SEARCH } from '../../utils/queries';
import { Button } from '@chakra-ui/core';

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
    <div>
        <Input name ="searchText" onChange={handleChange} />
        <Button
  size="lg"
  height="46px"
  width="200px"
  border="2px"
//   borderColor="green.500"
  color="white"
  bg="#5C6B73"
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
              <Link to={`/articles/${article._id}`} key={article._id}>
                  <div>{article.name}</div>
                  <div>{article.shortDescription}</div>
                  <div>{article.dateCreated} by {article.displayName}</div>
                  <br></br>
              </Link>
            )) }
          </div>
        ) 
        : null}
      </div>
    </div>
  );
};

export default Search;
