import React, { useEffect } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";


// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";
import { useResourceContext } from '../../utils/GlobalState';
import { UPDATE_RESOURCES } from '../../utils/actions';
// import cook from '../../public/cook.jpg';

// import Carousel,
//       CarouselItem,
//       CarouselControl,
//       CarouselIndicators,
//       CarouselCaption from "reactstrap";


// body inverse style={{ backgroundColor: '#9DB4C0', borderColor: '#333' }}>
// key={image.id} use with Carousel.Item once db established

function Resource() {
const [state, dispatch] = useResourceContext();

const {currentResource } = state;

const { loading, data } = useQuery(QUERY_RESOURCES);

  // const { name, shortDescription, link, imageURL} = Resource;
// return state.resources.filter(resource => resource.name._id === currentResource);
 useEffect(() => {
   if(data) {
     dispatch({
       type: UPDATE_RESOURCES,
       resources: data.resources
     });
     data.resources.forEach((resource) => {
       idbPromise('resources', 'put', resource);
     });
   }  else if (!loading) {
     idbPromise('resources', 'get').then((resources) => {
       dispatch({
         type: UPDATE_RESOURCES,
         resources: resources
       });
     });
   }
 }, [data, loading, dispatch]);   
 
 function filterResources() {
   if (!currentResource) {
     return state.resources;
   }

   return state.resources.filter(resource => resource.name._id === currentResource);
 }
  return (
    <div>
    <Carousel>
      <Carousel.Item>
    
        <Col xs="auto" sm="12" offset="5">
          <Card style={{ width: "18rem" }}>
            <CardBody inverse style={{ backgroundColor: "#9DB4C0"}}>
          <CardTitle>{state.name.length}</CardTitle>
          <CardSubtitle>{state.name.length}</CardSubtitle>
          </CardBody>
          <img width="100%" src="{imageURL}" alt="tag" />
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>{state.shortDescription.length}</CardText>
          <CardLink href='#Resource'>Link to Resource</CardLink>
          </CardBody>
        </Card>
        </Col>
    
      </Carousel.Item>
      <Carousel.Item>
      <Col xs="3" sm="12">
      <Card style={{ width: "18rem" }}>
            <CardBody inverse style={{ backgroundColor: "#9DB4C0" }}>
          <CardTitle>How To Eat</CardTitle>
          <CardSubtitle>Contributor Name</CardSubtitle>
          </CardBody>
          <img top width="100%" src="/images/clean.jpg" alt="clean" />
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
        </Col>
      </Carousel.Item>
      <Carousel.Item>
      <Col xs="12" sm="12" offset="5">
      <Card style={{ width: "18rem" }}>
            <CardBody inverse style={{ backgroundColor: "#9DB4C0" }}>
          <CardTitle>How To Clean</CardTitle>
          <CardSubtitle>Contributor Name</CardSubtitle>
          </CardBody>
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <img top width="100%" src="/images/blueberry.jpg" alt="clean" />
          <CardText>Nulla vitae elit libero, a pharetra augue mollis interdum.</CardText>
          <CardLink href='#'>Link to Resource</CardLink>
          </CardBody>
        </Card>
        </Col>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

// CarouselControl.propTypes = {
//   direction: PropTypes.oneOf(['prev', 'next']).isRequired,
//   onClickHandler: PropTypes.func.isRequired,
//   cssModule: PropTypes.object,
//   directionText: PropTypes.string
// };

// CarouselItem.propTypes = {
//   ...Transition.propTypes,
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   in: PropTypes.bool,
//   cssModule: PropTypes.object,
//   children: PropTypes.node,
//   slide: PropTypes.bool,
// };

export default Resource;
