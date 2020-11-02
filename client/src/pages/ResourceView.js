import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
import { Col, Row, Container, Collapse } from "reactstrap";
import { Box } from "@chakra-ui/core";

import { useParams } from "react-router-dom";
import DonateButton from "../components/DonateButton";
import Cart from "../components/Cart";

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
          <Container>
            <br />
            <Col xs={12}>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <Row>
                  <h3>{data.resource.name}</h3>
                </Row>
              </Box>
              <h2>{data.resource.shortDescription}</h2>
              <br />
              <h4 class="italic">Contibutor {data.resource.displayName}</h4>

              {data.resource.images.map((image) => (
                <Col key={`image-${data.resource.images.indexOf(image)}`}>
                  <img
                    src={`${image.fileURL}`}
                    alt={`${image.imageCaption}`}
                    width="100%"
                  ></img>
                  <p class="caption">
                    <span>{image.imageCaption}</span>
                  </p>
                </Col>
              ))}

              <Row>
                <p>{data.resource.resourceBody}</p>
              </Row>
            </Col>
            <br />
            <br />
            <br />
            {data.resource.videos.map((video) => (
              <Col xs={{ size: 12, offset: 1 }}>
                <Row key={`video-${data.resource.videos.indexOf(video)}`}>
                  <Row className="center">
                    <iframe
                      width="100%"
                      src={`${video.fileURL}`}
                      frameBorder="0"
                      title={video.videoCaption}
                      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                    <br />
                    <br />
                    <p class="caption">
                      <span>{video.videoCaption}</span>
                    </p>
                  </Row>
                  <br />
                </Row>
              </Col>
            ))}

            <br />
            <br />
            <Col xs={12}>
              <br />
              <br />
              <Row className="center">
                <DonateButton resource={data.resource}></DonateButton>
              </Row>
              <br />
              <br />
            </Col>
          </Container>
          <Cart />
        </div>
      )}
    </main>
  );
}

export default ResourceView;
