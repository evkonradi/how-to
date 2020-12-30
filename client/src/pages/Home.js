import React from 'react';
import { Jumbotron, Col} from 'reactstrap';
import Resource from "../components/Resource";
import Search from '../components/Search';
import logo from "./teach_me_to_logo-01.png";
import { Link } from 'react-router-dom';
import { Box } from "@chakra-ui/core";
import $primary from '../App.scss';

// const Home = () => {
//     return (
//         <div >
     
//             <Box className="hometron">
            
//             <img className="medium" src={logo} alt="logo, teach me to" />
//                     <Col className="heading"  text="center">
//                     <h1>Teach Me To.</h1>
//                     <h4 className="byline">What do you want to learn today?</h4>
//                     </Col>
//                     <Col className="homesearch" sm={{size:8, offset:2}} lg={{ size:6, offset:3}} bg={$primary}>
//                 <Search></Search>
//             </Col>
//             </Box>
            
//             {/* <Box bg="transparent" h="30px"></Box> */}

//             <Box id="col2" sm={{size:8, offset:2}} lg={{ size:6, offset:3}} className="carouselMain" >
//             {/* <Box className="badgeNew">NEW POST</Box> */}
//             <p className="new">NEW POSTS</p>
//                 <Resource></Resource>
//             </Box> 

           
//             <Jumbotron className="whitespace" align="center" bg={$primary}>
//             <Box className="copyBox" maxW="50%">
//             <p className="copy"> Start creating and sharing your knowledge with others on TeachMeTo.</p> 
//             <p className="copy">Add images, video, and the "written" word.</p>
//             <Link className="copyLink" to="/signup">Signup |</Link>
//             <Link className="copyLink" to="/login">Login</Link>
//             </Box>
//             </Jumbotron>


//         </div>
//     );
// };

const Home = () => {
    return (
        <div className="main-container">
            

            <div className="main-grid">
            <Box className="hometron">
                    <Box className="main-grid-item" >
                    <Box className="copyBox" >
                    <img className="medium" src={logo} alt="logo, teach me to" />
                    <h1>Teach Me To.</h1>
                    <h4 className="byline">What do you want to learn today?</h4>
                    <Search></Search>
            <p className="copy"> Start creating and sharing your knowledge with others on TeachMeTo.</p> 
            <p className="copy">Add images - videos - & words. Help teach others with the option to offer FREE or PAID resources.</p>
            <Link className="copyLink" to="/signup">Signup |</Link>
            <Link className="copyLink" to="/login">Login</Link>
            </Box>
   
            <Box className="main-grid-item" >
                <Resource></Resource>
                </Box>
                </Box>
                </Box>
            </div>
                    {/* <Col className="homesearch" sm={{size:8, offset:2}} lg={{ size:6, offset:3}} bg={$primary}>
                <Search></Search>
            </Col> */}

            
            {/* <Box bg="transparent" h="30px"></Box> */}
           
            {/* <Box id="col2" sm={{size:8, offset:2}} lg={{ size:6, offset:3}} className="carouselMain" > */}
            {/* <Box className="badgeNew">NEW POST</Box> */}
         
           
          
       
       
        </div>
    );
};

    export default Home; 