import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Box, Flex } from "@chakra-ui/core";

const CardResource = ({resource, useClass}) =>{

  return (

    
      <Card outline color='dark'>
        <Link className="mainCard" to={`/articles/${resource._id}`} key={resource._id}>

        <Card.Body >
          <img className={`cardImg ${useClass}`} variant="top" src={resource.images.length ? resource.images[0].fileURL : "/images/teach_me_to_logo-01.png"} alt = {resource.name} />
          <Box className="cardFill">
          <Card.Title className="cardTitle">{resource.name}</Card.Title>
          <Card.Text className="cardText">{resource.shortDescription}</Card.Text>
          <Card.Text className="cardTime">Created: {resource.dateCreated} by {resource.displayName}</Card.Text>
          </Box>
        </Card.Body>
   
    </Link>
    </Card>
);
};

export default CardResource;