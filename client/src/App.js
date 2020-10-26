import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './App.scss';

import Home from './pages/Home';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ResourceAddEdit from './pages/ResourceAddEdit';
import { ThemeProvider } from "@chakra-ui/core";

{/* <ThemeProvider theme={customTheme}>{props.children}</ThemeProvider>; */}

const client = new ApolloClient({
  // request: (operation) => {
  //   const token = localStorage.getItme('id_token')
  //   operations.setContext({
  //     headers: {
  //       authorization: token? `Bearer ${token}` : ''
  //     }
  //   })
  // },
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resource/:id?" component={ResourceAddEdit} />
            {/* <Route component={NoMatch} /> */}
          </Switch>

          <Footer />
        </div>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
