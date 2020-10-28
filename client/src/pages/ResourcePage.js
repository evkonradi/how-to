import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../utils/queries';
import { Col, Row, Container, }  from 'reactstrap';
import { useParams } from 'react-router-dom';

// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";



const ResourcePage = () => {

  return (
    <main>
      <div>
        
            <Container>
              <Col sm="12" md="6" lg="8" offset="3">
              <Row>
                <h2>Title of Article</h2>
              </Row>
              <Row>
                <h4>Short Description</h4><br /><br />
              </Row>
              <Row>
              <h5>Author's Name</h5>
              </Row>
              
              <Row>
                <Col xs={12}>
                <img src="./images/lemons.jpeg"></img>
                </Col>
                {/* carousel of images */}
              </Row>
              <Row>
                <p class="caption">
                  image caption goes here
                  </p>
              </Row>
              <Row>
                <p>this is where the body of the resource will go</p>
              </Row>
              <Row>
                <h4>this is where a video will go</h4>
              </Row>
              </Col>
            </Container>
        
      </div>
    </main>
  );
};

export default ResourcePage;