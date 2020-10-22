//comments
import React from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';
// import { Header } from "./components/Header";
// import { Nav } from "./components/Nav";
import Resource from "../components/Resource";
import Search from '../components/Search';

const Home = () => {
    return (
        <div>
            {/* <Header>
            <Nav></Nav>
            </Header> */}
            <Jumbotron fluid>
            <Row xs={1} md={2}>
                <Col sm={{ size: 6, order: 2, offset: 1}}><h3>Welcome to
                    <br></br>TeachMETo.</h3> 
                    <h4>The place to learn.</h4> 
                </Col>
            </Row>
            </Jumbotron>
            
                <Col xs={{ size: 8, offset:2 }} sm="4" md={{ size: 6, offset: 3 }}>
                <Search></Search>
                </Col>
            
            <br></br>
            <Row className="resource">
            <Col xs="12" sm="10" md={{ size: 6, offset: 4 }}>
            <Resource></Resource>
            </Col>
            </Row>
        </div>
    );
};
    export default Home; 