import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from './pages/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Resource from './pages/Resource';


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItme('id_token')
    operation.setContext({
      headers: {
        authorization: token? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  const {stats, searchField} = this.state
  // const filteredMostPopular 
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resource/:id?" component={Resource} />
            <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            {/* <Route component={NoMatch} /> */}
          </Switch>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
