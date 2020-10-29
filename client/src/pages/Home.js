import React from 'react';
import { Jumbotron, Row, Col, Container} from 'reactstrap';

import Resource from "../components/Resource";
import Search from '../components/Search';


import Cart from '../components/Cart';

const Home = () => {
    return (
        <div>
            
            <Jumbotron className="hometron">
                <Row xs={1} md={2}>
                    <Col xs={{ size: 12 }} sm={{ size: 6, order: 2, offset: 1}} text="center">
                    <h1>Teach Me To.</h1>
                    <h3>What do you want to learn today?</h3>
                    </Col>
                </Row>
            </Jumbotron>
            
            <Col className="homesearch" xs={{ size: 8, offset:2 }} sm="4" md={{ size: 6, offset: 3 }} lg={{ size: 6, offset:3 }}>
                <Search></Search>
            </Col><br />
            <Container className="carousel">
                <Col xs="12" sm="10" md={{ size: 6, offset: 3 }} lg={{ size:8, offset:3}}>
                {/* <Row className="resource"> */}
                    <Resource></Resource>
                {/* </Row> */}
                </Col> 
            </Container>
            <br />
            <Cart />
        </div>
    );
};
    export default Home; 