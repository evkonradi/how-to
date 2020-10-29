import React from "react";
// import { Card, CardText, CardBody, CardHeader }  from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap"

const CardResource = ({resource, imgWidth}) =>{

  return (
    <Link className="mainCard" to={`/articles/${resource._id}`} key={resource._id}>
      <Card outline color='dark'>
        <Card.Body>
        <Card.Title>{resource.name}</Card.Title>
        {/* <CardBody style={{ backgroundColor: "#9DB4C0"}}> */}
          {/* <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Img variant="top" src="./images/stars.jpg" width="100px" /> */}
          <Card.Img variant="top" src="./images/stars.jpg" style={{width:imgWidth}} alt = {resource.name} />
          <Card.Text>{resource.shortDescription}</Card.Text>
          <Card.Text>Created at: {resource.dateCreated} by {resource.displayName}</Card.Text>
          <br></br>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardResource;