import React from 'react';
import { Jumbotron, Row, Col} from 'reactstrap';

import Resource from "../components/Resource";
import Search from '../components/Search';

const Home = () => {
    return (
        <div >
            
            <Jumbotron className="hometron">
                
                    <Col xs={{ size: 12 }} sm={{ size: 12, order: 2, offset: 1}} text="center">
                    <h1>Teach Me To.</h1>
                    <h3 className="byline">What do you want to learn today?</h3>
                    </Col>
               
            </Jumbotron>
            
            <Col className="homesearch" sm={{size:8, offset:2}} lg={{ size:6, offset:3}}>
                <Search></Search>
            </Col><br />

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