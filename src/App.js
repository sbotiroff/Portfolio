import React, { Component } from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
