import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import PhotoGrid from './components/PhotoGrid'; 
import Parallax from './components/Parallax'; 
import Footer from './components/Footer';
import Login from './components/Login';


class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
          <Header /> 
          <Login />
          <PhotoGrid />
          <Parallax />
          <Footer />
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
