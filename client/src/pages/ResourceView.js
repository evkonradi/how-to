import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
import { Col, Container } from "reactstrap";
import { Box } from "@chakra-ui/core";

import { useParams } from "react-router-dom";
import DonateButton from "../components/DonateButton";

function ResourceView() {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_RESOURCE, {
    variables: { _id: id },
  });

  return (
    <main>
      {loading ? (
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
              <Box className="one-third">
              <h6 className="subtitle">{data.resource.shortDescription}</h6>
              <h5 class="italic">Contributor: {data.resource.displayName}</h5>
              <h5 class="italic">Cost: {data.resource.cost}</h5>
              </Box>
          
              {data.resource.images.map((image) => (
                <Col key={`image-${data.resource.images.indexOf(image)}`}>
                  <img
                    className="resourceImg"

                    src={`${image.fileURL} `} 
                    alt={`${image.imageCaption}`}
                  ></img>
                  <br></br>
                  <span>{image.imageCaption}</span>
                </Col>
              ))}
        
 
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

            <Col xs={12}>
                <DonateButton resource={data.resource}></DonateButton>
            </Col>
            <br/><br/>
          </Container>
        </div>
      )}
    </main>
  );
}

export default ResourceView;
