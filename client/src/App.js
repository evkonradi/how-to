import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
<<<<<<< HEAD
// import ApolloClient from 'apollo-boost';
import './App.scss';
=======
import ApolloClient from 'apollo-boost';
>>>>>>> cf28f710e1bfb5fc833ea87d4aba3e4b7b5da703

import Home from './pages/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Resource from './pages/Resource';

const client = new ApolloClient({
  // request: (operation) => {
  //   const token = localStorage.getItme('id_token')
  //   operations.setContext({
  //     headers: {
  //       authorization: token? `Bearer ${token}` : ''
  //     }
  //   })
  // },
  uri: '/graphql',
})

function App() {
  return (
<<<<<<< HEAD
  //  <ApolloProvider>
  //    <Router>
       <div>
         {/* <Header>
         <Nav />
         </Header> */}
         <Home></Home>
         {/* <StoreProvider> */}
           
           {/* <Switch>
             <Route exact path="/" component={Home} /> */}
             {/* <Route component={NoMatch} /> */}
           {/* </Switch> */}
         {/* </StoreProvider> */}
       
       <Footer></Footer>
       </div>
    //  </Router>
    // </ApolloProvider>
=======
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resource/:id?" component={Resource} />
            {/* <Route component={NoMatch} /> */}
          </Switch>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
>>>>>>> cf28f710e1bfb5fc833ea87d4aba3e4b7b5da703
  );
}

export default App;
