import React from "react";
import Resource from "../components/Resource";
import Search from "../components/Search";
import logo from "./teach_me_to_logo-01.png";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";
import graphic from "./AdobeStock_276150433_graphic.png";


const Home = () => {
  return (
    <div className="main-container">
      <div className="main-grid">
        <Box bg="transparent" height="80px"></Box>
        <Box className="main-grid-item" >
        
          {/* <img className="medium" src={logo} alt="logo, teach me to" /> */}
          <Box >
            <h1 className="mainTitle">TeachMeTo</h1>
          <h4 className="byline">WHAT DO YOU WANT TO LEARN TODAY?</h4>

          <Search></Search>

          <img className="graphic" src={graphic} alt="Tech Me To"/>
          <p className="copy">
            {" "}
            Start creating and sharing your knowledge with others on TeachMeTo.
            <br />
            Add images - videos - & words to help others learn.
            <br /> Share FREE or $$$ resources today.
          </p>
          <Link className="copyLink" to="/signup">
            Signup |
          </Link>
          <Link className="copyLink" to="/login">
            Login
          </Link>
        </Box>
        </Box>
        <Box bg="transparent" height="40px" />

        <Box className="copyBox" >
          <Box bg="transparent" height="40px" />
          <h4 className="byline">SEE WHAT'S NEW</h4>
          <Flex display="center">
            <Resource></Resource>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default Home;
