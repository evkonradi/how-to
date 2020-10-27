import React from 'react';
import { Col, Row, Image, Container }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../utils/queries';

// import { idbPromise } from "../../utils/helpers";
// import { useParams } from "react-router-dom";


const ResourcePage = () => {
  const { loading, data } = useQuery(QUERY_RESOURCE);
  const resources = data?.resources || [];

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : 
        <Container key={resources._id}>
                <Row>
                    <h1>test</h1>
                    </Row>
                    <Row>
                    <h3>{resources.name}</h3>
                    </Row>
              {
                resources.map((resource) => (
                     <Col> 
                     <h3>{resource.name}</h3></Col>
                      
                ))
                }
                
                </Container>
}

      </div>
    </main>
  );
};

export default ResourcePage;
