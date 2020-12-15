import React from 'react';
import './App.css';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Login from './pages/Login'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ResourceAddEdit from './pages/ResourceAddEdit';
import ResourceView from './pages/ResourceView';
import ProfilePage from "./pages/ProfilePage";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Statement from "./pages/Statement";
import NoMatch from "./pages/NoMatch"
import Cart from './components/Cart';
import { ThemeProvider } from "@chakra-ui/core";


import { StoreProvider } from "./utils/GlobalState";

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider>
        
          <StoreProvider>
            <div className="main">
              <Header />
              <Cart />
              
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resource/:id?" component={ResourceAddEdit} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/articles/:id" component={ResourceView} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/success" component={Success} />
                <Route exact path="/statement/" component={Statement} />
                <Route exact path="/nomatch" component={NoMatch} />
                <Route component={NoMatch} /> 
              </Switch>
              
              <Footer />
            </div>
          </StoreProvider>
        
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
