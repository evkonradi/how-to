import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
import { Col, Container, Row } from "reactstrap";
import { Box } from "@chakra-ui/core";

import { useParams } from "react-router-dom";
import PayButton from "../components/PayButton";


function ResourceView() {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_RESOURCE, {
    variables: { _id: id },
  });

  const needPayForResource = () =>{
    if ((Math.round(parseFloat(data.resource.cost)*100)/100) === 0)
      return false;
    else
      return true;
  }

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="main-container">
          <Box bg="transparent" height="40px"></Box>
          <Box className="copyBox">
            <Col xs={12}>
              <Box bg="wheat" w="100%" p={4} color="#C2DFE3">
                  <h2>{data.resource.name}</h2>
              </Box> 
              <Box bg="transparent" height="20px"></Box>
              <Box className="one-third">
              <p className="recentAddP">Contributor: {data.resource.displayName}</p>
                <h4 className="subtitle">{data.resource.shortDescription}</h4>

                {needPayForResource() ? (
                  <h5 className="italic">Cost: ${data.resource.cost}</h5>
                ) : (
                  <h5 className="italic">FREE Resource</h5>
              )}

                {needPayForResource() ? (
                  <Col >
                    <PayButton resource={data.resource}></PayButton>
                  </Col>
                ): null}
              </Box>
              <Box bg="transparent" height="20px"></Box>
              <p>{data.resource.resourceBody}</p>
              
              <Box>
              
              {data.resource.images.map((image) => (
                <Col key={`image-${data.resource.images.indexOf(image)}`}>
                  <img
                    className="resourceImg"
                    src={`${image.fileURL} `} 
                    alt={`${image.imageCaption}`}
                  ></img>
                  
                  <p className="recentAddP">{image.imageCaption}</p>
                </Col>
                
              ))}
           
              </Box>
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
                    <p className="recentAddP">{video.videoCaption}</p>
                    <br></br>
                    <br></br>
              </Col>
            ))}
            </Col>
            </Box>
        </div>
      )}
    </main>
  );
}

export default ResourceView;
