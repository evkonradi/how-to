import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
import CardResource from "../CardResource";

import Carousel from "react-bootstrap/Carousel";

const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  const [resources, setResources] = useState([]);
  const resources2 = resources.slice(-6);
  // setResources(data?.resources || []);

  useEffect(() => {
    if(data) {
      data.resources.forEach((resource) => {
        idbPromise('resourcesCarousel', 'put', resource);
      });
      setResources(data.resources);
    } else if (!loading) {
      idbPromise('resourcesCarousel', 'get').then((resourcesOffline) => {
         setResources(resourcesOffline);
      });
    }
  }, [data, loading]);

  return (
    <main>
      <div class="col-sm-10 offset-sm-1 col-lg-8 offset-lg-2">
        {loading ? <div>Loading...</div> : 
            <Carousel className="cardTextAlign">
              {
                resources2.map((resource) => (
                  <Carousel.Item key={resource._id} className="cardTextAlign">

                    <CardResource resource={resource} useClass="card-img-size-carousel"></CardResource>
                    
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
