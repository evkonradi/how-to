import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Box } from "@chakra-ui/core";

const CardResource = ({resource, imgWidth}) =>{

  return (


    <Link className="mainCard" to={`/articles/${resource._id}`} key={resource._id}>
      
      <Card outline color='dark' className="cardTextAlign">
        <Card.Body className="cardBody">
        <Box maxWidth="40%">
          <Card.Img className="cardImg" variant="top" src={resource.images.length ? resource.images[0].fileURL : "/images/teach_me_to_logo-01.png"} style={{width:imgWidth}} alt = {resource.name} />
          </Box>
          <Box maxWidth="60%">
          <Card.Title>{resource.name}</Card.Title>
          <Card.Text className="cardText">{resource.shortDescription}</Card.Text>
          <Card.Text className="cardTime">Created: {resource.dateCreated} by {resource.displayName}</Card.Text>
          </Box>
        </Card.Body>
      </Card>
    </Link>

);
};


export default CardResource;