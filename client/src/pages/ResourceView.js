import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_RESOURCE } from "../utils/queries";
import { Col, Container, Row } from "reactstrap";
import { Box } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import PayButton from "../components/PayButton";
import Auth from "../utils/auth";
import { QUERY_USER_PAID_RESOURCES } from "../utils/queries";
import dollarImg from "./dollarBill.png";

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

      if (getUsername() === data.resource.displayName)
      {
        isPaidResource = false; 
      }

      return isPaidResource;
    }
  }

  return (
    <main>
      {loading || resQuery.loading ? (
        <div>Loading...</div>
      ) : (
        <div className="main-container">
          <Box bg="transparent" height="40px"></Box>
          <Box className="copyBox">
            <Col xs={12}>
              <Box bg="wheat" w="100%" p={4} color="#253237">
                  <h1>{data.resource.name}</h1>
              </Box> 
              <Box bg="transparent" height="20px"></Box>
              {/* <Box className="one-third">
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
                ): null} */}
              {/* </Box> */}
        
              {/* <Box bg="transparent" height="20px"></Box>
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
            ))} */}
       
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
                   
                         <Box bg="transparent" height="30px"></Box>
                         </Col>
                  ): null}

                </Col>
                
                <Box className="photo-grid">
                  {!needPayForResource() ? (
                    <>
                      {data.resource.images.map((image) => (
                        <Box className="photo-grid-item" key={`image-${data.resource.images.indexOf(image)}`}>
                          <img
                          class="img-fluid"
                            className="resourceImg"
                            src={`${image.fileURL} `} 
                            alt={`${image.imageCaption}`}
                          ></img>
               
                          <p className="caption">{image.imageCaption}</p>
                        </Box>
                      ))}
                    </>
                  ): null}  
                </Box>

              </Row>
        
              {!needPayForResource() ? (
                <p>{data.resource.resourceBody}</p>
              ): null}  
          
            </Col>


            {!needPayForResource() ? (
              <>
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
                        <p className="caption">{video.videoCaption}</p>
                        <br></br>
                        <br></br>
                  </Col>
                ))}
              </>
            ): null}  

            {needPayForResource() ? (
              <>
                <div className="dollarSignContainer">
                  <img className="imgDollar" src={dollarImg} alt="Dollar Sign" />
                </div>
              </>
            ): null}  
        </Box>
        </div>
      )}
    </main>
  );
}

export default ResourceView;
