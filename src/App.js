import React from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
