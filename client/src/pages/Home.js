import React from 'react';
import { Jumbotron, Col} from 'reactstrap';
import Resource from "../components/Resource";

const Home = () => {
    return (
        <div >
            
  
            
            {/* <Col className="homesearch" sm={{size:8, offset:2}} lg={{ size:6, offset:3}}>
                <Search></Search>
            </Col><br /> */}

            <p className="recentlyAdddeP">See What's New</p>
            <Col id="col2" sm={{size:8, offset:2}} lg={{ size:6, offset:3}} className="carousel cardTextAlign" >
                <Resource></Resource>
            </Col> 
 
            <Jumbotron className="whitespace" />
            <br />
            
        </div>
    );
};
    export default Home; 