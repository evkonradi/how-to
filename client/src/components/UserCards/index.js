import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { QUERY_RESOURCES } from '../../utils/queries';
import { Card, CardBody, CardImg, CardTitle, CardText } from "react-bootstrap"

const UserCards = ({ resources, imgWidth }) => {
    const { username } = useParams();
    const { loading, data } = useQuery(QUERY_RESOURCES, {
        variables: { username: username },
    });

    if (!resources.length) {
        return <h4>Share your knowledge! Create a New Post.</h4>;
    }
    
    return (
        <main>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {data.resources &&
                        data.resources.map(resources => (
                            <Link className="mainCard" to={`/resource/${data.resources._id}`} key={data.resources._id}>
                                <Card outline color='dark'>
                                    <Card.Body>
                                    <Card.Title>{data.resources.name}</Card.Title>
                                    {/* <Card.Img variant="top" src={resources.images.length ? resources.images[0].fileURL : "./images/favicon-16x16.png"} style={{width:imgWidth}} alt = {resources.name} /> */}
                                    <Card.Text>{data.resources.shortDescription}</Card.Text>
                                    <Card.Text>Created: {data.resources.dateCreated} by {data.resources.displayName}</Card.Text>
                                    <br></br>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))}
                </div>
            )}
        </main>
      );
}

export default UserCards;