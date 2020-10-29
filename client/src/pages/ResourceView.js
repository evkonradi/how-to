import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
import { Col, Row, Container } from "reactstrap";
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
          <Container>
            <br />
            <Col xs={12} md={10} lg={10} offset={3}>
              <Box bg="#5C6B73" w="100%" p={4} color="#C2DFE3">
                <Row>
                  <h3>{data.resource.name}</h3>
                </Row>
              </Box>

              <Row>
                <h5>{data.resource.shortDescription}</h5>
                <br />
                <br />
              </Row>

              <Row>
                <h5 class="italic">Written by: {data.resource.displayName}</h5>
              </Row>

              {data.resource.images.map((image) => (
                <Row key={`image-${data.resource.images.indexOf(image)}`}>
                  <Row>
                    <img
                      src={`${image.fileURL}`}
                      alt={`${image.imageCaption}`}
                      width="300"
                    ></img>
                  </Row>
                  <Row>
                    <p class="caption">
                      <span>{image.imageCaption}</span>
                    </p>
                  </Row>
                </Row>
              ))}

              <Row>
                <p>{data.resource.resourceBody}</p>
              </Row>

              {data.resource.videos.map((video) => (
                <Col xs={12}>
                  <Row key={`video-${data.resource.videos.indexOf(video)}`}>
                    <Row>
                      <iframe
                        width="300"
                        src={`${video.fileURL}`}
                        frameBorder="0"
                        title={video.videoCaption}
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    </Row>
                    <br /> <br />
                    <Row>
                      <p class="caption">
                        {" "}
                        <br /> <br />
                        <span>{video.videoCaption}</span>
                      </p>
                    </Row>
                    <br />
                  </Row>
                </Col>
              ))}

              <Row>
                <DonateButton resource={data.resource}></DonateButton>
              </Row>
            </Col>
          </Container>
        </div>
      )}
    </main>
  );
}

export default ResourceView;

// this can wrap the video to size from @chakra

{
  /* <AspectRatioBox maxW="560px" ratio={1}>
  <Box
    as="iframe"
    title="naruto"
    src="https://www.youtube.com/embed/QhBnZ6NPOY0"
    allowFullScreen
  />
</AspectRatioBox> */
}
