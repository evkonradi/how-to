import React, { useEffect, useState } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption }  from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
import { useParams } from "react-router-dom";

// import CardBody from 'react-bootstrap/CardBody';
import Carousel from "react-bootstrap/Carousel";
import { useResourceContext } from '../../utils/GlobalState';
import { UPDATE_RESOURCE } from '../../utils/actions';
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
const { id } = useParams();

const {currentResource, setCurrentResource } = useState({});

const { resources } = state;

const { loading, data } = useQuery(QUERY_RESOURCE, {
  variables: { _id: id },
  skip : !id
});

useEffect(() => {
  if (resources.length) {
    setCurrentResource(resources.find(resource => resource._id === id));
  }
  else if (data) {
    dispatch({
      type: UPDATE_RESOURCE,
      resources: data.resources
    });

    data.resources.forEach((resource) => {
      idbPromise('resouces', 'put', resource);
    });
  }
  else if (!loading) {
    idbPromise('resources', 'get').then((indexedDB) => {
      dispatch({
        type: UPDATE_RESOURCE,
        resources: indexedDB
      });
    });
  }
}, [resources, data, loading, dispatch, id])

  return (
    <div>
    <Carousel>
      <Carousel.Item>
    
        <Col xs="auto" sm="12" offset="5">
          <Card style={{ width: "18rem" }}>
            <CardBody inverse style={{ backgroundColor: "#9DB4C0"}}>
          <CardTitle>{currentResource.name}</CardTitle>
          {/* <CardSubtitle>{currentResource.length}</CardSubtitle> */}
          </CardBody>
          <img width="100%" src="{image.id}" alt="tag" />
          {/* <CardImg>image here</CardImg> */}
          <CardBody>
          <CardText>{currentResource.shortDescription}</CardText>
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
