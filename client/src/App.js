import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from 'apollo-boost';
import SearchBox from './components/SearchBox';
import Home from './pages/Home';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';


const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItme('id_token')
    operations.setContext({
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
  //  <ApolloProvider>
  //    <Router>
       <div>
         <Header>
         <SearchBox placeholder="" handleChange={(e) => this.setState({searchField: e.target.value})}/>
         <Nav />
         </Header>
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
  );
}

export default App;
