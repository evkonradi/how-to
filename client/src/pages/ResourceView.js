import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
import { Col, Container, Row } from "reactstrap";
import { Box } from "@chakra-ui/core";

import { useParams } from "react-router-dom";
import PayButton from "../components/PayButton";
import Auth from "../utils/auth";
import { QUERY_USER_PAID_RESOURCES } from "../utils/queries";

const getUsername = () =>{
  if (Auth.loggedIn())
    return  Auth.getProfile().data.username;
  else
    return "";
}

function ResourceView() {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_RESOURCE, {
    variables: { _id: id },
  });
  const resQuery = useQuery(QUERY_USER_PAID_RESOURCES, {
    skip: !Auth.loggedIn(),
    variables: { username:  getUsername() }
  });

  const needPayForResource = () =>{
    if ((Math.round(parseFloat(data.resource.cost)*100)/100) === 0)
      return false;
    else
    {
      let isPaidResource = true;

      if (resQuery.data){
        resQuery.data.user.paidResources.forEach(element => {
          if (element._id.toString() === data.resource._id.toString())
          {
            isPaidResource = false;          
          }
        });
      }

      console.log(isPaidResource);
      return isPaidResource;
    }
  }

  return (
    <main>
      {loading || resQuery.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Container className="cardTextAlign">
            <br />

            <Col xs={12}>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                  <h3>{data.resource.name}</h3>
              </Box>
              <br/>
              <Row>
              <Col className="one-third">
                <h6 className="subtitle">{data.resource.shortDescription}</h6>
                <h5 className="italic">Contributor: {data.resource.displayName}</h5>

                {needPayForResource() ? (
                  <h5 className="italic">Cost: ${data.resource.cost}</h5>
                  ) : ( null
                  // <h5 className="italic">FREE Resource</h5>
                )}

                {needPayForResource() ? (
                  <Col >
                    <PayButton resource={data.resource}></PayButton>
                  </Col>
                ): null}

              </Col>
              
              <Col xs={6}>
              {data.resource.images.map((image) => (
                <Col key={`image-${data.resource.images.indexOf(image)}`}>
                  <img
                  class="img-fluid"
                    className="resourceImg"
                    src={`${image.fileURL} `} 
                    alt={`${image.imageCaption}`}
                  ></img>
                  <br></br>
                  <span>{image.imageCaption}</span>
                </Col>
              ))}
              </Col>
              </Row>
        
 
              <p>{data.resource.resourceBody}</p>
          
            </Col>
            <br />
            <br />
            <br />
            {data.resource.videos.map((video) => (
              <Col key={`video-${data.resource.videos.indexOf(video)}`}>
                    <iframe
                      className="video"
                      src={`${video.fileURL}`}
                      frameBorder="0"
                    
                      
                      title={video.videoCaption}
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                    <br />
                    <span>{video.videoCaption}</span>
                    <br></br>
                    <br></br>
              </Col>
            ))}

            <br/><br/><br/><br/>
          </Container>
        </div>
      )}
    </main>
  );
}

export default ResourceView;
