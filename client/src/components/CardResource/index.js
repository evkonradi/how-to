import React from "react";
import { Card, CardText, CardBody, CardHeader }  from "reactstrap";
import { Link } from "react-router-dom";

const CardResource = ({resource, imgWidth}) =>{

  console.log(resource.images);

  return (
    <Link to={`/articles/${resource._id}`} key={resource._id}>
      <Card outline color='secondary'>
        <CardHeader>{resource.name}</CardHeader>
        <CardBody style={{ backgroundColor: "#9DB4C0"}}>
          {/* <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Img variant="top" src="./images/stars.jpg" width="100px" /> */}
          <img src={resource.images.length ? resource.images[0].fileURL : "./images/stars.jpg"} style={{width:imgWidth}} alt = {resource.name}></img>
          <CardText>{resource.shortDescription}</CardText>
          <CardText>Created at: {resource.dateCreated} by {resource.displayName}</CardText>
          <br></br>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardResource;