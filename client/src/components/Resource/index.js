import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
//import { useParams } from "react-router-dom";
import CardResource from "../CardResource";

import Carousel from "react-bootstrap/Carousel";

const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  const [r, setR] = useState([]);
  let resources = data?.resources || [];

  useEffect(() => {
    if(resources.length) {
      resources.forEach((resource) => {
        idbPromise('resourcesCarousel', 'put', resource);
      });
      setR(resources);
    } else if (!loading) {
      idbPromise('resourcesCarousel', 'get').then((resourcesOffline) => {
         resources = resourcesOffline;
         setR(resourcesOffline)
      });
    }
  }, [data, loading]);


  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : 
            <Carousel>
              {
                r.map((resource) => (
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
