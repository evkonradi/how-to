//comments
import React from 'react';
import { Jumbotron, Row, Col, Container} from 'reactstrap';
import Header  from "../components/Header";
import Nav from "../components/Nav";
import Resource from "../components/Resource";
import Search from '../components/Search';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div>
            
            <Jumbotron className="hometron">
                <Row xs={1} md={2}>
                    <Col xs={{ size: 12 }} sm={{ size: 6, order: 2, offset: 1}}>
                    <h1>What would you like to <h1 className="learn">learn</h1> today?</h1>
                    </Col>
                </Row>
            </Jumbotron>
            
            <Col className="homesearch" xs={{ size: 8, offset:2 }} sm="4" md={{ size: 6, offset: 3 }}>
                <Search></Search>
            </Col><br />
            <Container>
                <Col xs="12" sm="10" md={{ size: 6, offset: 4 }}>
                {/* <Row className="resource"> */}
                    <Resource></Resource>
                {/* </Row> */}
                </Col> 
                </Container>
        </div>
    );
};
    export default Home; 