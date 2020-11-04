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
              <h4>{data.resource.shortDescription}</h4>
              <br />
              <h4 class="italic">Contibutor {data.resource.displayName}</h4>

              {data.resource.images.map((image) => (
                <Col key={`image-${data.resource.images.indexOf(image)}`}>
                  <img
                    src={`${image.fileURL}`}
                    alt={`${image.imageCaption}`}
                    width="100%"
                  ></img>
                  <br></br>
                  <span>{image.imageCaption}</span>
                </Col>
              ))}

              <br></br>
              <p>{data.resource.resourceBody}</p>
            </Col>
            <br />
            <br />
            <br />
            {data.resource.videos.map((video) => (
              <Col key={`video-${data.resource.videos.indexOf(video)}`}>
                    <iframe
                      src={`${video.fileURL}`}
                      frameBorder="0"
                      style={{maxWidth:500}}
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
              <br />
              <br />
                <DonateButton resource={data.resource}></DonateButton>
              <br />
              <br />
            </Col>
          </Container>
        </div>
      )}
    </main>
  );
}

export default ResourceView;
