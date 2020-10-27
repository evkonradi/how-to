import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import SignupLogin from './components/SignupLogin'
import './App.scss';

import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ResourceAddEdit from './pages/ResourceAddEdit';
import Signup from "./components/SignUp"
import ResourcePage from "./pages/ResourcePage";
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
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resource/:id?" component={ResourceAddEdit} />
            <Route exact path="/welcome" component={SignupLogin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/page" component={ResourcePage} />
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
