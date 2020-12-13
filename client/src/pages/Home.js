import React from 'react';
import { Jumbotron, Col} from 'reactstrap';
import Resource from "../components/Resource";
import Search from '../components/Search';
import logo from "./teach_me_to_logo-01.png";

const Home = () => {
    return (
        <div >
            
            <Jumbotron className="hometron">
            <img className="medium" src={logo} alt="logo, teach me to" />
                    <Col xs={{ size: 12 }} sm={{ size: 12, offset: 2}} text="center">
                    <h1>Teach Me To.</h1>
                    <h4 className="byline">What do you want to learn today?</h4>
                    </Col>
            </Jumbotron>
            
            <Col className="homesearch" sm={{size:8, offset:2}} lg={{ size:6, offset:3}}>
                <Search></Search>
            </Col>

            <p className="recentlyAddP">Recently added articles</p>
            <Col id="col2" sm={{size:8, offset:2}} lg={{ size:6, offset:3}} className="carousel cardTextAlign" >
                <Resource></Resource>
            </Col> 
            <Jumbotron className="whitespace" />
            <br />
            
        </div>
    );
};
    export default Home; 