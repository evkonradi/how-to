import React, { useState } from "react";
import { Input } from "reactstrap";
import { useLazyQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCES_SEARCH } from "../../utils/queries";
import { Button, Box } from "@chakra-ui/core";
import CardResource from "../CardResource";

const Search = () => {
  const [searchedArticles, { data }] = useLazyQuery(QUERY_RESOURCES_SEARCH);
  const [formState, setFormState] = useState({ searchText: "" });

  // update state based on search input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const doSearch = (event) => {
    event.preventDefault();

    try {
      searchedArticles({ variables: { text: formState.searchText } });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <Box maxW="sm"display="-webkit-inline-box">
      <Input maxLength="50%" name="searchText" placeholder="Today I Will Learn..." onChange={handleChange} />
      <Button
        className="center"
        size="md"
        height="40px"

        border="2px"
        color="white"

        _hover={{ bg: "#D99748" }}
        type="submit"
        onClick={doSearch}
      >
    <span role="img" aria-label="search">🔍 </span>
      </Button>
      </Box>
      {/* // <Input className="center" width="100%" name="searchText" onChange={handleChange} />
      // <Button
      //   className="center"
      //   size="md"
      //   height="46px"
      //   width="200px"
      //   border="2px"
      //   color="white"
      //   bg="#253237"
      //   _hover={{ bg: "#D99748" }}
      //   type="submit"
      //   onClick={doSearch}
      // >
      //   <span role="img" aria-label="search">🔍 Search</span>
      // </Button> */} 

      <div>
        {data ? (
          <div>
            <br></br>
            {data.resources_search.map((article) => (
              <div key={article._id}>
                <CardResource resource={article} imgWidth="100%"></CardResource>
                {/* <DonateButton resource={article}></DonateButton> */}
                <br></br>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Search;
