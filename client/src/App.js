import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';

import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItme('id_token')
//     operations.setContext({
//       headers: {
//         authorization: token? `Bearer ${token}` : ''
//       }
//     })
//   },
//   uri: '/graphql',
// })

function App() {
  return (
  //  <ApolloProvider>
  //    <Router>
       <div>
         <Nav />
         <Home></Home>
         {/* <StoreProvider> */}
           
           {/* <Switch>
             <Route exact path="/" component={Home} /> */}
             {/* <Route component={NoMatch} /> */}
           {/* </Switch> */}
         {/* </StoreProvider> */}
       
       <Footer></Footer>
       </div>
  //    </Router>
  //  </ApolloProvider>
  );
}

export default App;
