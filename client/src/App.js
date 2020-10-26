import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import './App.scss';
import ApolloClient from 'apollo-boost';
import SignupLogin from './components/SignupLogin'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import ResourceAddEdit from './pages/ResourceAddEdit';
import Signup from "./components/SignUp"


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
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resource/:id?" component={ResourceAddEdit} />
            <Route exact path="/welcome" component={SignupLogin} />
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
