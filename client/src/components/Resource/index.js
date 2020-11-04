import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESOURCES_HOMEPAGE } from '../../utils/queries';
import { idbPromise } from "../../utils/helpers";
//import { useParams } from "react-router-dom";
import CardResource from "../CardResource";

import Carousel from "react-bootstrap/Carousel";

const Resource = () => {
  const { loading, data } = useQuery(QUERY_RESOURCES_HOMEPAGE);
  const [resources, setResources] = useState([]);
  //setResources(data?.resources || []);

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

  console.log("Resources:");
  console.log(resources);

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : 
            <Carousel className="cardTextAlign">
              {
                resources.map((resource) => (
                  <Carousel.Item key={resource._id} className="cardTextAlign">

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
