import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from './pages/Home';
// import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from './components/Footer';
import Resource from './pages/Resource';
{/* The following line can be included in your src/index.js or App.js file*/}


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
    <ApolloProvider client={client}>

      <Router>
        <div>
          <Header>
            {/* <Switch>
              <Route exact path="/login" component={Login} />
            </Switch> */}
          </Header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resource/:id?" component={Resource} />
            
            {/* <Route component={NoMatch} /> */}
          </Switch>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
