import React from 'react';
// import Infiniteloop from './components/Infiniteloop'
import Unsplash from './components/Unsplash'
// import Cleanup from './components/Cleanup'
import './App.css';
import './Appsecond.css';
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'

const App = () => {

  return (
    <>
     {/* <h1>Welcome to React</h1> */}
     <Header />
     <Slider />
     
     <Unsplash />
     <Footer />
    </>
  );
}

export default App;

