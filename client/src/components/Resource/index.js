import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
//import { useParams } from "react-router-dom";
import CardResource from "../CardResource";

import Carousel from "react-bootstrap/Carousel";

const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  let resources = data?.resources || [];

  useEffect(() => {
    if(resources.length) {
      resources.forEach((resource) => {
        idbPromise('resourcesCarousel', 'put', resource);
      });
    } else if (!loading) {
      idbPromise('resourcesCarousel', 'get').then((resourcesOffline) => {
        resources = resourcesOffline;
        console.log("Resources Offline resources after assign:");
        console.log(resources);
        return resources;
      });
    }
  }, [data, loading]);

  console.log("Resources before DOM:");
  console.log(resources);
  console.log(loading);

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : 
            <Carousel>
              {
                resources.map((resource) => (
                  <Carousel.Item key={resource._id}>

                    <CardResource resource={resource} imgWidth="100%"></CardResource>

                  </Carousel.Item>
                ))
              }
            </Carousel>
        }
      </div>
    </main>
  );
};

export default Resource;
