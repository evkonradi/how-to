import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Box } from "@chakra-ui/core";

const CardResource = ({resource, useClass}) =>{

  return (


    <Link className="mainCard" to={`/articles/${resource._id}`} key={resource._id}>
      <Box height="250px" width="500px">
      
      <Card outline color='dark'>
     
        <Card.Body className="cardBody">
          <img className={`cardImg ${useClass}`} variant="top" src={resource.images.length ? resource.images[0].fileURL : "/images/teach_me_to_logo-01.png"} alt = {resource.name} />
          <Box className="cardFill">
          <Card.Title className="cardTitle">{resource.name}</Card.Title>
          <Card.Text className="cardText">{resource.shortDescription}</Card.Text>
          <Card.Text className="cardTime">Created: {resource.dateCreated} by {resource.username}</Card.Text>
          </Box>
        </Card.Body>
  
      </Card>
 
      </Box>
    </Link>

);
};

export default CardResource;