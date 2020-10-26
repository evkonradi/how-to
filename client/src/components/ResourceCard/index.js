  
import React from 'react';
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap';

const ResourceCard = ({ resources }) => {
  if (!resources.length) {
    return <h3>There are no books in this library!</h3>;
  }

  return (
    <div>
      {resources &&
        resources.map((resource) => (
          <Card outline color='secondary' key={resource._id}>
            <CardHeader>Title: {resource.name}</CardHeader>
            <CardBody>
              
              <CardText># of Pages: {resource.shortDescription}</CardText>
            </CardBody>
          </Card>
        ))}
    </div>
  );
};

export default ResourceCard;