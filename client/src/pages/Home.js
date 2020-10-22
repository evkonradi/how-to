//comments
import React from "react";
import { Row, Col} from "react-bootstrap";
// import { Header } from "./components/Header";
// import { Nav } from "./components/Nav";
import Resource from "../components/Resource";

const Home = () => {
    return (
        <div className="container">
            {/* <Header>
            <Nav></Nav>
            </Header> */}
            <Row>
                <h1>TEST</h1>
                <Resource></Resource>
            </Row>
        </div>
    );
};
    export default Home; 