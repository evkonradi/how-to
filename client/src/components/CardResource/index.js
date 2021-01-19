import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Box } from "@chakra-ui/core";

const CardResource = ({resource, useClass}) =>{

  return (

    <div className="cardContainer">

    <Link className="mainCard" to={`/articles/${resource._id}`} key={resource._id}>
      
      <div className="cardClass">
     
        <Card.Body className="cardBody">
          <Box className="cardFill">
            <img className={`cardImg ${useClass}`} variant="top" src={resource.images.length ? resource.images[0].fileURL : "/images/teach_me_to_logo-01.png"} alt = {resource.name} />
          </Box>
          <Box className="cardFill">
            <Card.Title className="cardTitle">{resource.name}</Card.Title>
            <Card.Text className="cardText">{resource.shortDescription}</Card.Text>
            <Card.Text className="cardTime">Created: {resource.dateCreated} by {resource.username}</Card.Text>
          </Box>
        </Card.Body>
  
      </div>
 
      {/* </Box> */}
    </Link>
    </div>

);
};

export default CardResource;